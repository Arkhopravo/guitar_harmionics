const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const User = require('./models/User.js')
const Post = require('./models/Post.js')
const Payment = require('./models/Payment.js')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const multer = require('multer')
const uploadMiddleware = multer({dest: 'uploads/' });
const bodyParser = require('body-parser');
const BASE_URL = ""

const storage = multer.diskStorage({
    destination: '/tmp/uploads', // Use '/tmp' for temporary storage
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  
  const upload = multer({ storage });



const stripe = require('stripe')('sk_test_51LVV9TSIAChIdT5GIwm9vsklCMNQkXMJDRz0hfPxw4EyZmcjlIqfTBx2s0MvlYoSUIeSriLqgvCJn3n7E29chtrx00pyTzZWtf'); // Replace with your Stripe secret key

const fs = require('fs')



const salt = bcrypt.genSaltSync(10);
const secret = 'secret'

app.use(cors({credentials: true, origin:["http://localhost:5173", ""]}))
app.use(bodyParser.json());
app.use(express.json())
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'))





mongoose.connect('mongodb+srv://arkhopsarkar:4wimyFN5FMTgEaUf@cluster0.2au5ams.mongodb.net/?retryWrites=true&w=majority')


app.get('/', (req, res) => {
    res.send("server is running perfectly")
})
app.post('/register', async (req,res)=> {
   const {username, email, password} = req.body;
   try{
       const UserDoc = await User.create({
        username: username,
        email: email,
        password: bcrypt.hashSync(password,salt)
        })
       res.json(UserDoc);

   }
    catch(err){
        res.status(400).json(err)
        // console.log(err)
    }
    
})


app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const UserDoc = await User.findOne({ email: email });
    const passOk = bcrypt.compareSync(password, UserDoc.password);
    
    if (passOk) {
        const tokenPayload = { email: UserDoc.email, id: UserDoc._id, username: UserDoc.username };
        jwt.sign(tokenPayload, secret, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token', token).json({
                id:UserDoc._id,
                email,
            });
        });
    } else {
        res.status(400).json('wrong credentials');
    }
});


    app.get("/profile", (req, res) => {
        const { token } = req.cookies;
        jwt.verify(token, secret, {}, (err, info) => {
            if (err) throw err;
            
            res.json(info);
        });
        
    });

   
    
    
    

app.post("/logout", (req, res) => {
    res.cookie('token', '').json('ok');
})




app.post("/post", uploadMiddleware.single('files'), async (req, res) => {
    const { originalname, path } = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = path + '.' + ext;
    fs.renameSync(path, newPath);

    const { token } = req.cookies;

    try {
        const info = jwt.verify(token, secret);

        // Create a new instance of Post with the required fields
        const newPost = new Post({
            title: req.body.title,
            summary: req.body.summary,
            content: req.body.content,
            cover: newPath,
            author: info.id // Use the ObjectId of the author
        });

        // Save the new post
        const savedPost = await newPost.save();

        res.json(savedPost);
    } catch (err) {
        // Handle JWT verification error or other errors
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.get("/post", async (req, res) => {
    const posts = await Post.find()
        .sort({ createdAt: -1 }) // First, apply the sorting
        .limit(20) // Then, limit the results
        .populate('author', ['username']); // Finally, populate the 'author' field
    
    res.json(posts);
});


app.put("/post", uploadMiddleware.single('files'), async (req, res) => {
    let newPath = null;
    if (req.file) {
        const { originalname, path } = req.file;
        const parts = originalname.split('.');
        const ext = parts[parts.length - 1];
        newPath = path + '.' + ext;
        fs.renameSync(path, newPath);
    }

    const { token } = req.cookies;

    try {
        const info = jwt.verify(token, secret);

        const { id, title, summary, content } = req.body;
        const postDoc = await Post.findById(id);
        
        if (!postDoc) {
            return res.status(404).json({ error: 'Post not found' });
        }
        
        const isAuthor = postDoc.author.equals(info.id);
        if (!isAuthor) {
            return res.status(400).json('You are not the author');
        }

        postDoc.title = title;
        postDoc.summary = summary;
        postDoc.content = content;
        postDoc.cover = newPath ? newPath : postDoc.cover;

        const updatedPost = await postDoc.save();

        res.json(updatedPost);

    } catch (err) {
        // Handle JWT verification error or other errors
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.get('/post/:id', async (req, res) => {
    const { id } = req.params;
    const postDoc = await Post.findById(id).populate('author', ['username'])
    res.json(postDoc);
});


// Define a route to create a subscription
app.post('/create-subscription', async (req, res) => {
    try {
      const { customerId, priceId } = req.body;
  
      // Create a subscription
      const subscription = await stripe.subscriptions.create({
        customer: customerId,
        items: [{ price: priceId }],
      });
  
      res.status(201).json(subscription);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while creating the subscription.' });
    }
  });


  app.post('/create-payment', async (req, res) => {
    try {
      const { userId, amount, currency } = req.body;
  
      // Create a new payment document
      const payment = new Payment({
        user: userId, // Assuming you have the user's ID
        amount,
        currency,
        // Add other payment-related details as needed
      });
  
      // Save the payment document to MongoDB
      await payment.save();
  
      res.status(201).json(payment);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while creating the payment.' });
    }
  });
  
  
  app.get('/user-payments/:userId', async (req, res) => {
    try {
      const { userId } = req.params;
  
      // Find all payments associated with the specified user
      const userPayments = await Payment.find({ user: userId });
  
      res.json(userPayments);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching user payments.' });
    }
  });
  
  



const PORT = process.env.PORT || 4000;

//app listeners
app.listen(PORT,()=> {
    console.log(`Server is running on port ${PORT}`);
})



//Blockcahin Web3

// Blockchain Server Code is starting from here

// listenToEvents();
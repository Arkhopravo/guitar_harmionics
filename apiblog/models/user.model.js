import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        retquire: true,
        unique: true,
    },
    email: {
        type: String,
        retquire: true,
        unique: true,
    },
    password: {
        type: String,
        retquire: true,
    },
    
    profilePicture: {
        type: String,
        default: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/2048px-Windows_10_Default_Profile_Picture.svg.png",
    }

},
{timestamps: true}
)

const User = mongoose.model('User', userSchema)

export default User;
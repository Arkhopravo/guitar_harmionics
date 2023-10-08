import React from 'react'
const reviewsData = [
    {
      id: 1,
      title: "Amazing Acoustic Guitar",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "John Doe",
    },
    {
      id: 2,
      title: "Best Electric Guitar for Rock",
      content: "Jane Smith was the Editor of Bass Guitar magazine from 2009 to 2011, before making strides into the world of Artist Relations with Sheldon Dingwall and Dingwall Guitars.",
      author: "Jane Smith",
    },
    {
      id: 3,
      title: "Zephyr Deluxe Regent",
      content: "Nick Wells was the Editor of Bass Guitar magazine from 2009 to 2011, before making strides into the world of Artist Relations with Sheldon Dingwall and Dingwall Guitars.",
      author: "Nick Wells",
    },
    {
      id: 4,
      title: "Gretsch G5420T-140",
      content: "Chris is the co-author of Eruption - Conversations with Eddie Van Halen. He is a 40-year music industry veteran who started at Boardwalk Entertainment (Joan Jett, Night Ranger) ",
      author: "Chris Gill",
    },
    {
      id: 5,
      title: "Best Electric Guitar for Rock",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "Jane Smith",
    },
  
    // Add more reviews as needed
  ];


const Review = () => {
  return (
    <>
 
    <div
      className= "container mx-auto py-8 dark bg-black text-white"
       
        >
            
    
      <h2 className="text-3xl font-semibold mb-4 items-center justify-center text-center">Guitar Instrument Reviews</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mr-12 ml-12">
        {reviewsData.map((review) => (
            <div
            key={review.id}
            className="bg-gray-800 text-white p-4 rounded shadow"
            >
            <h3 className="text-xl font-semibold mb-2">{review.title}</h3>
            <p className="text-gray-300">{review.content}</p>
            <p className="mt-2 text-sm text-gray-500">By {review.author}</p>
          </div>
        ))}
      </div>
      <div>
                
               
   

    
    
    </div> 
    </div>
    </>
  )
}

export default Review
export const users = {
  
    id: 1,
    username: "Nirmalkumar",
    fullName: "Nirmal Kumar",
    bio: "Nothing much write here",
    password: 12345678,
    profilePicture:'https://media.istockphoto.com/id/1203745533/vector/social-media-icons-mosaic-background-with-call-to-action.jpg?s=612x612&w=0&k=20&c=W-ho2NIZv2cn12BNlixRSdPIa_9OJgCJ-RODdl-aCjw=',
    posts: [
      { id: 1, content: "Hello World!", timestamp: new Date() },
      { id: 2, content: "My first post.", timestamp: new Date() },
    ],
  }
  
 export const handleLikeToggle =async (postId, newLikestatus) => {
    try {
      // Step 1: Fetch existing data
      const response = await fetch(`https://react-http-2faf5-default-rtdb.firebaseio.com/post/${postId}.json`);
  
      if (!response.ok) {
        throw new Error('Failed to fetch existing data from Firebase');
      }
  
      const existingData = await response.json();
  
      // Step 2: Edit the data (replace with your specific logic)
      const updatedData = {
        ...existingData,
        likeStatus:newLikestatus,
      };
  
      // Step 3: Submit the edited data back to Firebase
      const updateResponse = await fetch(`https://react-http-2faf5-default-rtdb.firebaseio.com/post/${postId}.json`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
  
      if (!updateResponse.ok) {
        throw new Error('Failed to update data in Firebase');
      }
  
      console.log('Data successfully updated in Firebase:', updatedData);
    } catch (error) {
      console.error('Error updating data in Firebase:', error.message);
    }
};

export const handleBookmarkToggle = async (postId, newBookmarkStatus) => {
try {
  // Step 1: Fetch existing data
  const response = await fetch(`https://react-http-2faf5-default-rtdb.firebaseio.com/post/${postId}.json`);

  if (!response.ok) {
    throw new Error('Failed to fetch existing data from Firebase');
  }

  const existingData = await response.json();

  // Step 2: Edit the data (replace with your specific logic)
  const updatedData = {
    ...existingData,
    bookmarkStatus:newBookmarkStatus,
  };

  // Step 3: Submit the edited data back to Firebase
  const updateResponse = await fetch(`https://react-http-2faf5-default-rtdb.firebaseio.com/post/${postId}.json`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  });

  if (!updateResponse.ok) {
    throw new Error('Failed to update data in Firebase');
  }

  console.log('Data successfully updated in Firebase:', updatedData);
} catch (error) {
  console.error('Error updating data in Firebase:', error.message);
}
};

import Post from "../posts/Post";
import { useLoaderData } from "react-router-dom";
import { handleLikeToggle,handleBookmarkToggle } from "../../utility/utility";
const Bookmarks =()=>{
    const bookmarkedPosts = useLoaderData()
    return <>
    {bookmarkedPosts.map(post =>
        <Post 
            key={post.postId}
        postId={post.postId}
        username={post.username}
        initialLikeStatus={post.likeStatus}
        initialBookmarkStatus={post.bookmarkStatus}
        onLikeToggle={handleLikeToggle}
        onBookmarkToggle={handleBookmarkToggle}
        timestamp={post.timestamp}
        content={post.content}
        comments={post.comments}/>
    
    )}</>
}

export  default Bookmarks;

export async function loader(){
    try {
      const response = await fetch('https://react-http-2faf5-default-rtdb.firebaseio.com/post.json');
  
      if (!response.ok) {
        throw new Error('Failed to fetch data from Firebase');
      }
      const data = await response.json();
      const bookmarks = [];
      for(const key in data){
        if(data[key].bookmarkStatus){
        bookmarks.push({
          postId: key,
          likeStatus:data[key].likeStatus,
          username:data[key].username,
          bookmarkStatus:data[key].bookmarkStatus,
          timestamp: data[key].timestamp,
          content:data[key].content,
          comments:data[key].comments,
        })}
      }
      return bookmarks;
      // Handle the data as needed
    } catch (error) {
      console.error('Error fetching data from Firebase:', error.message);
    }
    return null;
  }
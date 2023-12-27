import Post from "../posts/Post";
import { useLoaderData } from "react-router-dom";
import { handleLikeToggle,handleBookmarkToggle } from "../../utility/utility";
interface LoaderDataItem {
  postId: string;
  likeStatus: boolean;
  username: string;
  bookmarkStatus: boolean;
  timestamp: any;
  content: string;
  comments: {id:number,user:string,text:string}[];
}
const Bookmarks =()=>{
    const bookmarkedPosts = useLoaderData() as LoaderDataItem[] || null;
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
    } catch (error:any) {
      console.error('Error fetching data from Firebase:', error.message);
    }
    return null;
  }
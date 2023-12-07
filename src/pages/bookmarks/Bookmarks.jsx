import Post from "../posts/Post";
import { DUMMY_POST } from "../../utility/utility";
const Bookmarks =()=>{
    return <>
    {DUMMY_POST.map(post =>{
        if(post.bookmarkStatus){
             return <Post 
            key={post.postId}
        postId={post.postId}
        username={post.username}
        initialLikeStatus={post.likeStatus}
        initialBookmarkStatus={post.bookmarkStatus}
        // onLikeToggle={handleLikeToggle}
        // onBookmarkToggle={handleBookmarkToggle}
        timestamp={post.timestamp}
        content={post.content}
        comments={post.comments}/>
        }
        return null
    })}</>
}

export  default Bookmarks;
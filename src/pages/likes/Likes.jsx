import { DUMMY_POST } from "../../utility/utility";
import './Likes.scss'
import Post from "../posts/Post";
const Likes =()=>{
    return <>
    {DUMMY_POST.map(post =>{
        if(post.likeStatus){
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

export  default Likes;
import React,{useState} from 'react';
import { HeartOutlined, HeartFilled, BookOutlined, BookFilled, CommentOutlined,  } from '@ant-design/icons';
import { Card } from 'antd';

const Post = ({ postId, username, initialLikeStatus, initialBookmarkStatus, onLikeToggle, onBookmarkToggle, timestamp,content,comments }) => {
  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    setShowComments(!showComments);
  };
function convertDateToMinutes(date) {
  // Convert the date to milliseconds
  const dateInMilliseconds = date.getTime();

  // Calculate the total minutes
  const totalMinutes = Math.floor(dateInMilliseconds / (1000 * 60));

  return totalMinutes;
}
const totalMinutes = Math.floor(new Date().getTime() /(1000*60)) -convertDateToMinutes(new Date(Date.parse(timestamp))); // Convert timestamp to a readable format
const formattedTimestamp= totalMinutes >= 518400
    ? `${Math.floor(totalMinutes / 518400)} year`
    : totalMinutes >= 43200
    ? `${Math.floor(totalMinutes / 43200)} month`
    : totalMinutes >= 1440
    ? `${Math.floor(totalMinutes / 1440)} day`
    : totalMinutes >= 60
    ? `${Math.floor(totalMinutes / 60)} hour`
    : `${totalMinutes} minute`;
  return (

    <Card style={{marginBottom:'1rem'}}>
        <div className="user">
            <div className="userinfo">

              <img src="https://media.istockphoto.com/id/1203745533/vector/social-media-icons-mosaic-background-with-call-to-action.jpg?s=612x612&w=0&k=20&c=W-ho2NIZv2cn12BNlixRSdPIa_9OJgCJ-RODdl-aCjw=" alt="" />
             
              <span>{username}</span><p>posted {formattedTimestamp}s ago</p>
            </div>
          </div>
      <p>{content}</p>
      <button onClick={() => onLikeToggle(postId, !initialLikeStatus)} style={{backgroundColor:'transparent', border:'none', margin:'0.5em'}}>
        {initialLikeStatus ? <HeartFilled style={{height:'2rem',}}/> : <HeartOutlined style={{height:'2rem', }}/>}2 Likes 
      </button>
      <button onClick={() => onBookmarkToggle(postId, !initialBookmarkStatus)} style={{backgroundColor:'transparent', border:'none',margin:'0.5em'}}>
        {initialBookmarkStatus ? <BookFilled style={{height:'2rem',}}/> : <BookOutlined style={{height:'2rem',}}/>} Bookmark
      </button >
      <button onClick={toggleComments} style={{backgroundColor:'transparent', border:'none',margin:'0.5em'}}><CommentOutlined/> Comments</button>
      {showComments && (
        <div>
          <h3>Comments:</h3>
          {comments.map((comment) => (<>
            <div className="user">
            <div className="userinfo">
              <img src="https://media.istockphoto.com/id/1203745533/vector/social-media-icons-mosaic-background-with-call-to-action.jpg?s=612x612&w=0&k=20&c=W-ho2NIZv2cn12BNlixRSdPIa_9OJgCJ-RODdl-aCjw=" alt="" />
              <span>{comment.user}</span><p>posted a comment</p>
            </div></div>
            <p key={comment.id}>{comment.text}</p></>
          ))}
        </div>
      )}
    </Card>
  );
};

export default Post;

import './Home.scss'
import {Form} from 'react-router-dom';
import { Card,Input,Button } from 'antd';
import { useState } from 'react';
import Post from '../posts/Post';
import InfiniteScroll from 'react-infinite-scroll-component';
 import { DUMMY_POST } from '../../utility/utility';
function Home() {
  const [newPostContent, setNewPostContent] = useState('');

const  [items,setItems] =useState(Array.from(DUMMY_POST))



const handleLikeToggle = (postId, newLikeStatus) => {
  console.log(`Toggle like for post ${postId} to ${newLikeStatus}`);
};

const handleBookmarkToggle = (postId, newBookmarkStatus) => {
  console.log(`Toggle bookmark for post ${postId} to ${newBookmarkStatus}`);
};



const fetchMoreData = () => {
  setTimeout(() => {
      setItems((items)=> items.concat(Array.from(DUMMY_POST)));
  }, 3000);
};


  return (<>
  <div className='home'><div> 
    <Form method='post'>
      <Card style={{marginBottom:'1rem'}}
      title="Create a New Post"
      extra={
        <Button type="primary"  disabled={!newPostContent.trim()}>
          Post
        </Button>
      }>
        <Input.TextArea
          placeholder="What's on your mind?"
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
        />
    </Card>
    </Form>
  </div>
  
      
    <InfiniteScroll
  dataLength={items.length} //This is important field to render the next data
  next={fetchMoreData}
  hasMore={true}
  loader={<h4>Loading...</h4>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }
>
{items.map(post => 
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
        comments={post.comments}
        />
)}
        </InfiniteScroll>
        </div>
</>
  )
}

export default Home

export async function action ({request}){
  const data = await request.formData();

  const postData = {
    postId: Math.random()*10, 
    likeStatus: false, 
    username:'Nirmal Kumar', 
    bookmarkStatus: false, 
    content: data.get('content'),
    timestamp: new Date(),
  }

  console.log(postData)
  return DUMMY_POST.push(postData)
}
// import React, { useState } from 'react';
// import { Card, Input, Button, Avatar, Tooltip, Popconfirm } from 'antd';
// import { HeartOutlined, HeartFilled, BookOutlined, BookFilled, EditOutlined, DeleteOutlined } from '@ant-design/icons';
// import './Home.scss'; // Import your CSS file for styling

// const Home = () => {
//   // Placeholder data for posts
//   const posts = [
//     {
//       id: 1,
//       owner: { name: 'John Doe', photoUrl: 'https://example.com/john-doe.jpg' },
//       timestamp: new Date(),
//       content: 'This is a sample post content. '.repeat(5), // Sample content repeated for length
//       likes: 10,
//       bookmarks: 5,
//       isUserPost: true,
//       comments: [
//         { id: 101, user: 'Alice', text: 'Great post!' },
//         { id: 102, user: 'Bob', text: 'Looking forward to more.' },
//       ],
//     },
//     {
//       id: 2,
//       owner: { name: 'Alice Smith', photoUrl: 'https://example.com/alice-smith.jpg' },
//       timestamp: new Date(),
//       content: 'Another post here. '.repeat(4), // Sample content repeated for length
//       likes: 8,
//       bookmarks: 3,
//       isUserPost: false,
//       comments: [
//         { id: 201, user: 'John', text: 'Nice content!' },
//       ],
//     },
//     // Add more posts as needed
//   ];

//   // State for new post content
//   const [newPostContent, setNewPostContent] = useState('');

//   // Function to handle post creation
//   const handleCreatePost = () => {
//     // Handle logic to create a new post (e.g., send to backend)
//     console.log('Creating new post with content:', newPostContent);
//     setNewPostContent('');
//   };

//   return (
//     <div>
//       <h2>Home</h2>

//       {/* Create a New Post */}
//       <Card
//         title="Create a New Post"
//         extra={
//           <Button type="primary" onClick={handleCreatePost} disabled={!newPostContent.trim()}>
//             Post
//           </Button>
//         }
//       >
//         <Input.TextArea
//           placeholder="What's on your mind?"
//           value={newPostContent}
//           onChange={(e) => setNewPostContent(e.target.value)}
//         />
//       </Card>

//       {/* Display Posts */}
//       {posts.map((post) => (
//         <Card
//           key={post.id}
//           className="post-card" // Apply your CSS class for styling
//           title={
//             <div>
//               <Avatar src={post.owner.photoUrl} alt={post.owner.name} />
//               <span className="owner-name">{post.owner.name}</span>
//               <Tooltip title={`Posted on ${post.timestamp.toLocaleString()}`}>
//                 <span className="timestamp">{post.timestamp.toLocaleDateString()}</span>
//               </Tooltip>
//             </div>
//           }
//           extra={
//             post.isUserPost && (
//               <div className="post-actions">
//                 <Tooltip title="Edit">
//                   <Button type="text" icon={<EditOutlined />} onClick={() => console.log('Edit post', post.id)} />
//                 </Tooltip>
//                 <Popconfirm title="Sure to delete?" onConfirm={() => console.log('Delete post', post.id)}>
//                   <Tooltip title="Delete">
//                     <Button type="text" icon={<DeleteOutlined />} />
//                   </Tooltip>
//                 </Popconfirm>
//               </div>
//             )
//           }
//         >
//           <p className="post-content">{post.content}</p>
//           <div className="post-buttons">
//             <Tooltip title="Like">
//               <Button icon={post.isUserPost ? <HeartOutlined /> : <HeartFilled />} />
//             </Tooltip>
//             <span className="count">{post.likes}</span>
//             <Tooltip title="Bookmark">
//               <Button icon={post.isUserPost ? <BookOutlined /> : <BookFilled />} />
//             </Tooltip>
//             <span className="count">{post.bookmarks}</span>
//           </div>
//           {/* <div>
//             <Comment
//               avatar={<Avatar src="https://example.com/default-avatar.jpg" alt="Default Avatar" />}
//               content={
//                 <div>
//                   <Input placeholder="Add a comment" />
//                   <Button type="primary" onClick={() => console.log('Add comment', post.id)}>
//                     Add Comment
//                   </Button>
//                 </div>
//               }
//             />
//           </div> */}
//         </Card>
//       ))}
//     </div>
//   );
// };

// export default Home;

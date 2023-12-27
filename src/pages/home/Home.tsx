import './Home.scss'
import {Form, useLoaderData} from 'react-router-dom';
import { Card,Input } from 'antd';
import { useState } from 'react';
import Post from '../posts/Post';
import InfiniteScroll from 'react-infinite-scroll-component';
import { handleBookmarkToggle, handleLikeToggle } from '../../utility/utility';
import type { ActionFunction } from 'react-router-dom';
interface LoaderDataItem {
  postId: string;
  likeStatus: boolean;
  username: string;
  bookmarkStatus: boolean;
  timestamp: any;
  content: string;
  comments: {id:number,user:string,text:string}[];
}

function Home() {
  const [newPostContent, setNewPostContent] = useState('');
const postsdata = useLoaderData() as LoaderDataItem[] || null;
const  [items,setItems] =useState(Array.from(postsdata))


const fetchMoreData = () => {
  setTimeout(() => {
      setItems((items)=> items.concat(Array.from(postsdata)));
  }, 3000);
};

  return (<>
  <div className='home'>
   <div> 
    <Form method='post'>
      <Card style={{marginBottom:'1rem'}}
      title="Create a New Post"
      extra={
        <button type="submit"  disabled={!newPostContent.trim()}>
          Post
        </button>
      }>
        <Input.TextArea
          placeholder="What's on your mind?"
          value={newPostContent}
          name='content'
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

export const action :(ActionFunction) = async({request})=>{
  const data = await request.formData();
console.log(data)

  const postData = {
    likeStatus: false, 
    username:'Nirmal Kumar', 
    bookmarkStatus: false, 
    content: data.get('content'),
    timestamp: (new Date()).toString(),
    comments : [
      {
        id: 1,
        user: 'Alice',
        text: 'Great post!',
      },
      {
        id: 2,
        user: 'Bob',
        text: 'I agree, fantastic content!',
      },
      {
        id: 3,
        user: 'Charlie',
        text: 'Looking forward to more posts from you!',
      },]
  }
  try {
    const response = await fetch('https://react-http-2faf5-default-rtdb.firebaseio.com/post.json/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error('Failed to send data to Firebase');
    }

    const responseData = await response.json();
    console.log('Data sent successfully:', responseData);
  } catch (error:any) {
    console.error('Error sending data to Firebase:', error.message);
  }
  return null
}

export async function loader(){
  try {
    const response = await fetch('https://react-http-2faf5-default-rtdb.firebaseio.com/post.json');

    if (!response.ok) {
      throw new Error('Failed to fetch data from Firebase');
    }
    const data = await response.json();
    const dummy_data =[]
    for(const key in data){
      dummy_data.push({
        postId: key,
        likeStatus:data[key].likeStatus,
        username:data[key].username,
        bookmarkStatus:data[key].bookmarkStatus,
        timestamp: data[key].timestamp,
        content:data[key].content,
        comments:data[key].comments,
      })
    }
    return dummy_data;
  } catch (error: any) {
    console.error('Error fetching data from Firebase:', error.message);
  }
  return null;
}


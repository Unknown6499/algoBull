import React from 'react';
import { Table, Space, Popconfirm, Button, Input, Form } from 'antd';
import { useLoaderData } from 'react-router-dom';

interface comment {
  id:number,
  user:string,
  text:string,
}
interface LoaderDataItem {
  postId: string;
  likeStatus: boolean;
  username: string;
  bookmarkStatus: boolean;
  timestamp: any;
  content: string;
  comments: {id:number,text:string}[];
}
const Posts:React.FC = () => {
  // Placeholder data for posts
  const posts = useLoaderData() as LoaderDataItem[] || null;
  
  const columns = [
    {
      title: 'Post Content',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: 'Comments',
      dataIndex: 'comments',
      key: 'comments',
      render: (comments:comment[]) => (
        <Space direction="vertical">
          {comments.map((comment) => (
            <div key={comment.id}>{comment.text}</div>
          ))}
        </Space>
      ),
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      render: (text:string, record:any) => (
        <Space>
          <button onClick={() => handleEditPost(record)}>Edit</button>
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDeletePost(record.id)}>
            <button>Delete</button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const handleEditPost = (post:any) => {
    console.log('Editing post:', post);
  };

  const handleDeletePost = (postId:string) => {
    console.log('Deleting post with ID:', postId);
  };

  return (
    <div>
      <h2>My Posts</h2>
      <Table
        dataSource={posts}
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <Space direction="vertical">
              <Form layout="vertical">
                <Form.Item label="Add Comment">
                  <Input placeholder="Type your comment" name='comment'/>
                </Form.Item>
                <Form.Item>
                  <Button type="primary">Add Comment</Button>
                </Form.Item>
              </Form>
            </Space>
          ),
        }}
      />
    </div>
  );
};

export default Posts;


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
        content:data[key].content,
        comments:data[key].comments,
      })
    }
    return dummy_data;
    // Handle the data 
  } catch (error:any) {
    console.error('Error fetching data from Firebase:', error.message);
  }
  return null;
}


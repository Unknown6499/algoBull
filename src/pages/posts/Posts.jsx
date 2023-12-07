import React from 'react';
import { Table, Space, Popconfirm, Button, Input, Form } from 'antd';

const Posts = () => {
  // Placeholder data for posts
  const posts = [
    {
      id: 1,
      content: 'This is my first post.',
      comments: [
        { id: 101, text: 'Great post!' },
        { id: 102, text: 'Looking forward to more.' },
      ],
    },
    {
      id: 2,
      content: 'Another post here.',
      comments: [
        { id: 201, text: 'Nice content!' },
      ],
    },
  ];

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
      render: (comments, record) => (
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
      render: (text, record) => (
        <Space>
          <button onClick={() => handleEditPost(record)}>Edit</button>
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDeletePost(record.id)}>
            <button>Delete</button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const handleEditPost = (post) => {
    console.log('Editing post:', post);
  };

  const handleDeletePost = (postId) => {
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
                  <Input placeholder="Type your comment" />
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

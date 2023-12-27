import './LeftBar.scss'
import React from 'react';
import ProLayout from '@ant-design/pro-layout';
import { Link, useLocation } from 'react-router-dom';
import {
  HomeOutlined,
  HeartOutlined,
  BookOutlined,
  FileTextOutlined,
  UserOutlined,
} from '@ant-design/icons';
function LeftBar() {
  const location = useLocation();

  // Sidebar menu items
  const menuData = [
    {
      path: '/',
      name: 'Home',
      icon: <HomeOutlined />,
    },
    {
      path: '/likes',
      name: 'My Likes',
      icon: <HeartOutlined />,
    },
    {
      path: '/bookmarks',
      name: 'My Bookmarks',
      icon: <BookOutlined />,
    },
    {
      path: '/posts',
      name: 'My Posts',
      icon: <FileTextOutlined />,
    },
    {
      path:'/profile',
      name: 'My Profile',
      icon: <UserOutlined />,
    },
  ];

  return (
    <ProLayout
    
    logo={false}
    style={{maxWidth:'19vw'}}
      location={location}
      menuDataRender={() => menuData}
      menuItemRender={(item, dom) => (
        <Link to={item.path || '/'} key={item.path}>
          {dom}
        </Link>
        
      )}
    />
  );
}

export default LeftBar

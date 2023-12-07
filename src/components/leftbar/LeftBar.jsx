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
    className='zIndex'
    logo={false}
    style={{maxWidth:'19vw'}}
      location={location}
      menuDataRender={() => menuData}
      menuItemRender={(item, dom) => (
        <Link to={item.path} key={item.path}>
          {dom}
        </Link>
        
      )}
    />
  );
}

export default LeftBar

// const menuDataRender =()=> {[
  //   {
    //     path: '/',
    //     name: 'Home',
    //     icon: <HeartOutlined />,
    //   },
//   {
//     path: '/likes',
//     name: 'My Likes',
//     icon: <HeartOutlined />,
//   },
//   {
//     path: '/bookmarks',
//     name: 'My Bookmarks',
//     icon: <BookOutlined />,
//   },
//   {
//     path: '/profile',
//     name: 'Profile',
//     icon: <UserOutlined />,
//   },]
// };
// return (<>
 // <ProLayout
   // menuDataRender={menuDataRender}
   // menuItemRender={(item) => <Link to={item.path}>{item.name}</Link>}
  //>
//<DefaultFooter />
  //</ProLayout> */}
// <div className="leftBar">


  //  <div className="container">
    //  <div className="menu">
      //  <div className="item">
        //  <Link to='/' className='menuItem'>Home</Link>
   //     </div>
     //   <div className="item">
       ///   <Link to='/likes' className='menuItem'>My Likes</Link>
        //</div>
       // <div className="item">
         // <Link to='bookmarks' className='menuItem'>My Bookmarks</Link>
        //</div>
       // <div className="item">
         // <Link to='posts' className='menuItem'>My Posts</Link>
       // </div>
        //<div className="item">
         // <Link to='profile' className='menuItem'>My Profile</Link>
       // </div>
     // </div>
   // </div>
 // <hr/>
//  </div>
  //</>


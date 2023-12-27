import Login from './pages/login/Login'
import Register from './pages/register/Register';
import NavBar from './components/navbar/NavBar'
import LeftBar from './components/leftbar/LeftBar'
import RightBar from './components/rightbar/RightBar';
import Home, {loader as homeLoader, action as newPostAction}from './pages/home/Home';
import Profile from './pages/profile/Profile';
import { action as userLoginAction } from './pages/login/Login';
import './App.css'
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,

} from "react-router-dom";
import Likes, {loader as likesLoader} from './pages/likes/Likes';
import Posts, {loader as postsLoader} from './pages/posts/Posts';
import Bookmarks,{loader as bookmarksLoader} from './pages/bookmarks/Bookmarks';
import {useSelector} from 'react-redux';
import React from 'react';


const App:React.FC=(props)=> {
 
  const currentUser = useSelector((state:{currentUser:boolean}) => state.currentUser)
 
    const ProtectedRoute = (props: React.PropsWithChildren<{}>)=>{
      if(!currentUser){
         return <Navigate to='/login'/>

      }
      return <>{props.children}</>;
    }
   
  const Layout:React.FC =(props:React.PropsWithChildren<{}>) =>{
  return <div>
    <NavBar/>
    <div style={{display:'flex'}}>
      <LeftBar/>
      <div style={{flex:'6'}}>
      {<Outlet/> || props.children}
      </div>
      <RightBar/>
    </div>
  </div>
  }
  const routes =[
    {
    path:'/',
    element: <ProtectedRoute><Layout/></ProtectedRoute>,
    children:[
      {
        path:'/',
        element:<Home/>,
        action: newPostAction,
        loader: homeLoader,
      },
      {
        path:'/likes',
        element:<Likes/>,
        loader:likesLoader,
      },
      {
        path:'/posts',
        element:<Posts/>,
        loader:postsLoader,
      },
      {
        path:'/bookmarks',
        element:<Bookmarks/>,
        loader:bookmarksLoader
      },
      {
        path:'/profile',
        element:<Profile/>
      },
    ]

  },
  {
    path: "/login",
    element: <Login/>,
    action: userLoginAction, 
  },
  {path:'/register',
element:<Register/>,
}
]
  const router = createBrowserRouter(routes);
  return <div><RouterProvider router={router}/></div>
}

export default App;


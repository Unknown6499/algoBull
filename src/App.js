import Login from './pages/login/Login'
import Register from './pages/register/Register';
import NavBar from './components/navbar/NavBar'
import LeftBar from './components/leftbar/LeftBar'
import RightBar from './components/rightbar/RightBar';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import { action as userLoginAction } from './pages/login/Login';
import {action as newPostAction} from './pages/home/Home'
import './App.css'
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Likes from './pages/likes/Likes';
import Posts from './pages/posts/Posts';
import Bookmarks from './pages/bookmarks/Bookmarks';
import { useContext,} from 'react';
import { LoginContext } from './context/LoginContext';
function App() {
  const {currentUser} = useContext(LoginContext)
  
    const ProtectedRoute = ({children})=>{
      if(!currentUser){
         return <Navigate to='/login'/>

      }
      return children
    }
  const Layout =() =>{
  return <div>
    <NavBar/>
    <div style={{display:'flex'}}>
      <LeftBar/>
      <div style={{flex:'6'}}>
      <Outlet/>
      </div>
      <RightBar/>
    </div>
  </div>
  }
  const router = createBrowserRouter([
    {
    path:'/',
    element: <ProtectedRoute><Layout/></ProtectedRoute>,
    children:[
      {
        path:'/',
        element:<Home/>,
        action: newPostAction,
      },
      {
        path:'/likes',
        element:<Likes/>
      },
      {
        path:'/posts',
        element:<Posts/>
      },
      {
        path:'/bookmarks',
        element:<Bookmarks/>
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
]);
  return <div><RouterProvider router={router}/></div>
}

export default App;


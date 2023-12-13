import './NavBar.scss'
import {users} from '../../utility/utility'
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useContext } from 'react';
import { LoginContext } from '../../context/LoginContext';
function NavBar() {
  const {setCurrentUser} = useContext(LoginContext)
  const logOutHandler = (e)=>{
    e.preventDefault();
    setCurrentUser(false)
  }
  return (
    <div className='navbar'>
      <div className='left'>
        <Link to='/'style={{textDecoration:'none'}} >
        <span >Orange</span>
        </Link>
        <HomeOutlinedIcon/>
        <DarkModeOutlinedIcon/>
        <GridViewOutlinedIcon/>
        <div className='search'>
          <SearchOutlinedIcon/>
          <input type='text' placeholder='search here'/>
        </div>
      </div>
      <div className='right'>
        <PersonOutlineOutlinedIcon/>
        <EmailOutlinedIcon/>
        <NotificationsOutlinedIcon/>
        <div className='user'>
          <img src={users.profilePicture} alt='user avtar'/>
          <span>{users.fullName}</span>
        </div>
        <button onClick={(e) => logOutHandler(e)}>Logout</button>
      </div>
    </div>
  )
}

export default NavBar
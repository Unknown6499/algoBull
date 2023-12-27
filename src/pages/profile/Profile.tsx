import { users } from "../../utility/utility";
import './Profile.scss'
import {Link} from 'react-router-dom'
function Profile(){



 

  return (
    <div className="userProfile">
       <div className="user">
            <div className="userinfo">
              <img src="https://media.istockphoto.com/id/1203745533/vector/social-media-icons-mosaic-background-with-call-to-action.jpg?s=612x612&w=0&k=20&c=W-ho2NIZv2cn12BNlixRSdPIa_9OJgCJ-RODdl-aCjw=" alt="" />
            </div></div>
      <h2>{users.fullName}</h2>
      <div>
        <p>Bio: {users.bio}</p>
      </div>
      <div>
        <Link to='/posts'>Posts</Link>
      </div>
    </div>
  );
};

export default Profile;
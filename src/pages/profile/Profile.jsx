import { users } from "../../utility/utility";
import './Profile.scss'
import {useState} from 'react';
import {Link} from 'react-router-dom'
function Profile(){

  
  
  const [editingBio, setEditingBio] = useState(false);
  const [newBio, setNewBio] = useState(users.bio);
  const [editingPicture, setEditingPicture] = useState(false);
  const [newProfilePicture, setNewProfilePicture] = useState(users.profilePicture);

  const handleEditClick = () => {
    setEditingBio(true);
  };

  const handleSaveClick = () => {
    
    users.bio = newBio;
    setEditingBio(false);
  };

  const handleCancelClick = () => {
    setNewBio(users.bio);
    setEditingBio(false);
  }; 
  const handleBioChange = (event) => {
    setNewBio(event.target.value);
  };


  const handleEditPictureClick = () => {
    setEditingPicture(true);
  };

  const handleSavePictureClick = () => {
    // Implement logic to save the new profile picture (e.g., make an API request)
    // For demonstration purposes, let's just update the state
    users.profilePicture = newProfilePicture;
    setEditingPicture(false);
  };

  const handleCancelPictureClick = () => {
    setNewProfilePicture(users.profilePicture);
    setEditingPicture(false);
  };
  

  return (
    <div className="userProfile">
       <div className="user">
            <div className="userinfo">
         
              <img src={editingPicture ? newProfilePicture : users.profilePicture} alt="" />
            </div>
            {editingPicture ? (
        <div>
          <input
            type="text"
            value={newProfilePicture}
            onChange={(e) => setNewProfilePicture(e.target.value)}
          />
          <button onClick={handleSavePictureClick}>Save</button>
          <button onClick={handleCancelPictureClick}>Cancel</button>
        </div>
      ) : (
        <div>
  
          <button onClick={handleEditPictureClick}>Change Profile Picture</button>
        </div>
      )}</div>
      <h2>{users.fullName}</h2>
      {editingBio ? (
        <div>
          <input type="text" value={newBio} onChange={handleBioChange} />
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </div>
      ) : (
        <div>
          <p>Bio: {users.bio}</p>
          <button onClick={handleEditClick}>Edit Bio</button>
        </div>
      )}
      <div>
        <Link to='/posts'>Posts</Link>
      </div>
    </div>
  );
};

export default Profile;
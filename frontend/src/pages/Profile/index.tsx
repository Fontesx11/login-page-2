import ProfilePictureUploader from '../../components/ProfilePicture'
import { MdLogout } from "react-icons/md";
import { Link } from 'react-router-dom';
import './styles.css'
import { useState } from 'react';


export const Profile = () => {

  const [user] = useState({
    name: 'Fontesx11',
    email: 'email@example.com'
  });
  
  return (
    <div className="form-wrapper">
      <ProfilePictureUploader/>

      <Link to='/'>
        <MdLogout className='icon'/>
      </Link>
      
      <div className="info-wrapper">
        <span className='title'>Name</span>
        <p>{user.name}</p>

        <span className='title'>Email</span>
        <p>{user.email}</p>
      </div>
    </div>
  )
}

import ProfilePictureUploader from '../../components/ProfilePicture'
import { MdLogout } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import backendAPI from '../../services/api';
import './styles.css'

export const Profile = () => {

  const [name, setName] =  useState('');
  const [email, setEmail] = useState('');

  useEffect(()=>{
    const fetchUserInfo = async () =>{
      const token = localStorage.getItem("token");

      if(!token) return;

      try{
        const res = await backendAPI.post("/getinfo", {}, { 
          headers: { Authorization: `Bearer ${token}` } 
        });

        if(res.data){
          setName(res.data.username);
          setEmail(res.data.email);
        }
      } catch (err){
        console.error("Erro ao buscar info do usuário:", err)
      }
    };

    fetchUserInfo();
  },[])


 const handleLogout = () =>{
  localStorage.clear()
 }

  return (
    <div className="form-wrapper">
      <ProfilePictureUploader/>

      <Link to='/' onClick={handleLogout}>
        <MdLogout className='icon'/>
      </Link>
      
      <div className="info-wrapper">
        <span className='title'>Name</span>
        <p>{name}</p>

        <span className='title'>Email</span>
        <p>{email}</p>
      </div>
    </div>
  )
}

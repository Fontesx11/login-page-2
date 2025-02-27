import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './styles.css'
import { InputBox } from '../../components/InputBox';
import { RegisterLink } from '../../components/RegisterLInk';
import axios from "axios";
import { useState } from "react";
import backendAPI from "../../services/api";



export const RegisterForm = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{

    if(password !== passwordConfirm){
      alert("As senhas não correspondem")
      return;
    }

    e.preventDefault();

    const payload = {
      name: username,
      email: email,
      password: password,
    }

    try{
      axios.post(`${backendAPI.defaults.baseURL}/users`, payload).then((res) =>{
        console.log(res)
      })
    } catch(e){
      console.log(e)
    }
    
  } 

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
       
        <InputBox type='text' placeholder='Username' icon={FaUser} onChange={(e)=> setUsername(e.target.value)}/>
        <InputBox type='email' placeholder='exemple@gmail.com' icon={MdEmail} onChange={(e)=> setEmail(e.target.value)}/>
        <InputBox type='password' placeholder='Password' icon={FaLock} onChange={(e)=> setPassword(e.target.value)}/>
        <InputBox type='password' placeholder='Confirm password' icon={FaLock} onChange={(e)=> setPasswordConfirm(e.target.value)}/>

        <button type="submit">Sign in</button>
        <RegisterLink text='You alredy have an account?' linkText='Login' to='/'/>
      </form>
    </div>
  )
}

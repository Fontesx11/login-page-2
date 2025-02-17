import { FaUser, FaLock } from "react-icons/fa";
import './styles.css'
import { InputBox } from '../../components/InputBox';
import { RegisterLink } from "../../components/RegisterLInk";
import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";
import backendAPI from "../../services/api";



export const LoginForm = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const  handleSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()

    const payload = {
      name: username,
      password: password,
    }

    try{
     const response = await axios.post(`${backendAPI.defaults.baseURL}/login`, payload)
     
     if(response.status === 200){
        localStorage.setItem('token', response.data.token);
     } 

    } catch(e){
      alert("Error ao logar")
      console.log(e)
    }

    
  }

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmitLogin}>
        <h1>Login</h1>
        <InputBox type='text' placeholder='Username' icon={FaUser} onChange={(e)=>{setUsername(e.target.value)}}/>
        <InputBox type='password' placeholder='Password' icon={FaLock} onChange={(e)=>{setPassword(e.target.value)}}/>

        <div className="remember-forgot">
          <label><input type="checkbox" /> Remember me</label>
          <a href="#">Forgot password?</a>
        </div>

        <button type="submit">Login</button>
        <RegisterLink text="Don't have an account?" linkText='Register' to='/register'/>
      </form>
    </div>
  )
}

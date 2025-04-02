import { FaUser, FaLock } from "react-icons/fa";
import './styles.css'
import { InputBox } from '../../components/InputBox';
import { RegisterLink } from "../../components/RegisterLInk";
import { Ring } from 'ldrs/react'
import 'ldrs/react/Ring.css'
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import backendAPI from "../../services/api";
import { useNavigate } from "react-router-dom";



export const LoginForm = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const  handleSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()

    const payload = {
      name: username,
      password: password,
    }

    try{
     setIsLoading(true);
     const response = await axios.post(`${backendAPI.defaults.baseURL}/login`, payload)
     
     if(response.status === 200){
        localStorage.setItem('token', response.data.token);
        showSuccessToast();
        navigate("/profile");
     } 

    } catch(e){
      alert("Error ao logar")
      console.log(e)
    } finally {
      setIsLoading(false);
    }
  }

  const showSuccessToast = () => {
    toast.success("Logado com sucesso!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };

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

          <button type="submit">
           {isLoading ? (
             <Ring
              size="30"
              stroke="5"
              bgOpacity="0"
              speed="2"
              color="grey" 
            />
           ) : "Login"}
          </button> 
          
        <RegisterLink text="Don't have an account?" linkText='Register' to='/register'/>
      </form>
    </div>
  )
}

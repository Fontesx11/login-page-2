import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './styles.css'
import { InputBox } from '../../components/InputBox';
import { RegisterLink } from '../../components/RegisterLInk';
import axios from "axios";
import { useState } from "react";
import { Ring } from 'ldrs/react'
import 'ldrs/react/Ring.css'
import backendAPI from "../../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";




export const RegisterForm = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate(); 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{

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
    setIsLoading(true);
    const res = await axios.post(`${backendAPI.defaults.baseURL}/users`, payload);

    if (res.status === 200) {
      showSuccessToast();
      navigate("/");
    }

    } catch(e){
      console.log(e)
    } finally {
      setIsLoading(false);
    }
    
  } 

  const showSuccessToast = () => {
    toast.success("Registrado com sucesso!", {
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
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
       
        <InputBox type='text' placeholder='Username' icon={FaUser} onChange={(e)=> setUsername(e.target.value)}/>
        <InputBox type='email' placeholder='exemple@gmail.com' icon={MdEmail} onChange={(e)=> setEmail(e.target.value)}/>
        <InputBox type='password' placeholder='Password' icon={FaLock} onChange={(e)=> setPassword(e.target.value)}/>
        <InputBox type='password' placeholder='Confirm password' icon={FaLock} onChange={(e)=> setPasswordConfirm(e.target.value)}/>

        <button type="submit">
          {isLoading ? (
            <Ring
              size="30"
              stroke="5"
              bgOpacity="0"
              speed="2"
              color="grey" 
            /> 
          ) : "Sign In"}
        </button>
        <RegisterLink text='You alredy have an account?' linkText='Login' to='/'/>
      </form>
    </div>
  )
}

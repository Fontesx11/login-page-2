import { FaUser, FaLock } from "react-icons/fa";
import './styles.css'
import { InputBox } from '../../components/InputBox';
import { RegisterLink } from "../../components/RegisterLInk";
import { useNavigate } from "react-router";



export const LoginForm = () => {

  const navigate = useNavigate();

  return (
    <div className='wrapper'>
      <form>
        <h1>Login</h1>
        <InputBox type='text' placeholder='Username' icon={FaUser}/>
        <InputBox type='password' placeholder='Password' icon={FaLock}/>

        <div className="remember-forgot">
          <label><input type="checkbox" /> Remember me</label>
          <a href="#">Forgot password?</a>
        </div>

        <button type="submit" onClick={()=>{navigate('/profile')}}>Login</button>
        <RegisterLink text="Don't have an account?" linkText='Register' to='/register'/>
      </form>
    </div>
  )
}

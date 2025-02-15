import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './styles.css'
import { InputBox } from '../../components/InputBox';
import { RegisterLink } from '../../components/RegisterLInk';


export const RegisterForm = () => {
  return (
    <div className='wrapper'>
      <form>
        <h1>Register</h1>
       
        <InputBox type='text' placeholder='Username' icon={FaUser}/>
        <InputBox type='email' placeholder='exemple@gmail.com' icon={MdEmail}/>
        <InputBox type='password' placeholder='Password' icon={FaLock}/>
        <InputBox type='password' placeholder='Confirm password' icon={FaLock}/>

        <button type="submit">Sign in</button>
        <RegisterLink text='You alredy have an account?' linkText='Login' to='/'/>
      </form>
    </div>
  )
}

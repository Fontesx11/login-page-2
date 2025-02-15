
import { Route, Routes } from 'react-router'
import './App.css'
import { LoginForm } from './pages/LoginForm'
import { RegisterForm } from './pages/RegisterForm'
import { Profile } from './pages/Profile'

function App() {

  return (
    <Routes>
      <Route path='/' element={<LoginForm/>}/>
      <Route path='/register' element={<RegisterForm/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
    
  )
}

export default App

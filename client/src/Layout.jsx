import {useState} from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Components/Header'
import SignUpSection from './forms/SignUpSection'
import LoginSection from './forms/LoginSection'

const Layout = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isSignupOpen, setIsSignupOpen] = useState(false)
  const location = useLocation();


  const handleLoginModal = () => {
    setIsSignupOpen(false)
    setIsLoginOpen(true)
  }
  const handleLoginToggle = () => setIsLoginOpen(!isLoginOpen)
  const handleSignUpModal = () => {
    setIsLoginOpen(false)
    setIsSignupOpen(true)
  }
  const handleSignUpToggle = () => setIsSignupOpen(!isSignupOpen)

  return (
    <>
        {location.pathname !== "/"  && <Header toggleLogin={() => handleLoginModal()}/>}
        <Outlet/>
        {isLoginOpen && <LoginSection handleLoginToggle={handleLoginToggle}  handleSignUp={handleSignUpModal}/>}
        {isSignupOpen && <SignUpSection handleSignupToggle={handleSignUpToggle} handleLogin={handleLoginModal}/>}
    </>
  )
}

export default Layout
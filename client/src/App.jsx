import { Toaster } from "react-hot-toast"
import { Routes, Route } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import Layout from "./Layout"
import LandingPage from "./Pages/LandingPage"
import LoginSection from "./forms/LoginSection"


function App() {

  return (
    <>
      <Toaster 
        reverseOrder={false}
        position="bottom-center"
      />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/home" element={<HomePage />}/>
          <Route path="/login" element={<LoginSection />}/>
          <Route index element={<LandingPage />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App

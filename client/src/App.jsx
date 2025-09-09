import { Toaster } from "react-hot-toast"
import { Routes, Route } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import Layout from "./Layout"


function App() {

  return (
    <>
      <Toaster 
        reverseOrder={false}
        position="bottom-center"
      />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App

import React from 'react'
import Home from './home/Home'
import { Navigate, Route, Routes } from "react-router-dom"
import Courses from './courses/Courses'
import Signup from './components/Signup'
import Contact from './components/Contact'
import About from './components/About'

import  { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'

function App() {
  const [authUser,setAuthUser] = useAuth()
  console.log(authUser)
  return (
    <>
    {/* <Home/>
    <Course/> */}
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Course" element={authUser?<Courses/>:<Navigate to="/signup"/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/About" element={<About/>}/>
    </Routes>
    <Toaster />
    </>
  )
}



export default App


// import React from 'react'

// function App(){
//   return (
//     <div>
//       Hello 
//     </div>
//   )
// }

// export default App
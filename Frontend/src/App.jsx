import React from 'react'
import Home from './home/Home'
import { Route, Routes } from "react-router-dom"
import Courses from './courses/Courses'
import Signup from './components/Signup'
import Contact from './components/Contact'
import About from './components/About'

function App() {
  return (
    <>
    {/* <Home/>
    <Course/> */}
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Course" element={<Courses/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/About" element={<About/>}/>
    </Routes>
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
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function About() {
    return (
        <>
        <Navbar/>
        <div className="min-h-screen flex justify-center items-center flex-col gap-5">
        <div className="avatar flex justify-center items-center h-64 w-64">
            <div className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src='../../My-PIC-crop.jpeg' />
        </div>
        
        </div>
        <div className='flex gap-2 underline'>
            <h2>Shubham Sahoo</h2>
            {/* <h3>Full Stack Developer</h3> */}
            <h4>NIT Rourkela(Final Year)</h4>
        </div>
        <p className='text-center'>I am Shubham Sahoo, a final year student from NIT Rourkela and a Full Stack Developer. I have extensive expertise in both front-end and back-end technologies, which allows me to create comprehensive and efficient web applications. My deep understanding of the entire development process ensures that I can deliver high-quality, scalable, and user-friendly solutions for various projects and clients.</p>
        </div>
        <Footer/>
        </>
    )
}

export default About
import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
import Navbar from './Navbar'
import Footer from './Footer'

function Contact() {
    const {
        register,
        handleSubmit,
         
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data);
      return (
        <>
        <Navbar/>
        <div className='min-h-screen flex h-screen items-center justify-center'>
        <div className=" w-[600px] border-[2px] ">
      <div className="modal-box">
        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
          {/* if there is a button in form, it will close the modal */}
          <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
        
        <h3 className="font-bold text-lg">Contact Us</h3>
        
        <div className='mt-4 space-y-2'>
            <span>Name</span>
            <br />
            <input type="text" placeholder='Enter Your Name' className='w-80 px-3 py-1 border rounded-md outline-none'
            {...register("name", { required: true })} />
            <br />
            {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
        </div>
        
        <div className='mt-4 space-y-2'>
            <span>Email</span>
            <br />
            <input type="email" placeholder='Enter Your Email' className='w-80 px-3 py-1 border rounded-md outline-none'
            {...register("email", { required: true })} />
            <br />
            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
        </div>
        <div className='mt-4 space-y-2'>
            <span>Message</span>
            <br />
            <textarea type="text" placeholder='Enter Your Message' className='w-80 px-3 py-1 border rounded-md outline-none'
            {...register("Message", { required: true })} />
            <br />
            {errors.message && <span className='text-sm text-red-500'>This field is required</span>}
        </div>
        
        <div className='flex justify-left mt-4'>
            <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Submit</button>
            {/* <p className='text-xl'>
                Already Registered ? <button className='underline text-blue-500 cursor-pointer'onClick={()=>
                    document.getElementById("my_modal_3").showModal()
                }>Login</button>{" "}
                <Login/>
            </p> */}
        </div>
        </form>
      </div>
    </div>
        </div>
        <Footer/>
        </>
      )
}

export default Contact
import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards'
import { Link } from 'react-router-dom'

function Course() {
  console.log(list)
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl mx-auto md:px-20 px-4'>We're delighted to have you <span className='text-pink-500'>Here :)</span></h1>
        <p className='mt-12'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ex delectus rerum iure consequuntur amet natus ea, eligendi a. Accusamus vel asperiores placeat alias reprehenderit. Consequuntur eos sint tempora quisquam natus iure! Quidem doloribus cum iure quas porro, beatae iusto cumque, minima sapiente odio ullam nam quam eum, veritatis id.
        </p>
        <Link to="/">
        <button className='bg-pink-500 hover:bg-pink-700 duration-300 rounded-md px-4 py-2 mt-6' onclick="">Back</button>
        </Link>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4'>
        {list.map((item)=>(
        <Cards item={item} key ={item.id}/>
       ))}
      </div>
    </div>
    </> 
  )
}

export default Course
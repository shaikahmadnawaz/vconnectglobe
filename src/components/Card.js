import React from 'react'
import { FaStar } from 'react-icons/fa'

const Card = () => {
  return (
    <div className='profile border-2 border-black rounded-lg p-5 flex flex-col items-center'>
        <div className='photo'>
            <img src="./mentor.png" alt=""/>
        </div>
        <div className='details bg-gray-700 text-white p-5 text-center h-fit rounded-lg w-60'>
            <h3>Gnana Chandra</h3>
            <h4>Computer Science Engineer</h4>
            <h4>Vasireddy Venkatadri Institute of Technology</h4>
            <h4>4<FaStar/></h4>
        </div>
    </div>
  )
}

export default Card
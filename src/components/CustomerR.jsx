import React from 'react'
import {MoveRight,MoveLeft } from 'lucide-react'

const CustomerR = () => {
  return (
    <div>
        <div className='flex justify-between items-center'>
            <h1 className='font-bold text-3xl p-5 items-center  '>
                Customer <span className='text-yellow-400'>Reviews</span> 
            </h1>
            <div className='flex gap-5 p-5'>
            <MoveLeft size={40}  strokeWidth={3} />
            <MoveRight size={40}  strokeWidth={3}  className="bg-yellow-400 rounded-3xl text-white"  />
            
            </div>
        </div>
    </div>
  )
}

export default CustomerR
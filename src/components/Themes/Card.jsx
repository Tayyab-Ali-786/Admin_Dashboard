import React from 'react'

export default function Card(props) {
  return (
    <div>
      <div className='bg-gray-200 p-4 rounded-lg shadow-md flex justify-center items-center flex-col w-58 h-38'>
        <div className='text-lg font-bold text-gray-800 mb-2'>
        {props.text}
        </div>
        <div className='text-md font-semibold text-blue-600'>
            {props.value}
        </div>
      </div>
    </div>
  )
}

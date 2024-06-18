import React from 'react'

const History = () => {
  return (
      <div className='mt-5'>
          
          <p className='font-semibold'>HISTORY</p>
          <hr className="border-gray-400 mt-2 w-full" />
          <div className='mt-2 p-1 border-r-2 border-r-green-500 shadow-md h-9 flex justify-between'>
              <p>Cash</p>
              <p className='font-medium'>+500</p>
          </div>
          <div className='mt-2 p-1 border-r-2 border-r-red-500 shadow-md h-9 flex justify-between'>
              <p>Book</p>
              <p className='font-medium'>-40</p>
          </div>
          <div className='mt-2 p-1 border-r-2 border-r-red-500 shadow-md h-9 flex justify-between'>
              <p>Camera</p>
              <p className='font-medium'>-200</p>
          </div>
          
    </div>
  )
}

export default History

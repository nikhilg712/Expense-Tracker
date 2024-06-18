import React from 'react'

const NewTransaction = () => {
  return (
    <div className='mt-5'>
          <p className='font-semibold'>Add New Transaction</p>
          <hr className="border-gray-400 mt-2 w-full" />
          <div className='font-normal mt-2'>
              <label>Text</label>
              <input className='mt-1 w-full pl-1 border-2 h-7 rounded-lg border-stone-500' type="text" placeholder='Enter Text...' />
              <label>Amount </label>
              <input className='mt-1 w-full pl-1 border-2 h-7 rounded-lg border-stone-500' type="text" placeholder='Enter Amount...' />
              <button className='h-7 bg-orange-600 text-white w-full mt-3'>Add Transaction</button>
          </div>
          
          
    </div>
  )
}

export default NewTransaction

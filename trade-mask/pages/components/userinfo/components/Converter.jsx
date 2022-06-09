import React from 'react'
import Buttondrop from './Button'
import Dropdown from './Dropdown'

function Converter() {
  return (
    <div className='text-black flex flex-col'>
        <h1 className='py-2'>Convert</h1>
        <div className='flex flex-col  '>
            <input className='p-2 mt-2 rounded-xl' type="text" > 
             </input>
            <input className='p-2 my-2 rounded-xl' type="text" > 
             </input>
        </div>
        <div className='flex flex-row justify-between items-center py-5'>
            <button  type="button" className="flex items-center justify-between  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5  mb-2 dark:bg-blue-700 dark:hover:bg-blue-800 dark:hover:text-white focus:outline-none dark:focus:ring-blue-800">
              <p>Convert</p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="rgba(255,255,255,1)"/></svg>
            </button>
            <div className='flex flex-col items-end text-slate-700 w-1/2 text-xs'>
                <p>1 USD = 0.00045 ETH</p>
                <p>1 USD > ETH</p>
            </div>

        </div>
    </div>
  )
}

export default Converter
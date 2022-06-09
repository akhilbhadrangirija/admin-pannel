import React from 'react'

function Sidebanner() {
  return (
    <div className='container  w-full p-5 px-5 bg-white rounded-lg drop-shadow-xl'>
        <img className='h-50 ' src="https://cdn2.vectorstock.com/i/1000x1000/82/51/marketing-strategy-banner-in-flat-style-vector-19548251.jpg" alt="image" />
        <h2 className='py-5 font-black text-black text-lg'  >Explore a new strategy</h2>
        <div  type="button" class="  max-h-10 w-full flex flex-row justify-between items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-700 dark:hover:bg-blue-800 dark:hover:text-white focus:outline-none dark:focus:ring-blue-800">
     
         <div className='pl-2'>Try Now</div>
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="rgba(255,255,255,1)"/></svg>

       </div>

    </div>
  )
}

export default Sidebanner
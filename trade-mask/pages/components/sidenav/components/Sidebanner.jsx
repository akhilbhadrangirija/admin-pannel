import React from 'react'

function Sidebanner() {
  return (
    <div className='container  w-full my-3 p-5 px-5 bg-white rounded-lg drop-shadow-xl'>
        <img className='h-50 ' src="https://media.istockphoto.com/vectors/red-cube-pyramid-top-vector-id1019177876?b=1&k=20&m=1019177876&s=612x612&w=0&h=5X0sCJoLl7Xybz5SfyPNsPGYZnB0BK4bVo3yUIz_ZX0=" alt="image" />
        <h2 className='py-5 font-black text-black text-lg'  >Explore a new strategy</h2>
        <button  type="button" class=" h-auto w-full flex flex-row justify-start items-center text-white dark:bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 dark:bg-transparent dark:hover:bg-blue-800 dark:hover:text-white focus:outline-none dark:focus:ring-blue-800">
         Try Now
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="rgba(255,255,255,1)"/></svg>

       </button>

    </div>
  )
}

export default Sidebanner
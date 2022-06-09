import React from 'react'

function Navbutton({title,icon}) {
  return (
    <div>
      <button  type="button" class="hover:fill-white h-auto w-full flex flex-row justify-start items-center text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 dark:bg-transparent dark:hover:bg-blue-700 dark:hover:text-white focus:outline-none dark:focus:ring-blue-800">
          <div className=''>
      {icon} </div>
      <div className='pl-2 text-sm'>
      {title}
          </div>
          </button>
          

    </div>
  )
}

export default Navbutton
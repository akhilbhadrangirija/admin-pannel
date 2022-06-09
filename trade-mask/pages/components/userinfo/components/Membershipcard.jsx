import React from 'react'

function Membershipcard() {
  return (
      <div className='relative pt-5'>

        <div className='bg-slate-900 rounded-lg flex p-5'>
            <div className='w-1/2 p-2'>
                <div>
                    <h1 className='flex warp font-bold text-lg'>Upgrade <br /> your plan</h1>
                    <ul className='text-slate-300 text-xs py-2'>
                        <li>Ver 1.04.3</li>
                        <li>New features</li>
                    </ul>

                    <button  type="button" class="  max-h-10 w-full flex  items-center text-white bg-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  py-2.5 mr-2 mb-2 dark:bg-transparent dark:hover:bg-slate-700 dark:hover:text-white focus:outline-none dark:focus:ring-blue-800">
     
                     <p className='pl-2'>Let's Go</p>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="rgba(255,255,255,1)"/></svg>

                    </button>

                </div>

            </div>
            <div className='w-1/2 static '>
                <img className='' src="https://o.remove.bg/downloads/032b003f-a560-4040-85fc-0fd12cc9d8fa/istockphoto-1169752961-612x612-removebg-preview.png" alt="" />
            </div>
        </div>
      </div>
  )
}

export default Membershipcard
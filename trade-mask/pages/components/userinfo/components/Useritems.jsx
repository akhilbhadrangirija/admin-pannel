import React from 'react'

function Useritems() {
  return (

    <div>
        
    <h1 className='text-black'>My items</h1>

    <div className='flex flex-row'>

    <div className='w-1/2 h-auto pb-5 flex flex-col justify-between'>
        <div className='flex'>
            <div className='p-2 m-2 rounded-lg h-8 bg-red-200 '>
            <svg className='bg-red-400 rounded-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M9 13.59l8.607-8.607 1.414 1.414-8.607 8.607H18v2H7v-11h2v7.585z" fill="rgba(255,255,255,1)"/></svg>
            </div>
            <div className='text-black m-2'>
                <h6>Investment</h6>
                <h2>87.2K</h2>
                <h6 className='bg-red-200 rounded-xl text-xs inline'>-10.4%</h6>

            </div>

        </div>
        
    </div>
    
    <div className='w-1/2 h-auto pb-5 flex flex-col justify-between'>
        <div className='flex'>
            <div className='p-2 m-2 rounded-lg h-8 bg-green-200 '>
            <svg className='bg-green-400 rounded-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z" fill="rgba(255,255,255,1)"/></svg>
            </div>
            <div className='text-black m-2'>
                <h6>Investment</h6>
                <h2>87.2K</h2>
                <h6 className='bg-green-200 rounded-xl text-xs inline'>+15.4%</h6>

            </div>

        </div>
        
    </div>

    </div>
    </div>

  )
}

export default Useritems
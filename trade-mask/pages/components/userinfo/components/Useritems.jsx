import React from 'react'
import Ticker from '../../Ticker'

function Useritems() {

  return (

    <div>
        
    <h1 className='text-black'>My items</h1>

    <div className='flex flex-row'>

    <div className='w-1/2 h-auto pb-5 flex flex-col justify-between'>
        <div className='flex'>
            <div className='p-2 m-2 rounded-lg h-8 bg-red-200 '>
            <Ticker value={-10.4}/>
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
            <Ticker value={15.44}/>
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
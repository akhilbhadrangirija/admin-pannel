import React from 'react'
import Percentagechange from '../../Percentagechange'
import Ticker from '../../Ticker'

function Currency({price,change,fname}) {
  return (
    <div className='flex flex-coloumn w-full items-baseline justify-between'>
        <div className='flex flex-row items-center' >
        <h1 className='ml-5 text-3xl font-bold pr-2'>$ {price}</h1>
        <Percentagechange value={change}/>
        <Ticker value={change}/>
        </div>
        <h4 className='text-lg font-semibold'>
            {fname}
        </h4>

    </div>
  )
}

export default Currency
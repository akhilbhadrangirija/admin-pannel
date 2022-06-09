import React from 'react'

function Currency({price,change,name}) {
  return (
    <div className='flex flex-coloumn w-full items-baseline justify-between'>
        <div className='flex flex-row items-center' >
        <h1 className='ml-5 text-3xl font-bold'>$ {price}</h1>
        <div className={change< 0 ? 'ml-5 bg-red-100 text-red-600 font-bold rounded-lg p-1 text-sm': 'bg-green-100 text-green-600 font-bold rounded-lg p-1 text-sm ml-5'}>{change}</div>
        </div>
        <h4 className='text-lg font-semibold'>
            {name}
        </h4>

    </div>
  )
}

export default Currency
import React from 'react'
import Percentagechange from '../../Percentagechange'
import Ticker from '../../Ticker'

function Accountbalance() {
  return (
    <div className='flex flex-col pb-5 text-black'>
        <h1>Total Balance</h1>
        <h1 className='text-xl font-extrabold py-2'>$54673211.67</h1>
        <div className='flex flex-row'>
        <Percentagechange className="w-10" value={-2.56}/>
        <Ticker value={-2.56}/>

        </div>

    </div>
  )
}

export default Accountbalance
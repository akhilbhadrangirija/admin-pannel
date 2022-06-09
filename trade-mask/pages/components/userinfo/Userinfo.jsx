import React from 'react'
import Accountbalance from './components/Accountbalance'
import Converter from './components/Converter'
import Membershipcard from './components/Membershipcard'
import User from './components/User'
import Useritems from './components/Useritems'

function Userinfo() {
  return (
    <div className='container py-10 px-5 w-2/6 h-full bg-slate-50 flex flex-col'>

      <User/>

      <Accountbalance/>

      <Useritems/>

      <Converter/>
      
      <Membershipcard/>

    
    </div>
  )
}

export default Userinfo
import React from 'react'
import Chart from './components/Chart'
import Chatsection from './components/Chatsection'
import Currency from './components/Currency'
import Currencycard from './components/Currencycard'

function Dashboard() {
  const currency = {
    name:"Bitcoin USD(BTC-USD)",
    price:"46541.04",
    change:"4.17%"
  }
  return (
    <div className='p-10 container w-5/6 h-max flex flex-col text-black'>
      <Currency {...currency}/>
      <Chart/>
      <div className='flex flex-row mr-2 w-full'>
          <div className='w-2/3 grid grid-cols-2 '>
              <Currencycard/>
              <Currencycard/>
              <Currencycard/>
              <Currencycard/> 
          </div>
          <div className='w-1/3 flex '>
             <Chatsection/>
          </div>

      
      </div>

    </div>
  )
}

export default Dashboard
import React from 'react'
import Chart from './components/Chart'
import Chatsection from './components/Chatsection'
import Currency from './components/Currency'
import Currencycard from './components/Currencycard'

function Dashboard() {
  const currency = [{
    fname:"Bitcoin USD(BTC-USD)",
    name:"Bitcoin USD",
    price:"46541.04",
    change:"4.17"
  },{
    fname:"Ethereum USD(ETH-USD)",
    name:"Ethereum USD",
    price:"3255.15",
    change:"-2.17"
  },{
    fname:"Cardano USD(CAD-USD)",
    name:"Cardano USD",
    price:"0.844",
    change:"5.16"
  },{
    fname:"Polymath USD(POLY-USD)",
    name:"Polymath USD",
    price:"0.4",
    change:"7.44"
  }]
  return (
    <div className='pt-10 px-7 items-center container w-5/6 h-96 flex flex-col text-black'>
      <Currency {...currency[0]}/>
      <Chart/>
      <div className='flex flex-row mr-2 w-full'>
          <div className='w-2/3 grid grid-cols-2 '>
            {currency.map((data)=>
              <Currencycard {...data}/>
            )}
          </div>
          <div className='w-1/3 flex '>
             <Chatsection/>
          </div>

      
      </div>

    </div>
  )
}

export default Dashboard
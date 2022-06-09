import React from 'react'
import Navbutton from './components/Navbutton'
import Sidebanner from './components/Sidebanner'


function Sidenav() {
  return (
    <div className='py-10 px-5 bg-red w-1/6 bg-slate-50 h-full'>
      <div className='pb-5 font-bold text-black text-xl'><span className='text-blue-700'>TRADE</span>MASK</div>
      <Navbutton title="Profile" icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/></svg>}/>
      <Navbutton title="Dashboard" icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M6.5 11.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm.5 10a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm10-10a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0 10a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zM6.5 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm.5 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm10-10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/></svg>}/>
      <Navbutton title="Wallet" icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M22 7h1v10h-1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v3zm-2 10h-6a5 5 0 0 1 0-10h6V5H4v14h16v-2zm1-2V9h-7a3 3 0 0 0 0 6h7zm-7-4h3v2h-3v-2z"/></svg>}/>
      <Navbutton title="Trade" icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M16.05 12.05L21 17l-4.95 4.95-1.414-1.414 2.536-2.537L4 18v-2h13.172l-2.536-2.536 1.414-1.414zm-8.1-10l1.414 1.414L6.828 6 20 6v2H6.828l2.536 2.536L7.95 11.95 3 7l4.95-4.95z"/></svg>}/>
      <Navbutton title="Notification" icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M20 17h2v2H2v-2h2v-7a8 8 0 1 1 16 0v7zm-2 0v-7a6 6 0 1 0-12 0v7h12zm-9 4h6v2H9v-2z"/></svg>}/>
      <Navbutton title="Exchange" icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-7h9v2h-4v3l-5-5zm5-4V6l5 5H8V9h4z"/></svg>}/>
      
      <Sidebanner/>
      
      
      <Navbutton title="Informtion" icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"/></svg>}/>
      <Navbutton title="Account Setting" icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M6.17 18a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3.001 3.001 0 0 1-5.66 0H2v-2h4.17zm6-7a3.001 3.001 0 0 1 5.66 0H22v2h-4.17a3.001 3.001 0 0 1-5.66 0H2v-2h10.17zm-6-7a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3.001 3.001 0 0 1-5.66 0H2V4h4.17z"/></svg>}/>
      <Navbutton title="Log out" icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3h-2V4H6v16h12v-2h2v3a1 1 0 0 1-1 1H5zm13-6v-3h-7v-2h7V8l5 4-5 4z"/></svg>}/>
    </div>
  )
}

export default Sidenav
import React from 'react'

function Ticker(props) {
 const value = props.value
  return (
    <>
    {value < 0 ?  
    (<svg className='p bg-red-400 rounded-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M9 13.59l8.607-8.607 1.414 1.414-8.607 8.607H18v2H7v-11h2v7.585z" fill="rgba(255,255,255,1)"/></svg>)
     :
    ( <svg className=' bg-green-400 rounded-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z" fill="rgba(255,255,255,1)"/></svg>)}
    </>
    )

    
  
}

export default Ticker



import React from 'react'

function Percentagechange({value}) {
  return (
      <>
      {value > 0 ? <div className=' px-2 py-0.5  bg-green-100 text-green-600  rounded-lg text-xs '>{value} %</div> : <div className=' px-2 w-20 inline-block bg-red-100 text-red-600  rounded-lg text-xs '>{value} %</div>}
      </>
    
  )
}

export default Percentagechange
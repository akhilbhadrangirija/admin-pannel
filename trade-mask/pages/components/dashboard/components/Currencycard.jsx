import React from 'react'

function Currencycard() {
  return (
    <div className='p-2 mr-2   bg-green-50 rounded-lg mt-2.5'>
        <div className='p-2 flex flex-row items-center'>
            <div id="logo" className='bg-green-100 rounded-md p-2.5 '>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-6v2h2v-2h1a2.5 2.5 0 0 0 2-4 2.5 2.5 0 0 0-2-4h-1V6h-2v2H8v8h3zm-1-3h4a.5.5 0 1 1 0 1h-4v-1zm0-3h4a.5.5 0 1 1 0 1h-4v-1z"/></svg>
            </div>
            <div className='ml-2.5 text-sm'>
                <h4>BTC-USD</h4>
                <h6 className='text-xs text-grey-700'>Bitcoin USD</h6>
            </div>

        </div>
        
        <div className='p-2 flex flex-row mt-2.5'>
            <div className='w-1/2'>
                 <div className='p-2 flex bg-green-200 rounded-lg text-sm justify-center'>4.15%</div>
                 <h2 className='p-2 ml-2.5'>23455.12</h2>
            </div>
            <div className='p-2 w-1/2'>
                chart

            </div>

        </div>

    </div>
  )
}

export default Currencycard
import React from 'react'

function User() {
  return (
    <div className='flex flex-row pb-5 justify-between text-black items-center'>
        <div className='flex justify-between' >
            <svg className='ml-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"/></svg>
            <svg className='ml-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M20 17h2v2H2v-2h2v-7a8 8 0 1 1 16 0v7zm-2 0v-7a6 6 0 1 0-12 0v7h12zm-9 4h6v2H9v-2z"/></svg>
        </div>
        <div className='flex flex-row items-center justify-around'>
            <div className='flex flex-col items-end p-1'>
                <h2>Firstname</h2>
                <h6 className='font-thin text-xs ' >username</h6>
            </div>
        <img className='rounded-full w-12' src="https://www.codegrepper.com/profile_images/100_100/83332_Vgw0Tl78V4yRXW8TjQXLrGyr0CfH3x8Pcch0hWEIbdCeR5MRIq4bBQc.jpg" alt="user" />
        </div>
    </div>
  )
}

export default User
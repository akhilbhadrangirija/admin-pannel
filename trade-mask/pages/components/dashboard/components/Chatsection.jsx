import React from 'react'
import { useState } from 'react/cjs/react.development'

function Chatsection() {
  const handleChat=(e)=>{
    e.preventDefault();
    setChat((chat)=>[...chat,{
      user:"John",
      comment:userChat,
      pic:"https://randomuser.me/api/portraits/thumb/men/75.jpg"
    }]
    )
    
    setUserChat('')
  }
  const [userChat,setUserChat]=useState('')
  const [chat,setChat] = useState([{
    user:"Tom",
    comment:"Everyone Who knows buy crypto that's a pratical solutin for fund transfer",
    pic:"https://randomuser.me/api/portraits/thumb/men/75.jpg"
  },{
    user:"Sara",
    comment:"Don't worry when all other currencies are obsolete,every soul will hold bitcoin",
    pic:"https://randomuser.me/api/portraits/thumb/men/75.jpg"
  }
    
  ]);
  return (
    <div className='p-3  w-full  bg-orange-50 rounded-lg mt-2.5'>

      <p>234256 Reactions</p>

      <div className='py-2 px-1 h-full flex flex-col justify-between'>
            <div className='overflow-y-auto h-56'>

            {chat.map((data)=><div className='flex'>
              <img className='rounded-full w-6 h-6 pr-1' src={data.pic} alt="" />
              <div>

              <p className='text-sm'>{data.user}</p>
              <p className='p-2  rounded-lg bg-white my-2 text-sm text-slate-600'>{data.comment}</p>
              </div>
            </div>
            )}

            </div>
            <div className='flex w-full mb-5'>

            <input onChange={(e)=>setUserChat(e.target.value)} value={userChat} className=' rounded-lg p-2 w-full' type="text" />
            <button onClick={(e)=>handleChat(e)} className='bg-orange-600 rounded-md p-2 ml-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M1.923 9.37c-.51-.205-.504-.51.034-.689l19.086-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.475.553-.717.07L11 13 1.923 9.37zm4.89-.2l5.636 2.255 3.04 6.082 3.546-12.41L6.812 9.17z" fill="rgba(255,255,255,1)"/></svg></button>
            </div>

      </div>
        



    </div>
  )
}

export default Chatsection
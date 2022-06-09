import React from 'react'
import Navbutton from './components/Navbutton'
import Sidebanner from './components/Sidebanner'


function Sidenav() {
  return (
    <div className='p-10 bg-red w-2/6 bg-slate-50 h-full'>
      <div className='pb-5 font-bold text-black text-xl'><span className='text-blue-700'>TRADE</span>MASK</div>
      <Navbutton title="Profile" icon={<svg width="24" height="24" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 3C9.75 3 3 9.75 3 18C3 26.25 9.75 33 18 33C26.25 33 33 26.25 33 18C33 9.75 26.25 3 18 3ZM18 30C11.4 30 6 24.6 6 18C6 11.4 11.4 6 18 6C24.6 6 30 11.4 30 18C30 24.6 24.6 30 18 30Z" fill="black"/><path d="M26.2508 23.1C25.2008 22.05 24.0008 21.3 22.6508 20.7C23.7008 19.5 24.4508 18 24.4508 16.2C24.4508 12.6 21.6008 9.75 18.0008 9.75C14.4008 9.75 11.5508 12.6 11.5508 16.2C11.5508 18 12.3008 19.5 13.3508 20.7C12.0008 21.3 10.8008 22.05 9.75078 23.1C9.15078 23.7 9.15078 24.6 9.75078 25.2C10.0508 25.5 10.5008 25.65 10.8008 25.65C11.2508 25.65 11.5508 25.5 11.8508 25.2C13.5008 23.55 15.6008 22.65 18.0008 22.65C20.2508 22.65 22.5008 23.55 24.1508 25.2C24.7508 25.8 25.6508 25.8 26.2508 25.2C26.8508 24.6 26.8508 23.7 26.2508 23.1ZM14.5508 16.2C14.5508 14.25 16.0508 12.75 18.0008 12.75C19.9508 12.75 21.4508 14.25 21.4508 16.2C21.4508 18.15 19.9508 19.65 18.0008 19.65C16.0508 19.65 14.5508 18.15 14.5508 16.2Z" fill="black"/></svg>}/>
      <Navbutton title="Dashboard" icon={<svg width="24" height="24" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.04545 6C6.94648 6 6 6.962 6 8V11.3654C6 12.4717 6.88844 13.3928 8.10414 13.5H11.4545C12.5535 13.5 13.5 12.538 13.5 11.5V8C13.5 6.88502 12.614 6 11.5909 6H8.04545ZM3 8C3 5.26877 5.32624 3 8.04545 3H11.5909C14.386 3 16.5 5.34575 16.5 8V11.5C16.5 14.2312 14.1738 16.5 11.4545 16.5H8.04545C8.01025 16.5 7.97506 16.4988 7.93995 16.4963C5.36141 16.3145 3 14.2834 3 11.3654V8ZM24.5455 6C23.4465 6 22.5 6.962 22.5 8V11.5C22.5 12.538 23.4465 13.5 24.5455 13.5H27.9545C29.0535 13.5 30 12.538 30 11.5V8C30 6.88502 29.114 6 28.0909 6H24.5455ZM19.5 8C19.5 5.26877 21.8262 3 24.5455 3H28.0909C30.886 3 33 5.34575 33 8V11.5C33 14.2312 30.6738 16.5 27.9545 16.5H24.5455C21.8262 16.5 19.5 14.2312 19.5 11.5V8ZM8.04545 22.5C6.94648 22.5 6 23.462 6 24.5V28C6 28.9396 6.85179 29.89 8.10402 30H11.4545C12.5535 30 13.5 29.038 13.5 28V24.5C13.5 23.385 12.614 22.5 11.5909 22.5H8.04545ZM3 24.5C3 21.7688 5.32624 19.5 8.04545 19.5H11.5909C14.386 19.5 16.5 21.8457 16.5 24.5V28C16.5 30.7312 14.1738 33 11.4545 33H8.04545C8.01025 33 7.97506 32.9988 7.93995 32.9963C5.3996 32.8172 3 30.8179 3 28V24.5ZM24.5455 22.5C23.4465 22.5 22.5 23.462 22.5 24.5V28C22.5 29.038 23.4465 30 24.5455 30H27.9545C29.0535 30 30 29.038 30 28V24.5C30 23.385 29.114 22.5 28.0909 22.5H24.5455ZM19.5 24.5C19.5 21.7688 21.8262 19.5 24.5455 19.5H28.0909C30.886 19.5 33 21.8457 33 24.5V28C33 30.7312 30.6738 33 27.9545 33H24.5455C21.8262 33 19.5 30.7312 19.5 28V24.5Z" fill="black"/></svg>}/>
      <Navbutton title="Wallet" icon={<svg width="24" height="24" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.5 13.05H24.3C21.6 13.05 19.35 15.3 19.35 18V18.15C19.35 20.85 21.6 23.1 24.3 23.1H27V24C27 25.8 25.65 27.15 24.15 27.15H8.85C7.35 27 6 25.65 6 23.85V12.15C6 10.35 7.35 9 8.85 9H24.15C25.2 9 26.25 9.6 26.7 10.8C27 11.55 27.9 11.85 28.65 11.55C29.4 11.25 29.7 10.35 29.4 9.6C28.5 7.35 26.4 6 24.15 6H8.85C5.7 6 3 8.7 3 12.15V23.85C3 27.3 5.7 30 8.85 30H24.15C27.45 30 30 27.3 30 23.85V22.65C31.35 22.05 32.25 20.7 32.25 19.2V16.8C32.25 14.7 30.6 13.05 28.5 13.05ZM22.35 18.15V17.85C22.35 16.8 23.25 15.9 24.3 15.9H28.5C28.95 15.9 29.25 16.2 29.25 16.65V19.2C29.25 19.65 28.95 19.95 28.5 19.95H24.3C23.25 19.95 22.35 19.2 22.35 18.15Z" fill="black"/></svg>}/>
      <Navbutton title="Trade" icon={<svg width="24" height="24" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.85847 31.7959H4.70943C3.48008 31.7959 2.4044 31.1959 1.9434 30.1459C1.32873 29.0959 1.4824 27.7459 2.09707 26.6959L7.62913 18.7459C7.78279 18.4459 7.78279 18.1459 7.62913 17.8459L2.09707 9.8959C1.32873 8.8459 1.32873 7.6459 1.9434 6.4459C2.4044 5.3959 3.48008 4.7959 4.70943 4.7959H8.85847C10.3952 4.7959 11.9318 5.5459 12.7002 6.8959L18.6932 15.5959C19.7689 17.2459 19.7689 19.3459 18.6932 20.9959L12.7002 29.6959C11.9318 31.0459 10.3952 31.7959 8.85847 31.7959ZM4.55576 8.2459L10.0878 16.1959C11.0098 17.3959 11.0098 19.1959 10.0878 20.3959L4.55576 28.3459C4.40209 28.4959 4.55576 28.6459 4.55576 28.6459C4.70943 28.7959 4.70943 28.7959 4.70943 28.7959H8.85847C9.31948 28.7959 9.93415 28.4959 10.2415 28.0459L16.2345 19.3459C16.6956 18.7459 16.6956 17.8459 16.2345 17.2459L10.2415 8.5459C9.93415 8.0959 9.31948 7.7959 8.85847 7.7959H4.70943C4.70943 7.7959 4.70943 7.7959 4.55576 7.9459C4.55576 7.9459 4.55576 8.0959 4.55576 8.2459Z" fill="black"/><path d="M23.8585 31.7959H19.7094C18.4801 31.7959 17.4044 31.1959 16.9434 30.1459C16.3287 29.0959 16.4824 27.7459 17.0971 26.6959L22.6291 18.7459C22.7828 18.4459 22.7828 18.1459 22.6291 17.8459L17.0971 9.8959C16.3287 8.8459 16.3287 7.6459 16.9434 6.4459C17.4044 5.3959 18.4801 4.7959 19.7094 4.7959H23.8585C25.3952 4.7959 26.9318 5.5459 27.7002 6.8959L33.6932 15.5959C34.7689 17.2459 34.7689 19.3459 33.6932 20.9959L27.7002 29.6959C26.7782 31.0459 25.3952 31.7959 23.8585 31.7959ZM19.7094 7.7959C19.5558 7.7959 19.5558 7.7959 19.7094 7.7959C19.5558 7.9459 19.5558 8.0959 19.5558 8.2459L25.0878 16.1959C26.0098 17.3959 26.0098 19.1959 25.0878 20.3959L19.5558 28.3459C19.4021 28.4959 19.5558 28.6459 19.5558 28.6459C19.5558 28.7959 19.7094 28.7959 19.7094 28.7959H23.8585C24.3195 28.7959 24.9342 28.4959 25.2415 28.0459L31.2345 19.3459C31.6956 18.7459 31.6956 17.8459 31.2345 17.2459L25.2415 8.5459C24.7805 8.0959 24.3195 7.7959 23.8585 7.7959H19.7094Z" fill="black"/></svg>}/>
      <Navbutton title="Notification" icon={<svg width="24" height="24" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.935 6C12.904 6 8.92138 9.89612 8.92138 14.5161V19.4516C8.92138 19.7496 8.83265 20.0408 8.66651 20.2881L6.22857 23.9171L6.21242 23.9407C5.93189 24.3415 5.96262 24.7075 6.1074 24.9708C6.25787 25.2445 6.58679 25.5 7.11664 25.5H28.9057C29.2876 25.5 29.6577 25.2727 29.8643 24.9048C30.0616 24.5533 30.0319 24.2336 29.8466 23.9908C29.8369 23.9781 29.8273 23.9652 29.818 23.9521L27.2277 20.3231C27.0462 20.0687 26.9486 19.7641 26.9486 19.4516V14.5161C26.9486 12.1977 25.921 9.98162 24.3878 8.50967C22.6453 6.98576 20.4061 6 17.935 6ZM5.92138 14.5161C5.92138 8.10389 11.3858 3 17.935 3C21.2432 3 24.1759 4.32821 26.3917 6.27682C26.4067 6.28998 26.4214 6.30344 26.4358 6.31718C28.5478 8.32922 29.9486 11.3292 29.9486 14.5161V18.9712L32.2474 22.1919C33.2637 23.5417 33.1554 25.1708 32.4802 26.3735C31.8106 27.566 30.5046 28.5 28.9057 28.5H7.11664C3.87336 28.5 1.79033 25.0469 3.74554 22.2334L5.92138 18.9946V14.5161ZM11.9992 31.5C11.9992 30.6716 12.6708 30 13.4992 30H22.4992C23.3276 30 23.9992 30.6716 23.9992 31.5C23.9992 32.3284 23.3276 33 22.4992 33H13.4992C12.6708 33 11.9992 32.3284 11.9992 31.5Z" fill="black"/></svg>}/>
      <Navbutton title="Exchange" icon={<svg width="24" height="24" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M34.2954 13.3972L31.2127 4.1936C30.7723 3.00603 29.7447 2.11536 28.4236 1.81847C27.1024 1.67003 25.9281 2.26381 25.0473 3.30292L24.4601 4.04515C22.405 3.00603 20.0563 2.41225 17.7076 2.41225C10.955 2.41225 4.78966 7.01406 3.02813 13.6941C2.88133 14.4363 3.32172 15.327 4.05569 15.6239C4.78966 15.7723 5.67043 15.327 5.81722 14.5848C7.28517 9.24074 12.1294 5.5296 17.7076 5.5296C19.9095 5.5296 22.1114 6.12338 24.1665 7.31095C24.7537 7.75628 25.6345 7.60784 26.0749 6.86561L27.396 5.08427C27.5428 4.78738 27.8364 4.78738 27.9832 4.78738C28.13 4.78738 28.2768 4.93582 28.4236 5.08427L31.6531 14.2879C31.7999 14.5848 31.6531 14.8817 31.3595 15.0301H31.2127L21.3774 15.1785C21.0839 15.1785 20.9371 15.0301 20.9371 14.8817C20.9371 14.7332 20.7903 14.5848 20.9371 14.2879L22.405 12.0612C22.6986 11.7643 22.6986 11.319 22.6986 10.8736C22.5518 10.4283 22.405 10.1314 21.9646 9.83452C20.6435 9.09229 19.1755 8.7954 17.7076 8.7954C14.4781 8.7954 11.5422 10.5767 9.92747 13.3972C9.63388 14.1394 9.78067 15.0301 10.5146 15.4754C11.2486 15.7723 12.1294 15.6239 12.5698 14.8817C13.5973 12.9519 15.6525 11.7643 17.8544 11.7643C18.2948 11.7643 18.7351 11.7643 19.1755 11.9128L18.7351 12.655C18.0012 13.6941 17.8544 15.1785 18.4416 16.3661C19.0287 17.5537 20.2031 18.2959 21.5242 18.2959L31.2127 18.1475C31.7999 18.1475 32.387 17.999 32.8274 17.7021C34.1486 16.8114 34.8825 15.0301 34.2954 13.3972Z" fill="black"/><path d="M32.0774 20.8693C31.333 20.5665 30.4397 21.172 30.2908 21.9289C28.802 27.2271 23.8889 31.0115 18.3803 31.0115C16.1471 31.0115 13.9139 30.406 11.9784 29.195C11.3829 28.7409 10.4896 28.8922 10.0429 29.6491L8.70301 31.4656C8.55413 31.617 8.25636 31.617 8.10748 31.617C7.9586 31.617 7.80972 31.4656 7.66084 31.3142L4.53433 22.0803C4.38545 21.7775 4.53433 21.4748 4.83209 21.3234H4.98097L14.6583 21.172C14.956 21.172 15.1049 21.3234 15.1049 21.4748C15.1049 21.6262 15.2538 21.7775 15.1049 22.0803L13.6161 24.3509C13.3183 24.6537 13.3183 25.1078 13.3183 25.562C13.4672 26.0161 13.6161 26.3188 14.0627 26.6216C15.4027 27.3785 16.7426 27.6812 18.3803 27.6812C21.6557 27.6812 24.6333 25.8647 26.1221 23.1399C26.5688 22.3831 26.271 21.4748 25.5266 21.0207C24.7822 20.5665 23.8889 20.8693 23.4423 21.6262C22.4001 23.5941 20.3158 24.6537 18.2314 24.6537C17.7848 24.6537 17.3381 24.6537 17.0404 24.5023L17.487 23.8968C18.2314 22.8372 18.3803 21.3234 17.7848 20.2638C17.1892 19.0528 15.9982 18.2959 14.6583 18.2959L4.98097 18.4473C4.38545 18.4473 3.78992 18.5987 3.34328 18.9014C1.85446 19.6583 1.11006 21.6262 1.70558 23.2913L4.83209 32.5253C5.27874 33.7363 6.32091 34.6445 7.66084 34.7959C7.80972 34.7959 7.9586 34.7959 8.10748 34.7959C9.29853 34.7959 10.3407 34.1904 10.9362 33.2821L11.3829 32.5253C13.4672 33.5849 15.7004 34.039 18.0825 34.039C24.9311 34.039 30.8863 29.3464 32.8218 22.6858C33.2684 21.9289 32.8218 21.0207 32.0774 20.8693Z" fill="black"/></svg>}/>
      
      <Sidebanner/>
      
      
      <Navbutton title="Informtion" icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"/></svg>}/>
      <Navbutton title="Account Setting" icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M6.17 18a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3.001 3.001 0 0 1-5.66 0H2v-2h4.17zm6-7a3.001 3.001 0 0 1 5.66 0H22v2h-4.17a3.001 3.001 0 0 1-5.66 0H2v-2h10.17zm-6-7a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3.001 3.001 0 0 1-5.66 0H2V4h4.17z"/></svg>}/>
      <Navbutton title="Log out" icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3h-2V4H6v16h12v-2h2v3a1 1 0 0 1-1 1H5zm13-6v-3h-7v-2h7V8l5 4-5 4z"/></svg>}/>
    </div>
  )
}

export default Sidenav
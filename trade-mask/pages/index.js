import Image from 'next/image'
import { NextSeo } from 'next-seo'
import Sidenav from './components/sidenav/Sidenav'
import Userinfo from './components/userinfo/Userinfo'
import Dashboard from './components/dashboard/Dashboard'

export default function Home() {
  return (
    <>
      <NextSeo title="Trade Mask" />
      <main className=" flex flex-row h-screen">
      <Sidenav className="w-2/12 "/>
      <Dashboard className="w-7/12 "/>
      <Userinfo className="w-3/12 "/>
      </main>
    </>
  )
}

import Image from 'next/image'
import { NextSeo } from 'next-seo'
import Sidenav from './components/sidenav/Sidenav'
import Userinfo from './components/userinfo/Userinfo'
import Dashboard from './components/dashboard/Dashboard'

export default function Home() {
  return (
    <>
      <NextSeo title="Simple Usage Example" />
      <main className=" flex flex-row">
      <Sidenav/>
      <Dashboard/>

      <Userinfo/>
      </main>
    </>
  )
}
import * as React from 'react'
import Layout from '../components/layout'
import ExtLink from '../components/extlink'
import IndexCard from '../components/indexcard'
import { MdPersonPinCircle, MdGridOn, MdEditSquare, MdContacts } from "react-icons/md";

const IndexPage = () => {
  return (
    <Layout pageTitle={"Hi there!"}>
      <p className="text-lg">I'm Maded, a developer, campaigner, and activist for digital rights and social justice.</p>
      <div className="flex flex-wrap gap-4 place-content-center my-5">
        <IndexCard title="About" description="More about me." background="bg-gradient-to-r from-gray-700 via-gray-900 to-black" text="text-white">
          <MdPersonPinCircle size={32}></MdPersonPinCircle>
        </IndexCard>
        <IndexCard title="Projects" description="My work." background="bg-gradient-to-r from-green-200 via-green-300 to-blue-500" text="text-black">
          <MdGridOn size={32}></MdGridOn>
        </IndexCard>
        <IndexCard title="Blog" description="Where I ramble." background="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900" text="text-white">
          <MdEditSquare size={32}></MdEditSquare>
        </IndexCard>
        <IndexCard title="Contact" description="Find me online." background="bg-gradient-to-r from-emerald-500 to-lime-600" text="text-black">
          <MdContacts size={32}></MdContacts>
        </IndexCard>
      </div>
    </Layout>
  )
}

export const Head = () => {
  return (
    <>
      <html lang="en" className="bg-gradient-to-tr from-slate-950 to-sky-950 text-white h-screen" />
      <body />
      <title>@blubits</title>
    </>
  )
}

export default IndexPage
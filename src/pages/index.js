import * as React from 'react'
import Layout from '../components/layout'
import ExtLink from '../components/extlink'
import IndexCard from '../components/indexcard'
import { FaGithub } from "react-icons/fa";



const IndexPage = () => {
  return (
    <Layout pageTitle={"Hi there!"}>
      <p className="text-lg mb-7">Hi, I'm Maded, a developer, computer science tutor, and believer in social justice.</p>
      <div className="flex flex-row flex-wrap gap-6">
        <IndexCard link="tutoring/" title="Ask for tutoring" description="My teaching methdology, subjects, and contact details."></IndexCard>
        <IndexCard title="Projects" description="What I'm currently working on."></IndexCard>
        <IndexCard title="Blog" description="Musings about technology and society."></IndexCard>
        <IndexCard title="Contact" description="Resume, email, and other details."></IndexCard>
      </div>
      <p className="text-xs mt-8">© 2024 Maded Batara III. Powered by <ExtLink to="https://www.gatsbyjs.com">Gatsby</ExtLink> and <ExtLink to="https://www.tailwindcss.com">Tailwind</ExtLink>.</p>
      <p className="text-xs mt-2"><FaGithub className='inline' /> <ExtLink to="https://github.com/blubits/blubits.me">View on GitHub →</ExtLink></p>
    </Layout>
  )
}

export const Head = () => {
  return (
    <>
      <html lang="en" className="h-screen" />
      <body className="bg-gray-100" />
      <title>@blubits</title>
    </>
  )
}

export default IndexPage
import * as React from 'react'
import Layout from '../components/layout'
import ExtLink from '../components/extlink'

const IndexPage = () => {
  return (
    <Layout pageTitle={"Hi there!"}>
      <p class="text-lg">I'm Maded, a developer, campaigner, and activist for digital rights and social justice.</p>
      <p class="font-semibold mt-3 mb-2">What's going to be here?</p>
      <p>I've moved my personal webpage from a hacky Notion page to one hosted on <ExtLink to="https://www.netlify.com/">Netlify</ExtLink> (finally!) and powered by <ExtLink to="https://www.gatsbyjs.com/">Gatsby</ExtLink>, <ExtLink to="https://react.dev/">React</ExtLink>, and <ExtLink to="https://tailwindcss.com/">Tailwind CSS</ExtLink> (as a way to learn the weeds of the JS-backed web development ecosystem). I'll add a "casual resume", list of projects, and maybe a blog here as we go along. This site is <ExtLink to="https://github.com/blubits/blubits.me">fully open source</ExtLink>, by the way.</p>
      <p class="font-semibold mt-3 mb-2">Where am I right now?</p>
      <p>I'm with the <ExtLink to="https://cp-union.com">Computer Professionals' Union</ExtLink>, an organization of ICT professionals and advocates in the Philippines pushing for the use of technology for the benefit of the people. Digital rights or ICT4D advocate? <ExtLink to="mailto:maded@blubits.me">Come get in touch!</ExtLink></p>
      <p class="font-semibold mt-3 mb-2">Where can you follow me?</p>
      <p>I'm most active on <ExtLink to="https://twitter.com/mnbatara3">Twitter</ExtLink> (but please don't DM me there, email me instead). I'm also on <ExtLink to="https://linkedin.com/in/mnbatara3">LinkedIn</ExtLink> and <ExtLink to="https://github.com/blubits">GitHub</ExtLink>.</p>
      <p class="font-semibold mt-3 mb-2">How can you contact me?</p>
      <p><ExtLink to="mailto:hi@contact.blubits.me">Come say hi!</ExtLink></p>
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
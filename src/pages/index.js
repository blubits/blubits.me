import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle={"Hi there!"}>
      <p class="text-lg">I'm Maded, a developer, campaigner, and activist for digital rights and social justice.</p>
    </Layout>
  )
}

export const Head = () => {
  return (
    <>
      <html lang="en" />
      <body className="bg-sky-950 text-white" />
      <title>@blubits</title>
    </>
  )
}

export default IndexPage
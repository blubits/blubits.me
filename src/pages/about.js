import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout>
      <p>This is a test paragraph</p>
    </Layout>
  )
}

export const Head = () => {
  return (
    <>
      <html lang="en" />
      <body className="bg-sky-950 text-white font-sans" />
      <title>About me | @blubits</title>
    </>
  )
}

export default AboutPage
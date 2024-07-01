import * as React from 'react'
import Layout from '../components/layout'
import ExtLink from '../components/extlink'

const TutoringPage = () => {
  return (
    <Layout pageName="Tutoring"pageTitle={"Expert, trusted, and tailored tutoring for math and computer science."}>
      <a className="inline-block bg-blue-500 hover:bg-blue-700 text-white py-2 px-5 rounded-full mb-5" href="mailto:tutoring@contact.blubits.me">Contact</a>
      <p className="mb-3"><span className="font-semibold">Expert tutoring.</span> As a summa cum laude computer science graduate from a top university, you can trust that I am a master at computational and mathematical thinking. I'll teach you how to think like a programmer.</p>
      <p className="mb-3"><span className="font-semibold">Tailored to your needs.</span> I've been tutoring many people, from elementary students all the way to working professionals, for 7 years. I'll get to know your learning style and needs, and fit our discussion to suit it.</p>
      <p className="mb-3"><span className="font-semibold">Trusted to deliver.</span> I'll make sure you get the right help and we'll make things as clear as possible so you understand. We'll unlock your potential to be the best at your field. My clients pass their classes and even win competitions because they understand topics innately, never spoonfed.</p>
      <h2 class="text-2xl font-display font-semibold mt-10">What I tutor</h2>
    </Layout>
  )
}

export const Head = () => {
  return (
    <>
      <html lang="en" />
      <body className="bg-white" />
      <title>About me | @blubits</title>
    </>
  )
}

export default TutoringPage
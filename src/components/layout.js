import * as React from 'react'
import Header from './header.js'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="w-1/2 mx-auto mt-8 flex flex-col">
      <Header />
      <main>  
        <h1 className="text-4xl my-5 font-semibold font-display">{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
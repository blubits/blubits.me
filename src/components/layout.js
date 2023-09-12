import * as React from 'react'
import Header from './header.js'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="w-5/6 md:w-3/4 lg:w-1/2 mx-auto mt-8 flex flex-col">
      <Header />
      <main>  
        <h1 className="text-4xl my-5 font-display font-semibold">{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
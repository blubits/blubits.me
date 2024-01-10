import * as React from 'react'
import Header from './header'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="w-5/6 lg:w-3/4 xl:w-1/2 mx-auto py-6 md:py-14 lg:py-20 flex flex-col">
      <Header />
      <main>  
        <h1 className="text-4xl my-5 font-display font-semibold">{pageTitle}</h1>
        <div className="min-w-1/6">
          {children}
        </div>
      </main>
    </div>
  )
}

export default Layout
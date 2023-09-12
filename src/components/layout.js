import * as React from 'react'
import { Link } from 'gatsby'
import Logo from '../assets/icon-small.svg';

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="w-1/2 mx-auto mt-8 flex flex-col">
      <nav className="flex flex-row my-4">
        <Link to="/">
          <span className="sr-only">blubits.me</span>
          <Logo className="h-12 w-12 p-2 stroke-white hover:bg-slate-900 hover:rounded-full" />
        </Link>
      </nav>
      <main>  
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
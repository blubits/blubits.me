import * as React from 'react'

const ExtLink = ({to, children}) => {
    return (
        <a href={to} className="text-blue-500 hover:text-blue-400 underline underline-offset-4 hover:decoration-2">
            {children}
        </a>
    )
}

export default ExtLink
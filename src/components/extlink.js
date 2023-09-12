import * as React from 'react'

const ExtLink = ({to, children}) => {
    return (
        <a href={to} className="text-yellow-400 hover:text-yellow-500 underline underline-offset-4 hover:decoration-2">
            {children}
        </a>
    )
}

export default ExtLink
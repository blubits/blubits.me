import * as React from 'react'
import { Link } from "gatsby"

const IndexCard = ({title, description, background, text, children}) => {
    
    return (
        <Link href="/about" className={"w-full lg:w-[calc(50%-10px)] rounded overflow-hidden hover:ring focus:ring " + background + " " + text}>
            <div className="flex">
                <div className="w-1/5 px-3 flex items-center justify-center">
                    {children}
                </div>
                <div className="grow my-3">
                    <h2 className="font-bold text-lg">{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </Link>
    )
}

export default IndexCard
import * as React from 'react'
import { Link } from "gatsby"

const IndexCard = ({title, description, link, children}) => {
    
    return (
        <Link href={link} className={"block bg-white shadow-sm hover:shadow-lg transition-all px-8 py-4 basis-full lg:basis-[48%] rounded overflow-hidden"}>
            <div className="flex">
                <div className="grow my-3">
                    <h2 className="font-semibold text-lg">{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </Link>
    )
}

export default IndexCard
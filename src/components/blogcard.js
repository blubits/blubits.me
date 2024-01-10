import * as React from 'react'
import { FcAbout } from "react-icons/fc";

const BlogCard = ({title, children}) => {
    return (
        <div className="basis-1/2 rounded overflow-hidden shadow-lg bg-white">
            <FcAbout></FcAbout>
        </div>
    )
}

export default BlogCard
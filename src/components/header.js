import * as React from 'react'
import { Link } from 'gatsby'
import Logo from '../assets/icon-small.svg'
import { MdChevronRight } from "react-icons/md";

const Header = ({sectionTitle}) => {
    return (
        <nav className="flex flex-row my-2 items-center">
            <Link to="/">
                <span className="sr-only">blubits.me</span>
                <Logo className="h-12 w-12 p-2 stroke-black hover:bg-slate-900 hover:stroke-yellow-500 hover:rounded-full" />
            </Link>
            {sectionTitle && <MdChevronRight className="ml-2"></MdChevronRight>}
            {sectionTitle && <p class="text-sm ml-1">{sectionTitle}</p>}
        </nav>
    )
}

export default Header;
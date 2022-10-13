import type React from "react"
import cx from "classnames"



type MenuProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
const Menu: React.FC<MenuProps> = ({ className, ...rest }) => {
    return (
        <div {...rest} className={cx("flex-none", className)}>
            <ul className="menu menu-horizontal p-0">
                <MenuItems className="hidden md:block" />
                <li className="md:hidden relative">
                    <button className="btn btn-square btn-ghost p-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                    <ul className="absolute top-12 right-0 p-2 bg-base-300 z-10">
                        <MenuItems />
                    </ul>
                </li>
            </ul>
        </div>
    )
}

const MenuItems: React.FC<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>> = (props) => {
    return (
        <>
            <li {...props}><a href="/about">About Me</a></li>
            <li {...props}><a href="/blog">Stuff I wrote</a></li>
        </>
    )
}

export default () => {
    return (
        <>
            <nav className="navbar bg-base-100 mx-auto max-w-[960px]">
                <div className="flex-1">
                    <a href="/" className="btn btn-ghost normal-case text-xl">Home</a>
                </div>
                <Menu />

            </nav>
        </>

    )
}
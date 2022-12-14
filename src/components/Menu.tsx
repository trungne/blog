import type React from "react";
import cx from "classnames";

type MenuProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
const Menu: React.FC<MenuProps> = ({ className, ...rest }) => {
  return (
    <>
      <div {...rest} className={cx("flex-none", className)}>
        <ul className="menu menu-horizontal p-0">
          <MenuItems className="hidden md:block default-text font-thin" />
        </ul>
      </div>
      
      <div className="md:hidden dropdown dropdown-end">
        <label
          tabIndex={0}
          className="btn btn-square btn-ghost p-0 text-black dark:text-white m-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu rounded !w-[180px] bg-base-content dark:bg-neutral-content"
        >
          <MenuItems className="default-text" />
        </ul>
      </div>
    </>
  );
};

const MenuItems: React.FC<
  React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>
> = (props) => {
  return (
    <>
      <li {...props}>
        <a href="/about">About Me</a>
      </li>
      <li {...props}>
        <a href="/blog">Stuff I wrote</a>
      </li>
      <li {...props}>
        <a href="/portfolio">Portfolio</a>
      </li>
    </>
  );
};

export default Menu;

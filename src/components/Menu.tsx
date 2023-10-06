import React from "react";
import cx from "classnames";

type MenuProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  path: string;
};
const Menu: React.FC<MenuProps> = ({ className, path, ...rest }) => {
  return (
    <>
      <div {...rest} className={cx("flex-none", className)}>
        <ul className="menu menu-horizontal p-0">
          <MenuItems path={path} className="hidden font-thin md:block" />
        </ul>
      </div>

      <div className="dropdown-end dropdown md:hidden">
        <label
          tabIndex={0}
          className="btn btn-ghost btn-square m-1 p-0 text-black dark:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
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
          className="dropdown-content menu !w-[180px] rounded bg-base-content dark:bg-neutral-content"
        >
          <MenuItems path={path} />
        </ul>
      </div>
    </>
  );
};

type MenuItemsProps = React.DetailedHTMLProps<
  React.LiHTMLAttributes<HTMLLIElement>,
  HTMLLIElement
> & {
  path: string;
};
const MenuItems: React.FC<MenuItemsProps> = ({ path, ...props }) => {
  return (
    <>
      <MenuItem
        isHighlighted={path === "/about"}
        href="/about"
        label="About Me"
        {...props}
      />
      <MenuItem
        isHighlighted={path === "/blog"}
        href="/blog"
        label="Stuff I wrote"
        {...props}
      />
      <MenuItem
        isHighlighted={path === "/portfolio"}
        href="/portfolio"
        label="Portfolio"
        {...props}
      />
    </>
  );
};

const MenuItem = ({
  href,
  label,
  isHighlighted,
  className,
  ...props
}: React.DetailedHTMLProps<
  React.LiHTMLAttributes<HTMLLIElement>,
  HTMLLIElement
> & { href: string; label: string; isHighlighted: boolean }) => {
  return (
    <li
      {...props}
      className={cx(isHighlighted ? "text-accent" : "", className)}
    >
      <a href={href}>{label}</a>
    </li>
  );
};

export default Menu;

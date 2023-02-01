import type React from "react";
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
          <MenuItems
            path={path}
            className="hidden md:block default-text font-thin"
          />
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
          <MenuItems path={path} className="default-text" />
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
      <MenuItem path={path} href="/about" label="About Me" {...props} />
      <MenuItem path={path} href="/blog" label="Stuff I wrote" {...props} />
      <MenuItem path={path} href="/portfolio" label="Portfolio" {...props} />
    </>
  );
};

const MenuItem = ({
  path,
  href,
  label,
  ...props
}: MenuItemsProps & { href: string; label: string }) => {
  return (
    <li
      {...props}
      className={cx(
        path === href ? "text-accent" : "default-text"
      )}
    >
      <a href={href}>{label}</a>
    </li>
  );
};

export default Menu;

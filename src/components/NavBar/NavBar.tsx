import DarkModeSwap from "@components/DarkModeSwap";
import Menu from "@components/Menu";

type Props = {
  isDarkMode: boolean;
  path: string;
};
const NavBar: React.FC<Props> = ({ isDarkMode, path }) => {
  return (
    <nav className="navbar h-[64px] mx-auto max-w-[960px] bg-eggshell dark:bg-independence border-b border-solid border-zinc-600 box-border">
      <div className="flex-1">
        <a
          href="/"
          className={`btn btn-ghost normal-case text-xl ${
            path === "/" ? "text-accent" : ""
          }`}
        >
          Home
        </a>
      </div>
      <DarkModeSwap isDarkMode={isDarkMode} className="md:hidden" />
      <Menu path={path} />
      <DarkModeSwap isDarkMode={isDarkMode} className="hidden md:inline-grid" />
    </nav>
  );
};

export default NavBar;

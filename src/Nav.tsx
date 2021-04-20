import React from "react";
import Moon from "./assets/moon";
import useDarkMode from "./hooks/useDarkMode";

const Nav = () => {
  const [colorTheme, setTheme]: any = useDarkMode();
  return (
    <nav className="h-16 flex justify-between items-center shadow px-16 dark:bg-dark-elements dark:text-dark-text">
      <h1 className="font-bold font-mono text-lg">Where in the world?</h1>
      <div
        className="flex items-center cursor-pointer"
        onClick={() => setTheme(colorTheme)}
      >
        <a className="m-2">
          <Moon width={15} />
        </a>
        <p className="text-sm">Dark Mode</p>
      </div>
    </nav>
  );
};

export default Nav;

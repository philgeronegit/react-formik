import { ReactNode } from "react";

interface NavBarProps {
  children: ReactNode;
}

const NavBar = ({ children }: NavBarProps) => (
  <nav className="bg-white border-gray-200 dark:bg-gray-900 sticky top-0">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        {children}
      </div>
    </div>
  </nav>
);

export default NavBar;

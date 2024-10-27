import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { uiActions, RootState } from "../../store/index.ts";

import MobileNavButton from "./MobileNavButton.tsx";
import MobileNavMenu from "./MobileNavMenu.tsx";
import ThemeButton from "./ThemeButton.tsx"


const Header = () => {
  const dispatch = useDispatch()
  const isOpen = useSelector((state: RootState) => state.ui.mobileMenuIsOpen)
  const isDark = useSelector((state: RootState) => state.ui.isDark)

  const toggleMenu = () => dispatch(uiActions.toggleMenu())
  const toggleTheme = () => dispatch(uiActions.toggleDarkMode())

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-slate-100 dark:bg-gray-800 bg-opacity-75 backdrop-blur-md shadow-lg rounded-xl mx-auto w-11/12 py-4">
      <div className="flex flex-col">
        <nav className="flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">AOEP</h1>

          <MobileNavButton isOpen={isOpen} onToggle={toggleMenu} />

          <ul className="md:flex hidden space-x-6">
            <li><Link to="/" className="text-gray-800 dark:text-gray-200 hover:text-yellow-500">Home</Link></li>
            <li><Link to="/about" className="text-gray-800 dark:text-gray-200 hover:text-yellow-500">About</Link></li>
            <li><Link to="/projects" className="text-gray-800 dark:text-gray-200 hover:text-yellow-500">Projects</Link></li>
            <li><Link to="/contact" className="text-gray-800 dark:text-gray-200 hover:text-yellow-500">Contact</Link></li>
          </ul>

          <div className="hidden md:block">
            <ThemeButton toggleTheme={toggleTheme} isDark={isDark} />
          </div>


        </nav>
        {isOpen && <MobileNavMenu toggleMenu={toggleMenu} toggleTheme={toggleTheme} isDark={isDark} />}
      </div>

    </header>)

};

export default Header;

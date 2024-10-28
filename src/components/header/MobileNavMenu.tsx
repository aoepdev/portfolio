import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { menuVariants } from "../../util/animations.ts"
import ThemeButton from "./ThemeButton.tsx"

type propsType = {
  toggleMenu: () => void;
  toggleTheme: () => void,
  isDark: boolean
}

const MobileNavMenu = ({ toggleMenu, toggleTheme, isDark }: propsType) => {

  return (
    <motion.nav
      className="ml-4 mr-4"
      initial="closed"
      animate="open"
      exit="closed"
      variants={menuVariants}
    >
      <ul
        className="md:hidden flex flex-col min-h-64 items-center justify-center space-y-4 mt-4 border-t-2 dark:border-gray-700 bg-slate-100 p-4 bg-transparent"
      >
        <li>
          <Link
            to="/"
            className="text-gray-800 dark:text-gray-200 hover:text-yellow-500"
            onClick={toggleMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-gray-800 dark:text-gray-200 hover:text-yellow-500"
            onClick={toggleMenu}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="text-gray-800 dark:text-gray-200 hover:text-yellow-500"
            onClick={toggleMenu}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="text-gray-800 dark:text-gray-200 hover:text-yellow-500"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </li>
        <li onClick={toggleMenu}>
          <ThemeButton toggleTheme={toggleTheme} isDark={isDark} />
        </li>
      </ul>
    </motion.nav>)
}

export default MobileNavMenu;
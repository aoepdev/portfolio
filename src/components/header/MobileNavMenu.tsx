import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { menuVariants } from "../../util/animations.ts"

const MobileNavMenu = ({ toggleMenu }: { toggleMenu: () => void }) => {

  return (
    <motion.nav
      initial="closed"
      animate="open"
      exit="closed"
      variants={menuVariants}
    >
      <ul
        className="md:hidden flex flex-col min-h-64 items-center justify-center space-y-4 mt-4 bg-slate-100 p-4 bg-transparent"
      >
        <li>
          <Link
            to="/"
            className="text-gray-800 hover:text-yellow-500"
            onClick={toggleMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-gray-800 hover:text-yellow-500"
            onClick={toggleMenu}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="text-gray-800 hover:text-yellow-500"
            onClick={toggleMenu}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="text-gray-800 hover:text-yellow-500"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </li>
      </ul>
    </motion.nav>)
}

export default MobileNavMenu;
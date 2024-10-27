import { useState } from "react";
import { Link } from "react-router-dom";
import MobileNavButton from "./MobileNavButton.tsx";
import MobileNavMenu from "./MobileNavMenu.tsx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-slate-100 bg-opacity-75 backdrop-blur-md shadow-lg rounded-xl mx-auto w-11/12 py-4">
      <div className="flex flex-col">
        <nav className="flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold text-gray-800">AOEP</h1>

          <MobileNavButton isOpen={isOpen} onToggle={toggleMenu} />

          <ul className="md:flex hidden space-x-6">
            <li><Link to="/" className="text-gray-800 hover:text-yellow-500">Home</Link></li>
            <li><Link to="/about" className="text-gray-800 hover:text-yellow-500">About</Link></li>
            <li><Link to="/projects" className="text-gray-800 hover:text-yellow-500">Projects</Link></li>
            <li><Link to="/contact" className="text-gray-800 hover:text-yellow-500">Contact</Link></li>
          </ul>

        </nav>
        {isOpen && <MobileNavMenu toggleMenu={toggleMenu} />}</div>

    </header>)
};

export default Header;

import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">AOEP Dev</h1>
        <ul className="flex space-x-6">
          <li><NavLink to="/" >Home</NavLink></li>
          <li><NavLink to="/about" >About</NavLink></li>
          <li><NavLink to="/projects" >Projects</NavLink></li>
          <li><NavLink to="/contact" >Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

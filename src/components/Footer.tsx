const Footer = () => (
  <footer className="bg-gray-900 text-white py-4 mt-8">
    <div className="container mx-auto text-center">
      <p>&copy; {new Date().getFullYear()} AOEP Dev. All rights reserved.</p>
      <ul className="flex justify-center space-x-4 mt-2">
        <li><a href="https://github.com/aoepdev" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">GitHub</a></li>
        <li><a href="https://linkedin.com/in/alfredep" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">LinkedIn</a></li>
        <li><a href="mailto:aoep.dev@gmail.com" className="hover:text-yellow-500">Email</a></li>
      </ul>
    </div>
  </footer>
);

export default Footer;


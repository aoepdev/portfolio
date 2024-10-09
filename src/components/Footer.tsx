const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} AOEP Dev. All Rights Reserved.</p>
        <p>
          Built with <span className="text-yellow-500">React</span>, <span className="text-yellow-500">Tailwind CSS</span>, and <span className="text-yellow-500">Firebase</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section id="home" className="min-h-[calc(100vh-5.5rem)] pt-28 px-8">
      <div className="flex flex-col justify-center items-center dark:bg-gray-900">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 dark:text-white">Welcome!</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">I'm Alfred, a Web Developer.</p>

        <Link to="/about" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          See more about me
        </Link>
      </div>
    </section>
  );
}

export default Home;

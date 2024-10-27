import { redirect } from "react-router-dom";

const Home = () => {
  const handleRedirect = () => { return redirect("/projects") }

  return (
    <div className="flex flex-col justify-center items-center dark:bg-gray-900">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 dark:text-white">Welcome to My Portfolio</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300">I'm Alfred, a Web Developer.</p>

      <button onClick={handleRedirect} className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        View Projects
      </button>
    </div>
  );
}

export default Home;

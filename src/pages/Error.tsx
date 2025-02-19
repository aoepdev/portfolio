import { isRouteErrorResponse, useRouteError, Link } from 'react-router-dom';
import Layout from '../components/Layout';

const ErrorPage = () => {
  const error = useRouteError();

  let title = 'An error occurred!';
  let message = 'Something went wrong.';

  if (isRouteErrorResponse(error)) {
    if (error.status === 500) {
      message = error.data.message;
    }

    if (error.status === 404) {
      title = '404';
      message = 'Page not found';
    }
  }

  return (
    <Layout>
      <section id="projects" className="min-h-[calc(100vh-5.5rem)] pt-28 px-8">
        <div className="flex justify-center items-center text-center">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md max-w-lg">
            <h1 className="text-6xl font-bold text-red-600 mb-4"
            >
              {title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-100 mb-6"
            >
              {message}
            </p>
            <Link
              to="/"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
            >
              Go Back to Home
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ErrorPage;

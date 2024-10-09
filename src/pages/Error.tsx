import { isRouteErrorResponse, useRouteError } from "react-router-dom";

import Layout from "../components/Layout.tsx";


const Error = () => {
  const error = useRouteError();

  let title = 'Error';
  let message = 'Something went wrong';

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      title = '404';
      message = 'Page not found'
    }
  }

  return (
    <Layout>
      <h1>{title}</h1>
      <p>{message}</p>
    </Layout>
  )
}

export default Error;
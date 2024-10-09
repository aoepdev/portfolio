import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './pages/Root.tsx'
import Home from './pages/Home.tsx';
import About from './pages/About.tsx'
import Projects from './pages/Projects.tsx'
import Contact from './pages/Contact.tsx'
import Error from './pages/Error.tsx';



const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'projects', element: <Projects /> },
        { path: 'contact', element: <Contact /> }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App

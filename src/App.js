import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Countries from './components/countries/Countries';
import Error from './components/error/Error';
import Main from './layout/Main';


function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main />, children: [{
        path: '/about', element: <About />
      },
      {
        path: '/countries', element: <Countries />
      },
      {
        path: '/contact', element: <Contact />
      }
      ]
    },
    {
      path: '*', element: <Error />
    }
  ])
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}
export default App
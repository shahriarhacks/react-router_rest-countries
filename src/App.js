import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Countries from './components/countries/Countries';
import Error from './components/error/Error';
import Home from './components/home/Home';
import Landing from './components/landingPage/Landing';
import Posts from './components/posts/Posts';
import Users from './components/users/Users';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main />, children: [
        { path: '/', element: <Landing /> },
        { path: '/home', element: <Home /> },
        { path: '/about', element: <About /> },
        {
          path: '/users',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users')
          },
          element: <Users />
        },
        { path: '/posts', element: <Posts /> },
        { path: '/countries', element: <Countries /> },
        { path: '/contact', element: <Contact /> },
      ]
    },
    { path: '*', element: <Error /> }
  ])
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}
export default App
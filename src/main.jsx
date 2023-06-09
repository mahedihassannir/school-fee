import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/layout/Main';
import Home from './components/Home/Home';
import About from './components/About/About';
import Food from './components/freefood/Food';
import Contact from './components/Contact/Contact';

let router = createBrowserRouter([

  {
    path: '/',
    element: <Main></Main>,

    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/About",
        element: <About></About>
      },

      {
        path: "/Free Food",
        element: <Food></Food>,
        
        
      },
      {
        path: "/Contact",
        element: <Contact></Contact>
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

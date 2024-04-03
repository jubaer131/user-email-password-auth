import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './assets/Root';
import './index.css'
import Register from './Register';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home';
import Login from './Login/Login';
import Heroregister from './Heroregister';

import UseProvider2 from './assets/provider/UseProvider2';
import Orders from './assets/Orders';
import Privaterout from './route/Privaterout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [

      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/heroregister",
        element: <Heroregister></Heroregister>,
      },
      {
        path: "/order",
        element: <Privaterout><Orders></Orders></Privaterout>,
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UseProvider2>
      <RouterProvider router={router} />
    </UseProvider2>
  </React.StrictMode>,
)

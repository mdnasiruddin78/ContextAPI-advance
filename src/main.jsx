import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import { HelmetProvider } from 'react-helmet-async';
import Authproviders from './Providers/Authproviders';
import Orders from './components/Orders';
import PrivateRoute from './components/PrivateRoute';


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
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "order",
        element: <PrivateRoute><Orders></Orders></PrivateRoute>,
      }
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <HelmetProvider>
      <Authproviders>
        <RouterProvider router={router} />
      </Authproviders>
     </HelmetProvider>
  </StrictMode>,
)

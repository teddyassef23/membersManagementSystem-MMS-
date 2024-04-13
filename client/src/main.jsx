import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Importa los componentes de las páginas
// Bringing in the pages the router will use to conditionally show the appropriate views

import App from './App';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import LoginSignup from './pages/Login';


// Define la configuración de las rutas
// Define the accessible routes, and which components respond to which URL

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      
      {
        path: 'login',
        element: <LoginSignup />,
      }
    ],
  },
]);

// Renderiza el componente RouterProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

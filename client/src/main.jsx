import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import SingleThought from './pages/SingleThought';
import Profile from './pages/Profile';
import ErrorPage from './pages/ErrorPage';
import Member from './pages/member/index.jsx';
// import PaymentElection from './pages/PaymentElection';
// import Payment from './pages/Payment';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/profiles/:username',
        element: <Profile />
      }, {
        path: '/me',
        element: <Profile />
      }, {
        path: '/thoughts/:thoughtId',
        element: <SingleThought />
      },
      {
        path: '/members',
        element: <Member />
      },
      // {
      //   path: '/payment',
      //   element: <Payment />
      // },
      // {
      //   path: '/paymentElection',
      //   element: <PaymentElection />
      // },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

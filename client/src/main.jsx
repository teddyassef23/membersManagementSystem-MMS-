import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx';
import Member from './pages/member';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AddNewMember from './pages/member/MemberForm.css';
// import FindMember from './pages/../components/';
import ErrorPage from './pages/ErrorPage';
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
        path: '/member',
        element: <Member />
      },
       {
        path: '/newmember',
        element: <AddNewMember />
      }, 
      //  {
      //   path: '/findmember',
      //   element: <FindMember />
      // }, 
      // {
      //   path: '/thoughts/:thoughtId',
      //   element: <SingleThought />
      // },
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

import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Member from './pages/member';
// import Home from './pages/Home';
import App from './App';



const router = createBrowserRouter([
  {
    path: '/',
    // element: <App />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        element: <App/>,
      },
 
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
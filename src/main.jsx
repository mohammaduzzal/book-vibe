import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import BookDetails from './Components/BookDetails/BookDetails';
import ListedBook from './Components/ListedBook/ListedBook';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "books/:bookId", //do not load al the books for one book
        loader:()=> fetch('/BookData.json'),
        element: <BookDetails></BookDetails>
      },
      {
        path:'listedBook',
        loader: () => fetch('/BookData.json'), //do not load all data for some (not the best way)
        element: <ListedBook></ListedBook>
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />

  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root.jsx';
import './App.css';
import BookDetails from './Components/BookDetails/BookDetails.jsx';
import Home from './Home.jsx';
import ReadList from './Components/ReadList/ReadList.jsx';
import PagesRead from './Components/PagesRead/PagesRead.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        Component: Home,
      },
      {
        path: '/books',
        element: <h3>Books</h3>
      },
      {
        path: 'readList',
        loader: (books) => fetch('/datas.json'),
        Component: ReadList,
      },
      {
        path: '/pagesRead',
        loader: () => fetch('/datas.json'),
        Component: PagesRead,
      },
      {
        path: '/books/:id',
        loader: (books) => fetch('/datas.json'),
        Component: BookDetails,
      }
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <Root />

  </RouterProvider>
)

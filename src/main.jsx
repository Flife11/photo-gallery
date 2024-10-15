import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import ImageDetail from './pages/ImageDetail/index.jsx';
import ImageList from './pages/ImageList/index.jsx';
import ErrorPage from "./pages/Error/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/photos",
    element: <ImageList />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/photo/:id",
    element: <ImageDetail />,
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

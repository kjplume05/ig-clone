import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './components/login.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage.jsx";
import Dashboard from "./components/Dashboard.jsx";
import DashboardItems from "./components/DashboardItems.jsx";
import Register from "./components/Register.jsx";
import Home from "./components/Home.jsx";

const router = createBrowserRouter([
    { path: "/", element: <Home />},
    { path: "/login", element: <Login />},
    { path: "/register", element: <Register />},
    { path: "/dashboard", element: <Dashboard />, children: [
            { path: ":id", element: <DashboardItems />},
        ]
    },
    // * - any URL that isn't explicitly defined in router setup
    { path: "*", element: <NotFoundPage />},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)

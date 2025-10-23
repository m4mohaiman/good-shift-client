import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout.jsx";
import Home from "../pages/Home/Home/Home.jsx";
import AuthLayout from "../layout/AuthLayout.jsx";
import Login from "../pages/Auth/Login/Login.jsx";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    },
    {
        path: '/',
        Component: AuthLayout,
        children: [
            {
                path: 'login',
                Component: Login
            }
        ]
    }
]);
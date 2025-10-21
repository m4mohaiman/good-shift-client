import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout.jsx";
import Home from "../pages/Home/Home/Home.jsx";

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
    }
]);
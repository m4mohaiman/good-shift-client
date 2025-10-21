import React from 'react'
import {Outlet} from "react-router";
import Navbar from "../pages/shared/Navbar/Navbar.jsx";
import Footer from "../pages/shared/Footer/Footer.jsx";

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}
export default RootLayout

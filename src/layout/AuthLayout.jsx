import React from 'react'
import {Outlet} from "react-router";
import authImage from "../assets/authImage.png"
import GoodShiftLogo from "../pages/shared/GoodShiftLogo/GoodShiftLogo.jsx";

const AuthLayout = () => {
    return (<div className="p-12 bg-base-200">
            <GoodShiftLogo/>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex-1">
                    <img
                        src={authImage}
                        className="max-w-sm rounded-lg shadow-2xl"
                        alt="image"
                    />
                </div>

                <div className="flex-1">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>)
}
export default AuthLayout

import React from 'react'
import {FaTruck} from "react-icons/fa";
import {CiDeliveryTruck} from "react-icons/ci";
import {BsCashCoin} from "react-icons/bs";
import {SiHubspot} from "react-icons/si";
import {HiOutlineBuildingOffice} from "react-icons/hi2";

const howItWorks = [
    {
        title: "Booking Pick & Drop",
        description: "From personal packages to business shipments — we deliver on time, every time.",
        icon: <CiDeliveryTruck />,
    }, {
        title: "Cash On Delivery",
        description: "From personal packages to business shipments — we deliver on time, every time.",
        icon: <BsCashCoin />,
    },
    {
        title: "Delivery Hub",
        description: "From personal packages to business shipments — we deliver on time, every time.",
        icon: <SiHubspot />,
    },
    {
        title: "Booking SME & Corporate",
        description: "From personal packages to business shipments — we deliver on time, every time.",
        icon: <HiOutlineBuildingOffice />,
    },
]

const HowItWorks = () => {
    return (
        <section id="howItWorks" className="py-16 mt-5">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-4 text-[#03373D]">How it Works</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 ">
                {howItWorks.map((howItWork, index) => (
                    <div key={index} className="flex flex-col bg-[#ffffff]/70 p-5 rounded-3xl">
                        <div className="mb-5 text-[#03373D] text-4xl">
                            {howItWork.icon}
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-[#03373D] mb-2">{howItWork.title}</h3>
                            <p className="text-base text-[#606060]">{howItWork.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default HowItWorks

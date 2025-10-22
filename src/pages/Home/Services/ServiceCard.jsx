import React from 'react'

const ServiceCard = ({ service }) => {
    const { icon , title, description } = service;
    return (
        <div className="card bg-[#FFFFFF] hover:bg-[#CAEB66] transition-shadow duration-300">
            <div className="card-body items-center text-center p-6">
                <div className="text-[#f1c40f] text-5xl mb-3">{icon}</div>
                <h3 className="card-title text-lg font-semibold">{title}</h3>
                <p className="text-sm text-gray-500 mt-2">{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard
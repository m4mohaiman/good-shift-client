import React from 'react'

const ServiceCard = ({ service }) => {
    const { icon , title, description } = service;
    return (
        <div className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300 border border-base-200">
            <div className="card-body items-center text-center p-6">
                <div className="text-primary text-5xl mb-3">{icon}</div>
                <h3 className="card-title text-lg font-semibold">{title}</h3>
                <p className="text-sm text-gray-500 mt-2">{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;

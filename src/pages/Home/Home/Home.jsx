import React from 'react'
import Banner from "../Banner/Banner.jsx";
import ServicesSection from "../Services/ServicesSection.jsx";
import HowItWorks from "../HowItWorks/HowItWorks.jsx";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <ServicesSection></ServicesSection>
        </div>
    )
}
export default Home

import React from 'react'
import Banner from "../Banner/Banner.jsx";
import ServicesSection from "../Services/ServicesSection.jsx";
import HowItWorks from "../HowItWorks/HowItWorks.jsx";
import BecomeMerchant from "../BecomeMerchant/BecomeMerchant.jsx";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <ServicesSection></ServicesSection>
            <BecomeMerchant></BecomeMerchant>
        </div>
    )
}
export default Home

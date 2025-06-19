import React from 'react'
import Header from './Header'
import Herosection from './Herosection';
import Features from './Features';
import FeaturedProducts from './FeaturedProducts';
import Banner from './Banner';
import NewArrivals from './NewArrivals';
import NewsletterSignup from './NewsletterSignup';
import Footer from './Footer';

function Homepage() {
    return (
        <div>
            <Header />
            <Herosection />
            <Features />
            <FeaturedProducts />
            <Banner />
            <NewArrivals />
            <NewsletterSignup />
            <Footer />
        </div>
    )
}

export default Homepage

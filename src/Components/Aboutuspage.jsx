import React from 'react';
import Header from './Header';
import Features from './Features';
import NewsletterSignup from './NewsletterSignup';
import Footer from './Footer';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../Css/about.css';

function Aboutuspage() {
    return (
        <div>
            <Header />
            <div className='about_header'>
                <Container fluid='lg' className="py-5 px-4 px-lg-0">
                    <Row className="py-5 align-items-center">
                        <Col className="text-center mt-4 mt-md-0">
                            <h1 className="display-4 display-sm-4 fw-light text-white">
                                #KnowUs
                            </h1>
                            <p className="text-secondary fs-5 fw-light mb-3 text-white">Our journey, your trust.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='about_section pt-5 mt-5'>
                <Container className="my-5">
                    <Row className="align-items-center mb-5 pb-5">
                        {/* Image & Date Section */}
                        <Col md={6} className="mb-4 mb-md-0">
                            <Card.Img variant="top" src={require('../assests/a6.d7b04c72a1826924a32f.jpg')} className="rounded-4" />
                        </Col>
                        {/* Text Content */}
                        <Col md={6}>
                            <h1 className="fw-light mb-3">WHO WE ARE?</h1>
                            <p className="text-muted mb-4 lh-base">
                                At Cara, we are passionate about bringing you the latest trends in fashion with a focus on quality, comfort, and sustainability. Founded with a vision to make fashion accessible and enjoyable, we curate a wide range of stylish apparel and accessories to suit every personality and occasion. Our team is dedicated to creating a seamless shopping experience, blending aesthetics with functionality. Whether you're updating your wardrobe or searching for that perfect outfit, Cara is here to help you express yourself with confidence and flair.
                            </p>
                            <span>Enjoy a seamless shopping experience with the flexibility to explore freely or search with precision.</span>
                            <marquee className="mt-4">
                                ✨ New Arrivals Just Dropped! Explore the latest styles and elevate your wardrobe today! 🛍️
                            </marquee>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Features />
            <NewsletterSignup />
            <Footer />
        </div >
    )
}

export default Aboutuspage

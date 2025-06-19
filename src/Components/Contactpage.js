import React from 'react';
import Header from './Header';
import Features from './Features';
import NewsletterSignup from './NewsletterSignup';
import Footer from './Footer';
import { Container, Row, Col } from 'react-bootstrap';
import '../Css/contact.css';
import { GeoAltFill, EnvelopeFill, TelephoneFill, ClockFill } from 'react-bootstrap-icons';
import Contactform from './Contactform';

function Contactpage() {
    return (
        <div>
            <Header />
            <div className='about_header'>
                <Container fluid='lg' className="py-5 px-4 px-lg-0">
                    <Row className="py-5 align-items-center">
                        <Col className="text-center mt-4 mt-md-0">
                            <h1 className="display-4 display-sm-4 fw-light text-white">
                                #Contact Us
                            </h1>
                            <p className="text-secondary fs-5 fw-light mb-3 text-white">Our journey, your trust.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='contact_section'>
                <Container className="my-5">
                    <Row className="align-items-start">
                        {/* Contact Info */}
                        <Col lg={6} className="mb-4">
                            <p className="text-uppercase text-muted mb-2 fs-6">Get In Touch</p>
                            <h2 className="mb-3 fw-light" style={{ fontWeight: 400 }}>
                                Visit one of our agency locations or<br /> contact us today
                            </h2>
                            <h5 className="mb-3">Head Office</h5>

                            <p className='fw-light'>
                                <GeoAltFill className="me-2 text-secondary" />
                                Shop No.1, Ground Floor, Satya-2,<br />
                                Next to Bharat Petrol Pump,<br />
                                Opp. Ranna Park Bus Stop, Ghatlodia,<br />
                                Ahmedabad-380061
                            </p>

                            <p className='fw-light'>
                                <EnvelopeFill className="me-2 text-secondary" />
                                info@cara.com
                            </p>

                            <p className='fw-light'>
                                <TelephoneFill className="me-2 text-secondary" />
                                +91-7984832590
                            </p>

                            <p className='fw-light'>
                                <ClockFill className="me-2 text-secondary" />
                                Mon-Fri : 10 am to 6 pm
                            </p>
                        </Col>

                        {/* Map */}
                        <Col lg={6}>
                            <div className="ratio ratio-16x9">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.437147800925!2d72.56243917472693!3d23.007385216298096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f3d991c74b%3A0xf5c6c384987ba1cb!2sSATYA%20TWO!5e0!3m2!1sen!2sin!4v1718800000000!5m2!1sen!2sin"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    title="Google Map"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Contactform />
            <Features />
            <NewsletterSignup />
            <Footer />
        </div>
    )
}

export default Contactpage

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaPinterest,
    FaYoutube,
} from 'react-icons/fa';
import '../Css/footer.css';
import appStore from '../assests/download.jpg';
import playStore from '../assests/download (1).jpg';
import cards from '../assests/pay.47ad3e696f50516da1b3.png';

const Footer = () => {
    return (
        <footer className="footer pt-5 pb-3">
            <Container>
                <Row className="gy-4">
                    <Col md={3}>
                        <img src={require('../assests/download.png')} alt='Logo' className='mb-4' />
                        <h6 className="fw-light mb-3 mt-2">Contact</h6>
                        <p className='mb-2 fw-light'>
                            <strong>Address:</strong> Shop No.1, Ground Floor, Satya-2, Next
                            to Bharat Petrol Pump, Opp. Ranna Park Bus Stop, Ghatlodia,
                            Ahmedabad-380061
                        </p>
                        <p className='mb-2 fw-light'>
                            <strong>Phone:</strong> (+91) 01234 56789
                        </p>
                        <p className='mb-2 fw-light'>
                            <strong>Hours:</strong> 10:00 - 18:00, Mon - Sat
                        </p>
                        <h6 className="fw-light mt-3 mb-3">Follow Us</h6>
                        <div className="d-flex gap-3 fs-5">
                            <FaFacebookF />
                            <FaInstagram />
                            <FaTwitter />
                            <FaPinterest />
                            <FaYoutube />
                        </div>
                    </Col>

                    <Col md={3} className='footer_links pt-4'>
                        <h6 className="fw-medium mb-4">About</h6>
                        <ul className="list-unstyled">
                            <li>About Us</li>
                            <li>Delivery Information</li>
                            <li>Privacy Policy</li>
                            <li>Terms and Conditions</li>
                            <li>Contact Us</li>
                        </ul>
                    </Col>

                    <Col md={3} className='footer_links pt-4'>
                        <h6 className="fw-medium mb-4">Account</h6>
                        <ul className="list-unstyled">
                            <li>Sign In</li>
                            <li>View Cart</li>
                            <li>My Wishlist</li>
                            <li>Track My Order</li>
                            <li>Help</li>
                        </ul>
                    </Col>

                    <Col md={3} className='footer_links pt-4'>
                        <h6 className="fw-medium mb-4">Install App</h6>
                        <p>From App Store or Play Store</p>
                        <div className="d-flex flex-column gap-2 mb-3">
                            <img src={appStore} alt="App Store" width="150" className='bg-transparent' />
                            <img src={playStore} alt="Play Store" width="150" className='bg-transparent' />
                        </div>
                        <p>Secured Payment Gateways</p>
                        <div className="d-flex gap-2">
                            <img src={cards} alt="Visa" />
                        </div>
                    </Col>
                </Row>

                <hr className="my-4" />
                <p className="text-center mb-0 small text-muted">
                    © 2025 Copyright Reserved / Cara
                </p>
            </Container>
        </footer>
    );
};

export default Footer;

import React from 'react';
import Header from './Header'
// import FeaturedProducts from './FeaturedProducts';
// import NewArrivals from './NewArrivals';
import NewsletterSignup from './NewsletterSignup';
import Footer from './Footer';
import { Container, Row, Col } from 'react-bootstrap';
import '../Css/shopheader.css';
import ShopProducts from './ShopProducts';

function Shoppage() {
    return (
        <div>
            <Header />
            <div className='shop_header'>
                <Container fluid='lg' className="py-5 px-4 px-lg-0">
                    <Row className="py-5 align-items-center">
                        <Col className="text-center mt-4 mt-md-0">
                            <h1 className="display-4 display-sm-4 fw-light text-white">
                                #stayhome
                            </h1>
                            <p className="text-secondary fs-5 fw-light mb-3 text-white">Save more with coupons & up to 70% off!</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* <NewArrivals /> */}
            {/* <FeaturedProducts /> */}
            <ShopProducts />
            <NewsletterSignup />
            <Footer />
        </div>
    )
}

export default Shoppage

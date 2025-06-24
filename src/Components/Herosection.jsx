import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Css/herosection.css';
import { NavLink } from 'react-router-dom';

function Herosection() {
    return (
        <div className='hero-section py-5'>
            <div className='py-5'>
                <Container fluid='lg' className="py-5 px-4 px-lg-0">
                    <Row className="py-5 align-items-center flex-column-reverse flex-md-row">
                        <Col md={6} className="text-center text-sm-start mt-4 mt-md-0">
                            <p className="fs-3 fw-light">Trade-in-offer</p>
                            <h1 className="display-4 display-sm-4 fw-light">
                                Super value deals <br />
                                <span className="text-primary">On all products</span>
                            </h1>
                            <p className="text-secondary fs-5 fw-light mb-4">Save more with coupons & up to 70% off!</p>
                            <NavLink className="shop-now-btn px-4 py-3" to='/shop'>Shop Now</NavLink>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Herosection

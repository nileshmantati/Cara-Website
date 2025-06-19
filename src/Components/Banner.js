import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../Css/Banner.css'; // For custom styles

function Banner() {
    return (
        <div className="banner py-5 my-5 text-white d-flex align-items-center">
            <Container>
                <Row className="align-items-center justify-content-center">
                    <Col md={8} className="text-center">
                        <p className="mb-2 fs-5">Repair Services</p>
                        <h2 className="fw-light display-6">
                            Up to <span className="text-danger fw-bold">70% Off</span> - All T-Shirts & Accessories
                        </h2>
                        <Button className="mt-3 px-4 py-2 fw-medium border-0">Explore More</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Banner

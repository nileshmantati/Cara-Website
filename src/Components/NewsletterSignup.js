import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../Css/newsletter.css'; // custom styles

const NewsletterSignup = () => {
    return (
        <section className="newsletter-section d-flex align-items-center">
            <Container>
                <Row className="py-3 align-items-center gy-3 justify-content-between">
                    <Col md={5} className="text-white text-center text-md-start">
                        <h4 className="fw-bold fs-3">Sign Up For Newsletters</h4>
                        <p className="mb-0">
                            Get E-Mail Updates about our latest shop and{' '}
                            <span className="text-warning fw-semibold">Special Offers</span>
                        </p>
                    </Col>
                    <Col md={6}>
                        <Form className="d-flex justify-content-center justify-content-md-end">
                            <Form.Control
                                type="email"
                                placeholder="Your Email Address"
                                className="rounded-start px-3 py-md-3"
                                required
                            />
                            <Button variant="teal" className="rounded-end px-4 py-md-3 text-nowrap">
                                Sign Up
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default NewsletterSignup;

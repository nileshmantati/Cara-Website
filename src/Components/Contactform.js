import React from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import '../Css/contact.css';

const Contactform = () => {
    const team = [
        {
            name: 'John Doe',
            role: 'Senior Marketing Manager',
            phone: '+91-9123456780',
            email: 'john.doe@company.com',
            img: 'https://randomuser.me/api/portraits/men/45.jpg'
        },
        {
            name: 'William Smith',
            role: 'Senior Marketing Manager',
            phone: '+91-9876543210',
            email: 'william.smith@brandmail.com',
            img: 'https://randomuser.me/api/portraits/men/46.jpg'
        },
        {
            name: 'Honey Slavia',
            role: 'Senior Marketing Manager',
            phone: '+91-9001234567',
            email: 'honey@trendmail.in',
            img: 'https://randomuser.me/api/portraits/women/47.jpg'
        }
    ];
    return (
        <div className='contactform_section px-4'>
            <Container fluid className="my-5 border-1 border py-3 py-md-5 p-md-5 rounded-3 overflow-hidden">
                <Row>
                    {/* Form Section */}
                    <Col md={7}>
                        <h6 className="fw-light text-uppercase">Leave a message</h6>
                        <h2 className="fw-light mb-4">We love to hear from you!!</h2>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Your Name" required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="email" placeholder="Email Address" required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Subject" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control as="textarea" rows={6} placeholder="Description" />
                            </Form.Group>
                            <Button className="px-4">
                                Submit
                            </Button>
                        </Form>
                    </Col>

                    {/* Team Contact Info */}
                    <Col md={5} className="mt-4 mt-md-0 ps-md-5">
                        {team.map((member, index) => (
                            <div key={index} className="d-flex align-items-start mb-4">
                                <Image src={member.img} roundedCircle width="60" className="me-3" />
                                <div>
                                    <h5 className="mb-1">{member.name}</h5>
                                    <p className="mb-1">{member.role}</p>
                                    <p className="mb-1">Phone: {member.phone}</p>
                                    <p className="mb-0">Email: {member.email}</p>
                                </div>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contactform

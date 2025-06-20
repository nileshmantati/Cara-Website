import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import f1 from '../assests/f1.2570c5d9b63b8b82eee2.png';
import f2 from '../assests/f2.209743eb77f3524de15d.png';
import f3 from '../assests/f3.c2387adbe683a4d5463e.png';
import f4 from '../assests/f4.ad9a7e8f300f1b06e476.png';
import f5 from '../assests/f5.7390d944821d42b5d0c4.png';
import f6 from '../assests/f6.411f54a7c986bd31bc8e.png';

function Features() {
    const services = [
        {
            title: 'Free Shipping',
            color: 'pink',
            img: f1,
        },
        {
            title: 'Online Order',
            color: 'lightgreen',
            img: f2,
        },
        {
            title: 'Save Money',
            color: 'lightblue',
            img: f3,
        },
        {
            title: 'Promotions',
            color: '#cfd9ff',
            img: f4,
        },
        {
            title: 'Happy Sell',
            color: '#f1d7f5',
            img: f5,
        },
        {
            title: '24/7 Support',
            color: '#fdeac9',
            img: f6,
        },
    ];
    return (
        <div>
            <Container className="py-5">
                <Row className="g-4 justify-content-center">
                    {services.map((service, idx) => (
                        <Col key={idx} xs={12} sm={6} md={4} lg={2}>
                            <Card className="text-center service-card h-100 border-light shadow-sm">
                                <Card.Body>
                                    <img
                                        src={service.img}
                                        alt={service.title}
                                        className="img-fluid mb-3"
                                        style={{ height: '100px' }}
                                    />
                                    <div
                                        className="fw-semibold py-1 px-2 rounded"
                                        style={{
                                            backgroundColor: service.color,
                                            display: 'inline-block',
                                            fontSize: '0.95rem',
                                        }}
                                    >
                                        {service.title}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Features

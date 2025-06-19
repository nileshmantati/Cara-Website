import React from 'react';
import Header from './Header';
import NewsletterSignup from './NewsletterSignup';
import Footer from './Footer';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../Css/blog.css';
import blogImg1 from '../assests/blogImg1.jpg';
import blogImg2 from '../assests/blogImg2.jpg';
import blogImg3 from '../assests/blogImg3.jpg';
import blogImg4 from '../assests/blogImg44.jpg';

function Blogpage() {
    const blogs = [{
        img: blogImg1,
        date: "10/04",
        title: "Inside the Style World of Blair Eadie",
        desc: "Blair Eadie of Atlantic-Pacific blends bold trends with timeless style, partnering with top brands and sharing fashion tips with her 1.9M followers."
    },
    {
        img: blogImg2,
        date: "08/04",
        title: "Style Without Age by Ashleigh Hutchinson",
        desc: "Ashleigh Hutchinson of The Daileigh empowers women of all ages to embrace personal style confidently, proving that fashion truly has no age limit."
    },
    {
        img: blogImg3,
        date: "05/04",
        title: "The Comeback of Denim in Daily Wear",
        desc: "Denim is back and bolder than ever! Here's how to incorporate it into your everyday outfits with a modern twist.."
    },
    {
        img: blogImg4,
        date: "03/04",
        title: "How to Layer Like a Pro This Season",
        desc: "Master the art of layering without sacrificing comfort or style. These tips will keep you warm and fashionable."
    },
    {
        img: blogImg2,
        date: "02/04",
        title: "ISustainable Fashion: Brands to Watch",
        desc: "These eco-conscious brands are changing the fashion industry for the better. Check out our top picks for sustainable style."
    },
    {
        img: blogImg1,
        date: "01/04",
        title: "Color Trends of the Year: What’s Hot?",
        desc: "From bold reds to earthy tones, we break down the color palettes taking over 2025 fashion and how you can wear them."
    }
    ];
    return (
        <div>
            <Header />
            <div className='blog_header'>
                <Container fluid='lg' className="py-5 px-4 px-lg-0">
                    <Row className="py-5 align-items-center">
                        <Col className="text-center mt-4 mt-md-0">
                            <h1 className="display-4 display-sm-4 fw-light text-white">
                                #readmore
                            </h1>
                            <p className="text-secondary fs-5 fw-light mb-3 text-white">Read all case studies about our products!</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='blog_section py-5 mt-5'>
                <Container className="my-5">
                    {blogs.map((item, idx) => (
                        <Row className="align-items-center mb-5 pb-5">
                            {/* Image & Date Section */}
                            <Col md={6} className="position-relative mb-4 mb-md-0 px-5">
                                <div className="date-overlay">{item.date}</div>
                                <Card.Img variant="top" src={item.img} className="p-3 rounded-4" />
                            </Col>
                            {/* Text Content */}
                            <Col md={6}>
                                <h4 className="fw-light mb-3">{item.title}</h4>
                                <p className="text-muted mb-4 lh-base">
                                    {item.desc}
                                </p>
                                <Button variant="link" className="text-dark fw-bold p-0">
                                    CONTINUE READING <span className="ms-2">━</span>
                                </Button>
                            </Col>
                        </Row>
                    ))}
                </Container>
            </div>
            <NewsletterSignup />
            <Footer />
        </div >
    )
}

export default Blogpage

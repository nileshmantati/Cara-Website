import React, { useState, useEffect } from 'react';
import { useCart } from '../Context/CartContext';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BsCart3 } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/FeaturedProducts.css';

const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);
    const { addToCart } = useCart();

    useEffect(() => {
        // setLoading(true);
        axios.get(`https://dummyjson.com/products`)
            .then((response) => {
                setProducts(response.data.products);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                // setLoading(false);
            });
    }, []);
    return (
        <section className="feature_section py-5 text-center">
            <Container>
                <h2 className="fw-light display-3">Featured Products</h2>
                <p className="fw-light fs-5">Summer Collection New Modern Designs</p>
                <Row className="g-4 pt-4">
                    {products.map((item, idx) => (
                        <Col lg={3} md={4} sm={6} xs={12} key={idx}>
                            <Card className="product-card h-100 border-1 shadow-sm rounded-4 p-2 ">
                                <Link
                                    to={`/products/${item.id}`}
                                    style={{ textDecoration: "none", color: "inherit" }}
                                >
                                    <Card.Img variant="top" src={item.thumbnail} className="p-3 rounded-4" />
                                </Link>
                                <Card.Body className="text-start">
                                    <p className="text-muted mb-1 fw-semibold">{item.brand}</p>
                                    <Link
                                        to={`/products/${item.id}`}
                                        style={{ textDecoration: "none", color: "inherit" }}
                                    >
                                        <h5>{item.title}</h5>
                                    </Link>
                                    <div className="text-warning mb-2">
                                        {'★'.repeat(item.rating)}
                                    </div>
                                    <h5 className="text-success fw-bold">₹{item.price}</h5>
                                </Card.Body>
                                <div className="position-absolute bottom-0 end-0 m-3">
                                    <Button className="rounded-circle border-0" onClick={() => addToCart(item)}>
                                        <BsCart3 color="#2e856e" />
                                    </Button>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default FeaturedProducts;
// let url;
// if (category == 'category') {
//     url = 'https://api.escuelajs.co/api/v1/products/' + id;
// } else {
//     url = 'https://dummyjson.com/products/' + id;
// }
// console.log(url);
// `https://api.escuelajs.co/api/v1/products/${id}`
// `https://dummyjson.com/products/${id}`

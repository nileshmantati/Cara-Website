import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/header.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useCart } from '../Context/CartContext';
import { NavLink } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import { BsCart3 } from 'react-icons/bs';

const Header = () => {
    const { cart } = useCart();
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

    return (
        <Navbar expand="lg" className="py-3 shadow-sm sticky-top">
            <Container fluid='lg' px-4 px-lg-0>
                <Navbar.Brand href='/about' className="fs-3 fw-bold">
                    <span style={{ fontFamily: 'cursive', color: '#000' }}>
                        <img src={require('../assests/download.png')} alt='Logo' />
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="align-items-center gap-lg-4 gap-3">
                        <NavLink to="/" className="fw-medium">Home</NavLink>
                        <NavLink to="/shop" className="fw-medium">Shop</NavLink>
                        <NavLink to="/blog" className="fw-medium">Blog</NavLink>
                        <NavLink to="/about" className="fw-medium">About</NavLink>
                        <NavLink to="/contact" className="fw-medium">Contact Us</NavLink>
                        {/* <NavLink to="/cart" className="fw-medium"><i className="bi bi-cart me-2"></i></NavLink> */}
                        <NavLink to="/cart" className="btn btn-outline-dark position-relative d-flex align-items-center">
                            <BsCart3 size={20} className="me-1" />
                            Cart
                            {totalQty > 0 && (
                                <Badge
                                    pill
                                    bg="danger"
                                    className="position-absolute top-0 start-100 translate-middle"
                                >
                                    {totalQty}
                                </Badge>
                            )}
                        </NavLink>
                        <NavLink to="/signup" className="fw-medium"><i className="bi bi-person-fill me-2"></i>Sign up / Login</NavLink>
                        {/* <Nav.Link href="#"><i className="bi bi-person"></i> Sign up / Login</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header

import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import Header from './Header';
import '../Css/signup.css';
import { NavLink } from 'react-router-dom';


function SignupForm() {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.password) newErrors.password = "Password is required";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validate();
        if (Object.keys(formErrors).length === 0) {
            alert("Form submitted successfully!");
            // Proceed with backend call
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div>
            <Header />
            <div className='signup_section py-5 px-3 px-lg-0'>
                <Container className="d-flex py-5 flex-column align-items-center border border-2 rounded-3 shadow-sm">
                    <div className='signup_box col-md-5 p-5 bg-white d-flex flex-column align-items-center'>
                        <div className='d-flex flex-column align-items-center'>
                            <img src={require('../assests/download.png')} alt='Logo' className='ms-5 mb-0' />
                            <p class="mb-4 mt-3 fw-medium">"Unlock Your Style"</p>
                        </div>
                        <h5 className="mb-4 fw-light w-100 text-center pb-2">Sign up with e-mail</h5>
                        <Form className="col-12 col-lg-8" onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                {errors.name && <div className="text-danger mt-1">{errors.name}</div>}
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                {errors.password && <div className="text-danger mt-1">{errors.password}</div>}
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <div className="text-danger mt-1">{errors.email}</div>}
                            </Form.Group>
                            <Button type="submit" className="w-100 py-2 bg-primary border-0">Sign Up</Button>
                            <div className="login_link_box mt-4 text-center fw-light fs-5">
                                Already have an account:<NavLink to="/login" className="ms-1">Login</NavLink>
                            </div>
                        </Form>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default SignupForm;
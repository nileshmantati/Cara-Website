import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Container } from "react-bootstrap";
import '../Css/productdetails.css';
import Header from './Header';
import Footer from './Footer';
import FeaturedProducts from "./FeaturedProducts";
import NewsletterSignup from "./NewsletterSignup";


const Productdetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(`https://dummyjson.com/products/${id}`)
            .then((response) => {
                console.log(response.data);
                setProduct(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className="text-center mt-5">Loading...</div>;
    if (!product) return <div className="text-center mt-5">Product not found</div>;

    return (
        <div>
            <Header />
            <div className="product_detail py-5 mb-5">
                <Container className="mt-4">
                    <div className="row">
                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                className="img-fluid rounded col-8"
                            />
                        </div>
                        <div className="col-md-6">
                            <h2 className=" fw-light">{product.title}</h2>
                            <h4>₹{product.price}</h4>
                            <p className="lead">{product.description}</p>
                            <p className="fs-5"><strong className="fw-medium">Brand:</strong> {product.brand}</p>
                            <p className="fs-5"><strong className="fw-medium">Category:</strong> {product.category}</p>
                            <p className="fs-5"><strong className="fw-medium">Rating:</strong> {product.rating} ⭐</p>
                            <button className="btn py-2 px-4 fs-6">Add to Cart</button>
                        </div>
                    </div>
                </Container>
            </div>
            <FeaturedProducts />
            <NewsletterSignup />
            <Footer />
        </div>
    );
}

export default Productdetails;

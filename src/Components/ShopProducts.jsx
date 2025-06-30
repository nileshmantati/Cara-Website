import React, { useEffect, useState } from "react";
import { Container, Col, Card, Button } from 'react-bootstrap';
import { useCart } from '../Context/CartContext';
import { BsCart3 } from 'react-icons/bs';
import axios from "axios";
import '../Css/FeaturedProducts.css';
import { Link } from "react-router-dom";

function ShopProducts() {
    const [products, setProducts] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All Products");
    const [sort, setSort] = useState("");
    const { addToCart } = useCart();

    useEffect(() => {
        axios.get("https://dummyjson.com/products?limit=100").then((res) => {
            setProducts(res.data.products);
            setFiltered(res.data.products);
        });
    }, []);
    useEffect(() => {
        let updated = [...products];

        if (search) {
            updated = updated.filter((p) =>
                p.title.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (category !== "All Products") {
            updated = updated.filter((p) => p.category === category);
        }

        if (sort === "low") {
            updated.sort((a, b) => a.price - b.price);
        } else if (sort === "high") {
            updated.sort((a, b) => b.price - a.price);
        } else if (sort === "rating") {
            updated.sort((a, b) => b.rating - a.rating);
        }

        setFiltered(updated);
    }, [search, category, sort, products]);

    const uniqueCategories = [
        "All Products",
        ...new Set(products.map((p) => p.category)),
    ];
    return (
        <div className="my-5">
            <Container>
                <div className="row">
                    {/* Filters */}
                    <div className="col-md-6 mb-4 w-100">
                        <div className="filter-box p-3 shadow-sm rounded bg-white">
                            <h5 className="mb-3">Filters</h5>
                            <div className="d-flex gap-2">
                                <div>
                                    <label>Search</label>
                                    <input
                                        className="form-control mb-3"
                                        placeholder="Search products..."
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label>Category</label>
                                    <select
                                        className="form-select mb-3"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    >
                                        {uniqueCategories.map((cat, i) => (
                                            <option key={i} value={cat}>
                                                {cat}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label>Sort By</label>
                                    <select
                                        className="form-select"
                                        value={sort}
                                        onChange={(e) => setSort(e.target.value)}
                                    >
                                        <option value="">None</option>
                                        <option value="low">Price: Low to High</option>
                                        <option value="high">Price: High to Low</option>
                                        <option value="rating">Rating</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row ">
                    {/* Products */}
                    <div className="col-md-9 w-100">
                        <h3 className="mb-4">
                            Products{" "}
                            <span className="text-muted">({filtered.length} found)</span>
                        </h3>
                        <div className="row gy-4 ">
                            {filtered.map((item, idx) => (
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
                        </div>
                    </div>
                </div >
            </Container>
        </div >
    )
}

export default ShopProducts

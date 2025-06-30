import React, { useState } from 'react';

import { Container, Table, Button, Form, Image, Alert, Toast, ToastContainer } from 'react-bootstrap';
import { useCart } from '../Context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const { cart, removeFromCart, updateQty } = useCart();
    const [toast, setToast] = useState({ show: false, message: '' });
    const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

    const formatCurrency = (amount) => `₹${amount.toLocaleString('en-IN')}`;

    const handleQtyChange = (id, value) => {
        const qty = parseInt(value);
        if (!isNaN(qty) && qty >= 1) {
            updateQty(id, qty);
        }
    };
    const showToast = (msg) => {
        setToast({ show: true, message: msg });
        setTimeout(() => setToast({ show: false, message: '' }), 3000);
    };

    return (
        <Container className="mt-5 mb-5">
            <h2 className="mb-4 text-center">🛒 Your Shopping Cart</h2>

            {cart.length === 0 ? (
                <Alert variant="info" className="text-center">
                    Your cart is empty. <Link to="/">Go shopping!</Link>
                </Alert>
            ) : (
                <>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr className="text-center">
                                <th>Product</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => (
                                <tr key={item.id} className="align-middle text-center">
                                    <td className="text-start">
                                        <div className="d-flex align-items-center gap-3">
                                            <Image
                                                src={item.thumbnail}
                                                alt={item.title}
                                                width={75}
                                                height={75}
                                                rounded
                                                style={{ objectFit: 'cover' }}
                                            />
                                            <div>{item.title}</div>
                                        </div>
                                    </td>
                                    <td>{formatCurrency(item.price)}</td>
                                    <td style={{ maxWidth: '100px' }}>
                                        <Form.Control
                                            type="number"
                                            min={1}
                                            value={item.qty}
                                            onChange={(e) => handleQtyChange(item.id, e.target.value)}
                                        />
                                    </td>
                                    <td>{formatCurrency(item.price * item.qty)}</td>
                                    <td>
                                        <Button
                                            variant="danger"
                                            size="sm"
                                            onClick={() => {
                                                removeFromCart(item.id);
                                                showToast(`${item.title} removed from cart`);
                                            }}
                                        >
                                            ❌
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                    <div className="d-flex justify-content-end mt-4">
                        <h4>
                            <strong>Grand Total:</strong> {formatCurrency(total)}
                        </h4>
                    </div>

                    <div className="d-flex justify-content-end mt-3">
                        <Button variant="success" size="lg">
                            Proceed to Checkout
                        </Button>
                    </div>
                    <ToastContainer position="bottom-end" className="p-3">
                        <Toast show={toast.show} bg="warning">
                            <Toast.Body>{toast.message}</Toast.Body>
                        </Toast>
                    </ToastContainer>
                </>
            )}
        </Container>
    );
};

export default CartPage;

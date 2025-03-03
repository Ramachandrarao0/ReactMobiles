import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Sidenav from '../Components/Sidenav';


function Cart() {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage when the component mounts
  useEffect(() => {
    try {
      const storedItems = localStorage.getItem('cartItem');
      if (storedItems) {
        setCartItems(JSON.parse(storedItems));
      }
    } catch (error) {
      console.error("Error loading cart items from localStorage", error);
    }
  }, []);

  const removeFromCart = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
    localStorage.setItem('cartItem', JSON.stringify(updatedCart));
  };

  return (
    <Container fluid>
      <Row className="p-0">
        <Sidenav />

        <Col xs={8} sm={9} md={10} lg={10}>
          <h3 className="text-center my-4">Your Cart</h3>
          {cartItems.length === 0 ? (
            <p>Your cart is empty. <Link to="/">Go back to products.</Link></p>
          ) : (
            <Row >
              {cartItems.map((item, index) => (
                <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-3">
                  <div className="d-grid card  p-2">
                    <img src={item.url} alt={item.name} style={{ width: '100%' }} />
                    <p>{item.name}</p>
                    <p>Price: ₹{item.price}</p>
                    <Button variant="danger" size="sm" onClick={() => removeFromCart(item)}> Remove from Cart </Button>
                  </div>
                </Col>
              ))}
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;

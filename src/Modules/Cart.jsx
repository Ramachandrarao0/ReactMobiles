import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, InputGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidenav from "../Components/Sidenav";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage when the component mounts
  useEffect(() => {
    try {
      const storedItems = localStorage.getItem("cartItem");
      if (storedItems) {
        const parsedItems = JSON.parse(storedItems).map((item) => ({
          ...item,
          quantity: item.quantity || 1, // Ensure each item has a quantity of at least 1
        }));
        setCartItems(parsedItems);
      }
    } catch (error) {
      console.error("Error loading cart items from localStorage", error);
    }
  }, []);

  // Remove item from the cart
  const removeFromCart = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
    localStorage.setItem("cartItem", JSON.stringify(updatedCart));
  };

  // Update the quantity of an item
  const updateQuantity = (item, newQuantity) => {
    if (newQuantity < 1) return; // Prevent quantity from going below 1
    const updatedCart = cartItems.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, quantity: newQuantity } : cartItem
    );
    setCartItems(updatedCart);
    localStorage.setItem("cartItem", JSON.stringify(updatedCart));
  };

  // Calculate the total price
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Container fluid>
      <Row className="p-0">
        <Sidenav />

        <Col xs={8} sm={9} md={10} lg={10}>
          <h3 className="text-center my-4">Your Cart</h3>
          {cartItems.length === 0 ? (
            <p>
              Your cart is empty. <Link to="/">Go back to products.</Link>
            </p>
          ) : (
            <>
              <Row>
                {cartItems.map((item, index) => (
                  <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-3 d-grid">
                    <div className="d-grid card  p-2">
                      <img src={item.url} alt={item.name} style={{ margin: "auto", maxHeight: "200px"  }} />
                      <div className="d-grid">
                      <p>{item.name}</p>
                      <p>Price: ₹{item.price}</p>
                      <p>Quantity:</p>
                      <InputGroup size="sm" className="mb-2">
                        <Button variant="outline-secondary" onClick={() => updateQuantity(item, item.quantity - 1)}>
                          -
                        </Button>
                        <FormControl value={item.quantity} readOnly style={{ textAlign: "center" }} />
                        <Button variant="outline-secondary" onClick={() => updateQuantity(item, item.quantity + 1)}>
                          +
                        </Button>
                      </InputGroup>
                      <p>Total: ₹{item.price * item.quantity}</p>
                      <Button variant="danger" size="sm" onClick={() => removeFromCart(item)}>
                        Remove from Cart
                      </Button>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
              <div className="text-center mt-4">
                <h4>Total Price: ₹{calculateTotalPrice()}</h4>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => {
                    setCartItems([]);
                    localStorage.setItem("cartItem", JSON.stringify([]));
                  }}
                >
                  Procced to check out
                </Button>
              </div>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;



// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import Sidenav from '../Components/Sidenav';


// function Cart() {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     try {
//       const storedItems = localStorage.getItem('cartItem');
//       if (storedItems) {
//         setCartItems(JSON.parse(storedItems));
//       }
//     } catch (error) {
//       console.error("Error loading cart items from localStorage", error);
//     }
//   }, []);

//   const removeFromCart = (item) => {
//     const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
//     setCartItems(updatedCart);
//     localStorage.setItem('cartItem', JSON.stringify(updatedCart));
//   };

//   const updateQuntity = (item, newQuntity) => {
//     if (newQuntity < 1) return;
//     const updatedCart =cartItems.map((cartItems))=>
//       cartItem.id === item.id ? { ...cartItem,quantity: newQuntity}
//       : cartItem
//   };
  
//   const calculateTotoalPrice = () => {
//     return cartItem.reduce((total,  item) => total+item.price*item.quantity, 0);
//   };

//   const mergedCartItems = cartItems.reduce((acc, currentItem) =>{
//     const existingItem = acc.find(item => item.id === currentItem.id);
//     if(existingItem){
//       existingItem.quantity += 1;
//     } else {
//       acc.push({...currentItem, quantity : 1});
//     }
//     return acc;
//   }, [])

//   return (
//     <Container fluid>
//       <Row className="p-0">
//         <Sidenav />

//         <Col xs={8} sm={9} md={10} lg={10}>
//           <h3 className="text-center my-4">Your Cart</h3>
//           {cartItems.length === 0 ? (
//             <p>Your cart is empty. <Link to="/">Go back to products.</Link></p>
//           ) : (
//             <Row >
//               {cartItems.map((item, index) => (
//                 <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-3">
//                   <div className="d-grid card  p-2">
//                     <img src={item.url} alt={item.name} style={{ width: '100%' }} />
//                     <p>{item.name}</p>
//                     <p>Price: ₹{item.price}</p>
//                     <Button variant="danger" size="sm" onClick={() => removeFromCart(item)}> Remove from Cart </Button>
//                   </div>
//                 </Col>
//               ))}
//             </Row>
//           )}
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Cart;

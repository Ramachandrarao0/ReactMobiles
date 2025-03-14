import React from 'react';
import { Alert } from "react-bootstrap";
import Sidenav from '../Components/Sidenav';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ZAllData } from '../Data/ZAllData';
import Navbrand from '../Components/Navbrand';
import emptyCartImage from '../Asserts/Photos/emptyCart.png';



function ProductDetails() {
    const { id } = useParams();
    let Details = ZAllData.find((e) => e.id === id);

    const [cart, setCart] = useState([]);
    const [message, setMessage] = useState("");
    console.log("Product Details:", Details);


    useEffect(() => {
        try {
            const storedItems = localStorage.getItem('cartItem');
            if (storedItems) {
                setCart(JSON.parse(storedItems));
            }
        } catch (error) {
            console.error("Error loading cart items from localStorage", error);
        }
    }, []);

    const addCart = () => {
        const product = {
            name: Details.name,
            ram: Details.ram,
            originalPrice: Details.originalPrice,
            discount: Details.discount,
            price: Details.price,
            url: Details.url,
            rating: Details.rating,
            id: Details.id
        };

        const storedCart = localStorage.getItem("cartItem");
        let cart = storedCart ? JSON.parse(storedCart) : [];

        const existingItem = cart.find((item) => item.id === product.id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        setCart(cart);
        localStorage.setItem("cartItem", JSON.stringify(cart));

        setMessage(`${Details.name} added to cart!`);

        setTimeout(() => setMessage(""), 3000);

    };
    if (!Details) {
        return (
            <Container fluid>
                <Row className='p-0'>
                    <Sidenav />
                    <Col xs={8} sm={9} md={10} lg={10}>
                        <div className='bg-dark text-light d-flex justifyContent-between'>
                            {/* <h3>Product Details</h3>  */}
                            <Navbrand />
                            <Link to='/cart'><p style={{ margin: '4px 0 2px 100px' }}>Cart</p></Link></div>
                        <Row className='border align-items-center p-2'>
                            <Col>
                                <div style={{ height: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                    <div style={{ maxWidth: '500px', width: '100%' }}>
                                        <img src={emptyCartImage} alt="Empty Cart" style={{ width: '100%', maxHeight: '300px', objectFit: 'contain', marginBottom: '20px' }} />
                                        <h3>Product not found!</h3>
                                        <p>Looks like the product your searching is not available anymore</p>
                                        <Link to="/dashboard">
                                            <Button variant="danger" size="lg">
                                                Go back to products
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }


    return (
        <Container fluid>
            <Row className='p-0'>
                <Sidenav />

                <Col xs={8} sm={9} md={10} lg={10}>
                    <div className='bg-dark text-light d-flex justifyContent-between'>
                        <Navbrand />
                        <Link to='/cart'><p style={{ margin: '4px 0 2px 100px' }}>Cart</p></Link>
                    </div>

                    {message && (
                        <Alert variant="success" className="position-fixed top-0 end-0 m-3">
                            {message}
                        </Alert>
                    )}

                    <Row className='border align-items-center p-2'>
                        <Col xs={12} sm={6} md={4} lg={4} className='mb-2'>
                            <img src={Details.url} style={{ height: 'auto', justifyContent: 'between', width: '80%', maxWidth: '100%' }} alt={Details.name} />
                        </Col>

                        <Col xs={12} sm={6} md={8} lg={8}>
                            <p><strong>Name: {Details.name}</strong></p>
                            <p><strong>Rating:</strong> {Details.rating} ({Details.reviews} Reviews)</p>
                            <p><strong>RAM:</strong> {Details.ram} / <strong>Storage:</strong> {Details.storage}</p>
                            <p><strong>Expandable Storage:</strong> {Details.expandableStorage}</p>
                            <p><strong>Display Size:</strong> {Details.displaySize} / <strong>Resolution:</strong> {Details.displayResolution} ({Details.displayResolutionType}, {Details.displayType})</p>
                            <p><strong>Rear Camera:</strong> {Details.rearCamera} / <strong>Front Camera:</strong> {Details.frontCamera}</p>
                            <p><strong>Rear Camera Features:</strong> {Details.rearCameraFeatures}</p>
                            <p><strong>Front Camera Features:</strong> {Details.frontCameraFeatures}</p>
                            <p><strong>Battery:</strong> {Details.battery} / <strong>Charging:</strong> {Details.batteryCharging}</p>
                            <p><strong>Processor:</strong> {Details.processor} / <strong>GPU:</strong> {Details.gpu}</p>
                            <p><strong>Weight:</strong> {Details.weight} / <strong>Dimensions:</strong> {Details.dimensions}</p>
                            <p><strong>Warranty:</strong> {Details.warranty}</p>
                            <p><strong>Operating System:</strong> {Details.operatingSystem}</p>
                            <p><strong>NFC:</strong> {Details.nfc ? 'Yes' : 'No'} / <strong>USB Type-C:</strong> {Details.usbTypeC ? 'Yes' : 'No'} / <strong>OTG Compatible:</strong> {Details.otgCompatible ? 'Yes' : 'No'}</p>
                            <p><strong>Offer:</strong> {Details.offer}</p>
                            <br />
                            <p><strong style={{ color: 'blue' }}>Price: ₹{Details.price}</strong> <span style={{ textDecoration: 'line-through', color: 'red' }}>₹{Details.originalPrice}</span> <strong>{Details.discount}% off</strong></p>
                            <button className='btn btn-info' onClick={addCart}>Add to cart</button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default ProductDetails;


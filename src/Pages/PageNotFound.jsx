
import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import Sidenav from '../Components/Sidenav';
import Image from '../Asserts/Photos/404 pageNot Found.png';

const PageNotFound = () => {
  return (
    <div>
      <Container fluid>
        <Row className="p-0">
          <Sidenav />
          
          <Col xs={8} sm={9} md={9} lg={10}>
            <div 
              style={{
                backgroundImage: `url(${Image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                color: 'white',
                position: 'relative'
              }}
            >
              <div 
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  padding: '30px',
                  borderRadius: '10px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
              >
                <h1 style={{ fontSize: '5rem', fontWeight: 'bold' }}>404</h1>
                <p style={{ fontSize: '1.5rem' }}>Oops! Page not found.</p>
                <p style={{ fontSize: '1rem' }}>We can't seem to find the page you're looking for.</p>
                <Button 
                  href="/ReactMobiles" 
                  variant="primary" 
                  size="lg" 
                  style={{
                    marginTop: '20px', 
                    padding: '10px 20px', 
                    fontSize: '1rem',
                    borderRadius: '5px'
                  }}
                >
                  Go to Home
                </Button>
              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default PageNotFound;

import zIndex from '@mui/material/styles/zIndex';
import React, { useState } from 'react';
import { Col, Button, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OffCanves = () => {
  const [showSidebar, setShowSidebar] = useState(false); 

  const handleSidebarToggle = () => setShowSidebar(!showSidebar);

  return (
    <>
      <Offcanvas show={showSidebar} onHide={() => setShowSidebar(false)} placement="start" style={{width:'30vw'}} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className='g-4' style={{ listStyle: 'none', lineHeight: '2', color: 'black', padding: 10 }}>
            <Link to='/dashbord' style={{ textDecoration: 'none', color: 'black' }}><li>Home</li></Link>
            <Link to='/samsung' style={{ textDecoration: 'none', color: 'black' }}><li>Samsung</li></Link>
            <Link to='/apple' style={{ textDecoration: 'none', color: 'black' }}><li>Apple</li></Link>
            <Link to='/iqoo' style={{ textDecoration: 'none', color: 'black' }}><li>Iqoo</li></Link>
            <Link to='/moto' style={{ textDecoration: 'none', color: 'black' }}><li>Moto</li></Link>
            <Link to='/nothing' style={{ textDecoration: 'none', color: 'black' }}><li>Nothing</li></Link>
            <Link to='/onepluse' style={{ textDecoration: 'none', color: 'black' }}><li>OnePluse</li></Link>
            <Link to='/pixel' style={{ textDecoration: 'none', color: 'black' }}><li>Pixel</li></Link>
            <Link to='/realme' style={{ textDecoration: 'none', color: 'black' }}><li>Realme</li></Link>
            <Link to='/vivo' style={{ textDecoration: 'none', color: 'black' }}><li>Vivo</li></Link>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>

      <Col xs={4} sm={3} md={2} lg={2} className="bg-dark text-light d-none d-md-block" style={{ position: 'sticky', top: 0, height: '100vh' }}>
        <ul className='g-4' style={{ listStyle: 'none', lineHeight: '2', color: 'white', padding: 10 }}>
          <Link to='/dashbord' style={{ textDecoration: 'none', color: 'white' }}><li>Home</li></Link>
          <Link to='/samsung' style={{ textDecoration: 'none', color: 'white' }}><li>Samsung</li></Link>
          <Link to='/apple' style={{ textDecoration: 'none', color: 'white' }}><li>Apple</li></Link>
          <Link to='/iqoo' style={{ textDecoration: 'none', color: 'white' }}><li>Iqoo</li></Link>
          <Link to='/moto' style={{ textDecoration: 'none', color: 'white' }}><li>Moto</li></Link>
          <Link to='/nothing' style={{ textDecoration: 'none', color: 'white' }}><li>Nothing</li></Link>
          <Link to='/onepluse' style={{ textDecoration: 'none', color: 'white' }}><li>OnePluse</li></Link>
          <Link to='/pixel' style={{ textDecoration: 'none', color: 'white' }}><li>Pixel</li></Link>
          <Link to='/realme' style={{ textDecoration: 'none', color: 'white' }}><li>Realme</li></Link>
          <Link to='/vivo' style={{ textDecoration: 'none', color: 'white' }}><li>Vivo</li></Link>
        </ul>
        <ul><Link to='/' ><p>SignOut</p></Link> </ul>
      </Col>

      <Button variant="dark"  className="btn btn-dark d-md-none  translate-middle-y" style={{position:'fixed',height:'6%',margin:'auto', top:'28px'}}
        onClick={handleSidebarToggle}
        aria-controls="offcanvas-sidebar"
        aria-expanded={showSidebar}
      >
        {showSidebar ? 'Close' : 'Menu'}
      </Button>
    </>
  );
};

export default OffCanves;

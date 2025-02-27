import React, { useState } from 'react';
import { Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Typography } from '@mui/material';
import navLogo from '../Asserts/Photos/mobileLogo.png'


const Sidenav = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const brandLogos = {
    home: 'bi-house',
    samsung: 'S',
    apple: 'A',
    iqoo: 'I',
    moto: 'M',
    nothing: 'N',
    oneplus: 'O',
    pixel: 'P',
    realme: 'R',
    vivo: 'V',
  };

  return (
    <Col
      xs={isOpen ? 4 : 2}
      sm={isOpen ? 3 : 1}
      md={isOpen ? 2 : 1}
      lg={isOpen ? 2 : 1}
      className={`bg- shadow-sm ${isOpen ? '' : 'text-center'}`}
      style={{ position: 'sticky', top: 0, height: '100vh', transition: 'width 0.3s' }}
    >
      <div className="d-flex flex-column justify-content-between h-100 p-3">
        <Button
          variant="dark"
          onClick={toggleSidebar}
          className="mb-3 align-self-start"
          style={{ border: 'none', boxShadow: 'none' }}
        >
          <i className={`bi ${isOpen ? 'bi-chevron-left' : 'bi-chevron-right'}`}></i>
        </Button>


        <div className="text-center mb-4">
          {isOpen ? (
            // When open, show logo and text
            <div>
              <img src={navLogo} alt="Logo" style={{ maxWidth: '80px' }} />
              <Typography
                variant="h5"
                component="h5"
                className='d-none d-lg-block'
                sx={{
                  fontSize: '1rem',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
                  padding: '10px 20px',
                  background: 'linear-gradient(135deg, #007BFF, #00CFFF)',
                  borderRadius: '5px',
                  color: 'white',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #00CFFF, #007BFF)',
                    transform: 'scale(1.05)',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                MobileVista
              </Typography>
            </div>
          ) : (
            // When collapsed, show abbreviated logo (or small icon)
            <img src={navLogo} alt="Logo" style={{ maxWidth: '30px' }} />

          )}
        </div>

        <ul className="list-unstyled d-flex flex-column gap-3">
          <NavLink to="/dashboard" icon={brandLogos.home} label="Home" isOpen={isOpen} />
          <NavLink to="/samsung" icon={brandLogos.samsung} label="Samsung" isOpen={isOpen} />
          <NavLink to="/apple" icon={brandLogos.apple} label="Apple" isOpen={isOpen} />
          <NavLink to="/iqoo" icon={brandLogos.iqoo} label="Iqoo" isOpen={isOpen} />
          <NavLink to="/moto" icon={brandLogos.moto} label="Moto" isOpen={isOpen} />
          <NavLink to="/nothing" icon={brandLogos.nothing} label="Nothing" isOpen={isOpen} />
          <NavLink to="/onepluse" icon={brandLogos.oneplus} label="OnePlus" isOpen={isOpen} />
          <NavLink to="/pixel" icon={brandLogos.pixel} label="Pixel" isOpen={isOpen} />
          <NavLink to="/realme" icon={brandLogos.realme} label="Realme" isOpen={isOpen} />
          <NavLink to="/vivo" icon={brandLogos.vivo} label="Vivo" isOpen={isOpen} />
          <NavLink to="/cart" icon="bi-cart" label="Cart" isOpen={isOpen} />

        </ul>


        <div className="text-center">
          <Link to="/" className="text-decoration-none text-danger">
            <i className="bi-box-arrow-left me-2"></i>
            {isOpen && <span>Sign Out</span>}
          </Link>
        </div>
      </div>
    </Col>
  );
};


const NavLink = ({ to, icon, label, isOpen }) => {
  return (
    <li>
      <Link to={to} className="text-decoration-none text-dark d-flex align-items-center gap-2 p-2 rounded hover-effect">
        {icon.startsWith('bi-') ? (
          <i className={`bi ${icon}`}></i>
        ) : (
          <div
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              backgroundColor: '#f0f0f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              fontWeight: 'bold',
              color: '#333',
            }}
          >
            {icon}
          </div>
        )}
        {isOpen && <span>{label}</span>}
      </Link>
    </li>
  );
};

export default Sidenav;
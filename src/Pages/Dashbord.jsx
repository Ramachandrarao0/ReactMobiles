import React from 'react'
import { Row,Col, Offcanvas, Container } from 'react-bootstrap'
import ContaintNav from '../Components/ContaintNav'
import OffCanves from '../Components/OffCanvas'
import Sidenav from '../Components/Sidenav'

const Dashbord = () => {
  return (
    <>
    <Container fluid >
    <Row>

        <Sidenav/>       
        <Col xs={8} sm={8} md={10}  className='col-sm-8 text-dark'>
        
        <ContaintNav/>        
        
        </Col>
    </Row>
    </Container>
    
        
    </>
  )
}

export default Dashbord

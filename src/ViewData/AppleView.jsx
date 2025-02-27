import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import { AppleData } from '../Data/AppleData';
import { Link } from 'react-router-dom';
import Sidenav from '../Components/Sidenav';
import ZviewData from './ZviewData';
import Applevideo from '../Asserts/Videos/Apple.mp4'

function AppleView() {
  return (
    <Container fluid>
    <Row className="p-0">
      <Sidenav/>

      <ZviewData
      videoUrl={Applevideo}
        data={AppleData}
        linkTo={'/apple/'}
      />

    </Row>
  </Container>

  )
}

export default AppleView


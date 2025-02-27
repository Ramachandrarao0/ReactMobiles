import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import { RealmeData } from '../Data/RealmeData';
import Sidenav from '../Components/Sidenav';
import ZviewData from './ZviewData';
import RealmeVideo from '../Asserts/Videos/Realme.mp4'

function RealmeView() {
  return (
    <Container fluid>
      <Row className='p-0'>
        <Sidenav />

        <ZviewData
        videoUrl={RealmeVideo}
          data={RealmeData}
          linkTo={`/realme/`}
        />

      </Row>
    </Container>
  )
}

export default RealmeView


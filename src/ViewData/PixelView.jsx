import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import { PixelData } from '../Data/PixelData';
import Sidenav from '../Components/Sidenav';
import ZviewData from './ZviewData';
import PixelVideo from  '../Asserts/Videos/pixel.mp4'

function PixelView() {
  return (
    <Container fluid>
      <Row className='p-0'>
        <Sidenav />

        <ZviewData
        videoUrl={PixelVideo}
          data={PixelData}
          linkTo={`/pixel/`}
        />
      </Row>
    </Container>
  )
}

export default PixelView


import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import { VivoData } from '../Data/VivoData';
import Sidenav from '../Components/Sidenav';
import ZviewData from './ZviewData';
import VivoVideo from '../Asserts/Videos/vivo.mp4'

function VivoView() {
  return (
   <Container fluid>
      <Row className='p-0'>
        <Sidenav/>

        <ZviewData
        videoUrl={VivoVideo}
          data={VivoData}
          linkTo={`/vivo/`}
        />

      </Row>
   </Container>
  )
}

export default VivoView


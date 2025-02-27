import React from 'react'
import {Row, Col, Container} from 'react-bootstrap';
import { NothingData } from '../Data/NotingData';
import Sidenav from '../Components/Sidenav';
import ZviewData from './ZviewData';
import NothinVideo from '../Asserts/Videos/Nothing 2a.mp4'

function NotingView() {
  return (
   <Container fluid>
    <Row className='p-0'>
      <Sidenav/>
      <ZviewData 
      videoUrl={NothinVideo}
        data={NothingData}
        linkTo={`/nothing/`}
      />
    </Row>
   </Container>
  )
}

export default NotingView

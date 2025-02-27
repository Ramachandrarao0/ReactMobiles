import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import { SamsungData } from '../Data/SamsungData';
import Sidenav from '../Components/Sidenav';
import ZviewData from './ZviewData';

function SamsungView() {
  return (
    <Container fluid>
      <Row className='p-0'>
        <Sidenav />

        <ZviewData
        videoUrl={"https://images.samsung.com/is/content/samsung/assets/in/smartphones/galaxy-s25-ultra/buy/01_Color_Group_Online-Exclusive-KV_video_PC.mp4"}
          data={SamsungData}
          linkTo={`/samsung/`}
        />

      </Row>
    </Container>
  )
}

export default SamsungView


import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import { OnePlusData } from '../Data/OnePluseData';
import Sidenav from '../Components/Sidenav';
import ZviewData from './ZviewData';

function OnePluseView() {
  return (
    <Container fluid>
      <Row>
        <Sidenav />

        <ZviewData
        videoUrl={"https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-eu-west-1-prod/cd78a3ba-b2ae-461f-b49c-bc8a41fcd36a/default.jobtemplate.mp4.480.mp4"}
          data={OnePlusData}
          linkTo={`/onepluse/`}
        />
      </Row>
    </Container>
  )
}

export default OnePluseView


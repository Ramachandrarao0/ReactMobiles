import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import ZviewData from "./ZviewData";
import Sidenav from '../Components/Sidenav';
import { NewMotoData } from "../Data/NewMotoData";
import Motorala from '../Asserts/Videos/Motorola.mp4'


function Motoview() {
  return (
    <Container fluid>
    <Row className="p-0">
      <Sidenav/>

      <ZviewData
      videoUrl={Motorala}
        data={NewMotoData}
        linkTo={'/moto/'}
      />

    </Row>
  </Container>
  );
}

export default Motoview;

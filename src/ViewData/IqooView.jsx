import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { iqooData } from '../Data/IqooData';
import Sidenav from '../Components/Sidenav';
import ZviewData from './ZviewData';

function IqooView() {
  return (
    <Container fluid>
      <Row className="p-0">
        <Sidenav />


        <ZviewData
        videoUrl={"https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/product/1738142530699/zip/img/iqoo13-tvc-video1-lg.webm"}
          data={iqooData}
          linkTo={`/iqoo/`}
        />

      </Row>
    </Container>


  );
}

export default IqooView;


// <Col xs={8} sm={9} md={10} lg={10}>
// <Row className="p-2 " style={{textDecoration:'none'}}>
//   {iqooData.map((e, index) => (
//     <Col xs={12} sm={6} md={4} lg={3}  key={index} className="d-grid mb-3">
//       <div className="d-grid border p-2" style={{ }}>
//         <img src={e.url} style={{ height: '200px', maxWidth:'100%',margin:'auto' }} alt={e.title} />
//         <p><strong>{e.name}</strong></p>
//         <p><b>{e.price}</b> / {e.discount}% off</p>
//         <p><strong>Rating:</strong> {e.rating}</p>
//         <Link to={`/iqoo/${e.id}`} ><p className="btn btn-outline-primary btn-sm">Learn More</p></Link>
//       </div>
//     </Col>
//   ))}
// </Row>
// </Col>

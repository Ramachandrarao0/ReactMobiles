import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ZAllData } from '../Data/ZAllData';



function ZviewData({ data, videoUrl, imgHeight = '240px', width = '22%', seeAllText = 'See All', linkTo }) {
    let MobView = data;
    return (
        <>
            <Col xs={8} sm={9} md={10} lg={10}>
            <video
                    className="d-block w-100"
                    src={videoUrl}
                    alt="First slide"
                    style={{ height: '40vh' }}
                    autoPlay loop  muted
                />
                <Row className="p-1 " style={{ textDecoration: 'none' }}>
                    {MobView.map((e, index) => (
                        <Col xs={12} sm={6} md={4} lg={3} xl={2} key={index} className="d-grid mb-3">
                            <Link to={`${linkTo}${e.id}`} className='d-grid' style={{ textDecoration: 'none', color: 'black' }} >
                                <div className="d-grid border p-2" style={{}}>
                                    <img src={e.url} style={{ height: '200px', maxWidth: '100%', margin: 'auto' }} alt={e.title} />
                                    <p><strong>{e.name}</strong></p>
                                    <p><b>{e.price}</b> / {e.discount}% off</p>
                                    <p><strong>Rating:</strong> {e.rating}</p>
                                    {/* <p className="btn btn-outline-dark btn-sm">Learn More</p> */}
                                </div>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Col>
        </>
    )
}

export default ZviewData

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

function Slice({ data, imgHeight = '240px', seeAllText = 'See All', linkTo }) {
  // let MobSlice = data.slice(0, 4);

  const [cardsToShow, setCardsToShow] = useState(4);

  const updateCardsToShow = () => {
    if (window.innerWidth < 768) {
      setCardsToShow(2);
    } else {
      setCardsToShow(4);
    }
  };

  useEffect(() => {
    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const MobSlice = data.slice(0, cardsToShow);

  return (
    <>
      <Col className='w-100' >
        <Row className="p-2 " style={{ textDecoration: 'none', gap: '5px' }}>
          <div className='d-flex' style={{ gap: '5px' }}>
            {MobSlice.map((e, index) => (
              <div key={index} className="d-grid border p-2" style={{
                flex: `1 1 calc(${100 / cardsToShow}% - 10px)`,
                maxWidth: `calc(${100 / cardsToShow}% - 10px)`,
                boxSizing: 'border-box',
              }}>
                <Link to={`${linkTo}/${e.id}`} className='d-grid' style={{ textDecoration: 'none', color: 'black' }} >
                  <img src={e.url} style={{ height: imgHeight, maxWidth: '100%', margin: 'auto' }} alt={e.name} />
                  <p>{e.name}</p>
                  <p>{e.title}</p>
                  <p><b>₹{e.price}</b> / <span style={{ textDecoration: 'line-through',  }}>₹{e.originalPrice}</span>/ {e.discount}% off</p>
                  <p><strong className='bg-success  text-light border'>{e.rating} ★</strong>  ({e.reviews} Reviews)</p>                </Link>
              </div>
            ))}
            <Link to={linkTo} className="btn btn-dark align-items-center" style={{  //flex:`1 1 calc(${100 / cardsToShow}% -10px)`, maxWidth:`calc(${100 / cardsToShow}% -10px)`,
              margin: 'auto'
            }}>
              {seeAllText}
            </Link>
          </div>
        </Row>
      </Col>
    </>
  );
}

export default Slice;

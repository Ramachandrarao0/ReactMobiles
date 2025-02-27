import React,  { useState, useEffect } from 'react';
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
    <Row className="p-2 " style={{textDecoration:'none',gap:'5px'}}>
      <div className='d-flex' style={{gap:'5px'}}>
        {MobSlice.map((e, index) => (
          <div key={index} className="d-grid border p-2"  style={{
            flex: `1 1 calc(${100 / cardsToShow}% - 10px)`, 
            maxWidth: `calc(${100 / cardsToShow}% - 10px)`, 
            boxSizing: 'border-box', 
          }}>
              <img src={e.url} style={{ height: imgHeight, maxWidth: '100%', margin:'auto' }} alt={e.name} />
              <p>{e.name}</p>
              <p>{e.title}</p>
              <p><b>{e.price || e.originalPrice}</b> / {e.discount}% off</p>
            </div>
          ))}
        <Link to={linkTo} className="btn btn-dark align-items-center" style={{  //flex:`1 1 calc(${100 / cardsToShow}% -10px)`, maxWidth:`calc(${100 / cardsToShow}% -10px)`,
         margin:'auto'  }}>
          {seeAllText}
        </Link>
          </div>
      </Row>
      </Col>
    </>
  );
}

export default Slice;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Col, Row } from 'react-bootstrap';

// function Slice({ data, imgHeight = '240px', seeAllText = 'See All', linkTo }) {
//   return (
//     <>
//       <Col className='w-100'>
//         <Row className="p-2" style={{ textDecoration: 'none', gap: '5px' }}>
//           {data.slice(0, 4).map((e, index) => (
//             <Col key={index} xs={4}  md={2}  className="d-grid border p-2">
//               <img src={e.url} style={{ height: imgHeight, maxWidth: '100%', margin: 'auto' }} alt={e.name} />
//               <p>{e.name}</p>
//               <p>{e.title}</p>
//               <p><b>{e.price || e.originalPrice}</b> / {e.discount}% off</p>
//             </Col>
//           ))}
//           <Col xs={6} md={2}  className="d-flex align-items-center justify-content-center">
//             <Link to={linkTo} className="btn btn-dark w-100">
//               {seeAllText}
//             </Link>
//           </Col>
//         </Row>
//       </Col>
//     </>
//   );
// }

// export default Slice;
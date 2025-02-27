import React from 'react'
import { PixelData } from '../../Data/PixelData'
import Slice from './Slice';
import { Link } from 'react-router-dom';

function PixelSlice() {
    return (
        <Slice 
          data={PixelData} 
          imgHeight="240px" 
          width="22%" 
          seeAllText="See All" 
          linkTo= "/pixel"

        />
      );
 }

export default PixelSlice

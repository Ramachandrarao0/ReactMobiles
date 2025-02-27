import React from 'react'
import Slice from './Slice';
import { RealmeData } from '../../Data/RealmeData'

function RelmeSlice() {
    return (
        <Slice 
          data={RealmeData} 
          imgHeight="240px" 
          width="22%" 
          seeAllText="See All" 
          linkTo= "/realme"

        />
      );
  }


export default RelmeSlice

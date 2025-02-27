import React from 'react'
import { Link } from 'react-router-dom'
import Slice from './Slice';
import { NewMotoData } from '../../Data/NewMotoData'

function MotoSlice() {
    return (
        <Slice 
          data={NewMotoData} 
          imgHeight="240px" 
          width="22%" 
          seeAllText="See All"
          linkTo= "/moto"

           
        />
      );
}

export default MotoSlice

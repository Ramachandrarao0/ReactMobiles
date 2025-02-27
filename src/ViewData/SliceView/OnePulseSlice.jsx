import React from 'react'
import { OnePlusData } from '../../Data/OnePluseData';
import Slice from './Slice';

function OnePulseSlice() {
    return (
        <Slice 
          data={OnePlusData} 
          imgHeight="240px" 
          width="22%" 
          seeAllText="See All" 
          linkTo= "/onepluse"

        />
      );
}

export default OnePulseSlice

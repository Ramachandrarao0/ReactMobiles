import React from 'react'
import { iqooData } from '../../Data/IqooData'
import Slice from './Slice';

function IqooSlice() {
    return (
        <Slice 
          data={iqooData} 
          imgHeight="240px" 
          width="22%" 
          seeAllText="See All" 
          linkTo= "/iqoo"

        />
      );
 
}

export default IqooSlice

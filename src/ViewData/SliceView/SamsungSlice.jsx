import React from 'react'
import Slice from './Slice';
import { SamsungData } from '../../Data/SamsungData'

function SamsungSlice() {
    return (
        <Slice 
          data={SamsungData} 
          imgHeight="240px" 
          width="22%" 
          seeAllText="See All" 
          linkTo= "/samsung"

        />
      );
 }
export default SamsungSlice

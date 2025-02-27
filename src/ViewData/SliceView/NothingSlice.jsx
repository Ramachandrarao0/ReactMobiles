import React from 'react'
import { NothingData } from '../../Data/NotingData'
import { CenterFocusStrong } from '@mui/icons-material'
import Slice from './Slice';

function NothingSlice() {
    return (
        <Slice 
          data={NothingData} 
          imgHeight="240px" 
          width="22%" 
          seeAllText="See All" 
          linkTo= "/nothing"

        />
      );
}

export default NothingSlice

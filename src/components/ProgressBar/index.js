import React, { useState } from 'react'
import '../../assets/styles/progressbar.css';
// https://github.com/RavinRau/react-progressbar-fancy
const index = (props) => {
  const {percent} = props;

  return (
    <div>
      <progress 
        className="progress-bar" 
        value={50}
        max={100}/>
      <span className="bar-value">{100}%</span>
    </div>
  )
}

export default index;
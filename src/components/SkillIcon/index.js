import React from 'react'
import '../../assets/styles/skillIcon.css';

const index = (props) => {
  return (
    <div className="skill">
      <img 
        src={props.icon} 
        className='skill-img'
      />
    </div>
  )
}

export default index;
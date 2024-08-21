import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import '../../assets/styles/icon.css';

const Index = ({icon}) => {
  return (
    <div className="icon-box">
        <FontAwesomeIcon 
          className="font-awesome-icon"
          icon={icon} />
    </div>
  )
}

export default Index;
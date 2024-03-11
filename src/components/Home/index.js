import React from 'react'

import '../../assets/styles/home.css';
import '../../assets/styles/text.css';
import Profile from '../../assets/imgs/profile.jpg';

const index = () => {
  return (
    <div className="home">
      <div className="home-intro">
        <div className="home-description">
          <h1>안녕하세요.</h1>
          <h1>FrontEnd 개발자 강재성입니다.</h1>
          <h1><span className="neon-text">Neon Style</span>을 곁들인 개인 포트폴리오 사이트입니다.</h1>
        </div>

        <div className="box">
          <div className="home-profile">
            <img
              src={Profile}
              className="img-profile"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
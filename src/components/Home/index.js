import React from 'react'

import '../../assets/styles/home.css';
import '../../assets/styles/text.css';
import Profile_Main from '../../assets/imgs/profile_main.jpg';
import Line from '../Line'

const index = () => {
  return (
    <div className="home">
      <div className="home-intro">
        <div className="box" style={{width: '30%', height: '60vh'}}>
          <div className="home-profile">
            <img
              src={Profile_Main}
              className="img-profile"
            />
          </div>
        </div>
        <div className="home-description"
             style={{
              width: '70%',
              paddingLeft : '10mm'
             }}>
          <h2>안녕하세요.</h2>
          <h2>FrontEnd 개발자 강재성입니다.</h2>
          <h2><span className="neon-text">Neon Style</span>을 곁들인 개인 포트폴리오 사이트입니다.</h2>
          <h3>Name : 강재성</h3>
          <h3>Age : 1993.10.16</h3>
          <h3>Phone : 010-7511-2386</h3>
          <h3>Address : 부산광역시 사상구</h3>
          <h3>Email : wotjd2386@gmail.com</h3>
        </div>
      </div>
    </div>
  )
}

export default index
import React from 'react';
import Profile_About from '../../assets/imgs/profile_about.jpg';
import '../../assets/styles/about.css';

const index = () => {
  return (
    <div className="about">
      <div style={{
            display: "flex",
            gap: "30px"
           }}>
        <div className="box">
          <div className="home-profile">
            <img
              // src={Profile_About}
              className="img-profile"
            />
          </div>
        </div>
        <div className="about-description">
          <h2>Name : 강재성</h2>
          <h2>Age : 1993.10.16</h2>
          <h2>Phone : 010-7511-2386</h2>
          <h2>Address : 부산광역시 사상구</h2>
          <h2>Email : wotjd386@gmail.com</h2>
        </div>
      </div>
      <div style={{
        marginTop : "30px"
      }}>
        <div className="home-description">
          <h2>프론트엔드 개발에 관심이 많은 개발자 강재성입니다.</h2>
          <h2>컴퓨터공학과를 전공으로 졸업하고 IT 회사에 5년 재직중입니다.</h2>
          <h2><span className="neon-text">웹 기반 EMR개발</span>과 <span className="neon-text">FrontEnd 성능 개선</span>을 담당하는 업무를 수행하고 있습니다.</h2>
        </div>
      </div>
    </div>
  )
}

export default index
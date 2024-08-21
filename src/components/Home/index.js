import React from 'react'

import '../../assets/styles/home.css';
import '../../assets/styles/text.css';
import Profile_Main from '../../assets/imgs/profile_main.jpg';

import Icon from '../Icon';
import {
  faHouse,
  faBusinessTime,
  faCode,
  faPenToSquare
} from "@fortawesome/free-solid-svg-icons";

const index = () => {
  return (
    <div className="home">
      <div className="home-intro">
        <div className="box" 
             style={{
              width: '400px', 
              height: '70vh'
        }}>
          <div className="home-profile">
            <img
              src={Profile_Main}
              className="img-profile"
            />
          </div>
        </div>
        <div className="home-description"
             style={{
              width: '800px',
              paddingLeft : '50px',
              gap: '30px'
        }}>
          <div>
            <h1 style={{
              width: "100%"
            }}>
              <span className="neon-text">Intro</span>
            </h1>
            <h3>안녕하세요. FrontEnd를 좋아하는 WEB 개발자 강재성입니다.</h3>
            <h3>IT 회사에 5년 재직중이며 Cell리더를 담당하고 있습니다. </h3>
            <h3>웹 기반 EMR 제품 개발과 FrontEnd 성능 개선 업무를 수행하고 있습니다.</h3>
            <h3>항상 어제보다 나은 내일을 만들기 위해 노력하고 성장하는 것이 제 삶의 목표입니다.</h3>
          </div>  
          <div style={{
            display: "flex",
            flexWrap: "wrap"
          }}>
            <h1 style={{
              width: "100%"
            }}>
              <span className="neon-text">Personal Infos</span>
            </h1>

            <h3 style={{
              width : '50%'
            }}>Name : 강재성</h3>
            
            <h3 style={{
              width : '50%'
            }}>Age : 1993.10.16</h3>
            
            <h3 style={{
              width : '50%'
            }}>Phone : 010-7511-2386</h3>
            
            <h3 style={{
              width : '50%'
            }}>Address : 부산광역시 사상구</h3>
            
            <h3 style={{
              width : '50%'
            }}>Email : wotjd2386@gmail.com</h3>
          </div>
          <div style={{
                display: "flex", 
                justifyContent: "center", 
                gap: "50px"
          }}>
            <Icon icon={faHouse} />
            <Icon icon={faBusinessTime} />
            <Icon icon={faCode} />
            <Icon icon={faPenToSquare} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
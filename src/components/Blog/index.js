import React from 'react'
import {
  faLink
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip as ReactTooltip } from "react-tooltip";

import '../../assets/styles/blog.css';
import NaverBlogLogo from '../../assets/imgs/naver_blog_logo.png';
import WordpressLogo from '../../assets/imgs/wordpress_logo.png';
import TistoryLogo from '../../assets/imgs/tistory_logo.png';

const index = () => {
  return (
    <div className="blog">
      <div className="box">
        <div style={{display: "flex",
            padding: "10px"}}>
          <div>
            <img
              src={NaverBlogLogo}
              style={{width: "200px", height: "200px"}}
              // className="img-profile"
            />
          </div>
          <div>
            <p>asdfsadf</p>
            <p>asdfsadf</p>
            <p>asdfsadf</p>
            <p>asdfsadf</p>
            <p>asdfsadf</p>
            <p>asdfsadf</p>
          </div>
        </div>
      </div>
      <div className="box">
        <div style={{display: "flex",
            padding: "10px"}}>
          <div>
            <img
              src={WordpressLogo}
              style={{width: "200px", height: "200px"}}
              // className="img-profile"
            />
          </div>
          <div>
            <p>asdfsadf</p>
            <p>asdfsadf</p>
            <p>asdfsadf</p>
            <p>asdfsadf</p>
            <p>asdfsadf</p>
            <p>asdfsadf</p>
          </div>
        </div>
      </div>

      {/* <div 
        style={{padding: "10px 0px 10px 0px"}}
      /> */}
{/* https://www.npmjs.com/package/react-tooltip */}
      <div className="box">
        <div style={{
            display: "flex",
            padding: "20px",
            gap: "20px"
            }}>
          <div>
            <img
              src={TistoryLogo}
              style={{width: "200px", height: "200px"}}
              // className="img-profile"
            />
          </div>
          <div style={{color: "#FFF"}}>
            <h1>
              Tistory
            </h1>
            <ul style={{
              listStylePosition: "inside"
            }}>
              <li>운영 기간 : 2020-05-03 ~ 2023-09-22</li>
              <li>누적 방문수 : 300만 이상</li>
              <li>포스팅 수 : 787개</li>
              <li>취업 후 이때까지 배운 지식들을 기록하기 위해 시작한 블로그입니다.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
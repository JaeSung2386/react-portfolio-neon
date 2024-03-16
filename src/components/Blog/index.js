import React from 'react'
import {
  faLink
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../../assets/styles/blog.css';
import NaverBlogLogo from '../../assets/imgs/naver_blog_logo.png';
import WordpressLogo from '../../assets/imgs/wordpress_logo.png';
import TistoryLogo from '../../assets/imgs/tistory_logo.png';

const index = () => {
  return (
    <div className="blog">
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
              style={{ width: "150px", height: "150px" }}
            />
          </div>
          <div style={{
            color: "#fff",
            display: "flex",
            flexDirection: "column"
          }}>
            <h1>
              Tistory
            </h1>
            <div style={{
              height: "100%"
            }}>
              <p style={{ color: "#666", padding: "10px 0px 10px 0px" }}>2020-05 ~ 2023-09 / 포스팅 수 : 787개 / 누적 방문수 : 300만 명 이상</p>
              <h4 style={{ lineHeight: "1.5" }}>취업 후 이때까지 배운 지식들을 기록하기 위해 시작한 블로그입니다. 주로 C#, Java, JavaScript, React와 관련된 내용을 포스팅합니다. 현재 블로그 운영을 멈춘 상태이지만 일일 4천명 이상 방문하고 있습니다.</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="box">
        <div style={{
          display: "flex",
          padding: "20px",
          gap: "20px"
        }}>
          <div>
            <img
              src={WordpressLogo}
              style={{ width: "150px", height: "150px" }}
            />
          </div>
          <div style={{
            color: "#fff",
            display: "flex",
            flexDirection: "column"
          }}>
            <h1>
              WordPress
            </h1>
            <div style={{
              height: "100%"
            }}>
              <p style={{ color: "#666", padding: "10px 0px 10px 0px" }}>2020-03 ~ 2023-09 / 포스팅 수 : 29개 / 누적 방문수 : 100명 이상</p>
              <h4 style={{ lineHeight: "1.5" }}>AWS를 공부하고 싶어 시작한 블로그입니다. EC2를 활용하여 서버를 구축하였습니다. AWS 맛보기 용으로 시작한 블로그라 현재 운영하지 않습니다.</h4>
            </div>
          </div>
        </div>
      </div>

      {/* <div 
        style={{padding: "10px 0px 10px 0px"}}
      /> */}

      <div className="box">
        <div style={{
          display: "flex",
          padding: "20px",
          gap: "20px"
        }}>
          <div>
            <img
              src={NaverBlogLogo}
              style={{ width: "150px", height: "150px" }}
            />
          </div>
          <div style={{
            color: "#fff",
            display: "flex",
            flexDirection: "column"
          }}>
            <a href="https://github.com/JaeSung2386" target="_blank">
              <h1>
                Naver
              </h1>
            </a>
            <div style={{
              height: "100%",
            }}>
              <p style={{ color: "#666", padding: "10px 0px 10px 0px" }}>2023-02 ~ 현재 / 포스팅 수 : 42개 / 누적 방문수 : 500명 이상</p>
              <h4 style={{ lineHeight: "1.5" }}>독서와 재테크에 관심이 많아 시작한 블로그입니다. 가계부, 주식 일지, 독서 리뷰 위주로 포스팅합니니다.</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
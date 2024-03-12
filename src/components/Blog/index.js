import React from 'react'

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
      <div className="box">
        <div style={{display: "flex",
            padding: "10px"}}>
          <div>
            <img
              src={TistoryLogo}
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
    </div>
  )
}

export default index
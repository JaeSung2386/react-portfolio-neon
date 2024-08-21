import React from 'react';
import ProgressBar from '../ProgressBar';

import ReactIcon from '../../assets/imgs/react.svg';
import JSIcon from '../../assets/imgs/js.svg';
import htmlIcon from '../../assets/imgs/html.svg';
import cssIcon from '../../assets/imgs/css.svg';

import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

import SkillIcon from '../SkillIcon';

import "../../assets/styles/skills.css";

// 목록
// 1. 실무 사용 및 경험
// 2. 개인 스터디 목적

// 차트
// 1. 실무 능력
// 2. 문법 이해
const index = () => {
  return (
    <div>
    <div className="home-description">
      <h1>실무 역량</h1>
    </div>
      <div className="box">
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          padding: "15px"
        }}>
          <div className="box">
            <SkillIcon icon={ReactIcon} />
          </div>
          <div className="box">
            <SkillIcon icon={JSIcon} />
          </div>
          <div className="box">
            <SkillIcon icon={htmlIcon} />
          </div>
          <div className="box">
            <SkillIcon icon={cssIcon} />
          </div>
          <div className="box">
            <SkillIcon icon={cssIcon} />
          </div>
          <div className="box">
            <SkillIcon icon={cssIcon} />
          </div>
          <div className="box">
            <SkillIcon icon={cssIcon} />
          </div>
          <div className="box">
            <SkillIcon icon={cssIcon} />
          </div>
          <div className="box">
            <SkillIcon icon={cssIcon} />
          </div>
          <div className="box">
            <SkillIcon icon={cssIcon} />
          </div>
        </div>
        {/* ProgressBar */}
        <div style={{
          padding: "20px",
          background: "rgba(5, 0, 0, 0.3)",
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }}>
          <div>
            <h3>실무 능력</h3>
            <Progress percent={88} symbolClassName="text-color" />
          </div>
          <div>
            <h3>문법 이해</h3>
            <Progress percent={88} symbolClassName="text-color"/>
          </div>
        </div>
      </div>
    {/* https://codepen.io/kmrdev187/pen/abJYmaB */}
    <div className="home-description">
      <h1>개인 스터디</h1>
    </div>
      <div className="box">
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          padding: "15px"
        }}>
          <div className="box">
            <SkillIcon icon={ReactIcon} />
          </div>
          <div className="box">
            <SkillIcon icon={JSIcon} />
          </div>
          <div className="box">
            <SkillIcon icon={htmlIcon} />
          </div>
          <div className="box">
            <SkillIcon icon={cssIcon} />
          </div>
          <div className="box">
            <SkillIcon icon={cssIcon} />
          </div>
          <div className="box">
            <SkillIcon icon={cssIcon} />
          </div>
          <div className="box">
            <SkillIcon icon={cssIcon} />
          </div>
          <div className="box">
            <SkillIcon icon={cssIcon} />
          </div>
          <div className="box">
            <SkillIcon icon={cssIcon} />
          </div>
          <div className="box">
            <SkillIcon icon={cssIcon} />
          </div>
        </div>
        {/* ProgressBar */}
        <div style={{
          padding: "20px",
          background: "rgba(5, 0, 0, 0.3)",
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }}>
          <div>
            <h3>실무 능력</h3>
            <Progress percent={88} symbolClassName="text-color" />
          </div>
          <div>
            <h3>문법 이해</h3>
            <Progress percent={88} symbolClassName="text-color"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
import React from 'react';
import ProgressBar from '..//ProgressBar';

// 목록
// 1. 실무 사용 및 경험
// 2. 개인 스터디 목적

// 차트
// 1. 실무 능력
// 2. 문법 이해
// 3. 간략 설명
const index = () => {
  return (
    <div>
      <div className="box">
        <h1>실무</h1>
        <p>
          dasf
          dasfdas
          fdas
          dasfdasfdas
          fdasafsd
        </p>
      </div>
{/* https://codepen.io/kmrdev187/pen/abJYmaB */}
      <div className="box">
        <h1>개인 스터디</h1>
        <p>
          dasf
          dasfdas
          fdas
          dasfdasfdas
          fdasafsd
        </p>
        <ProgressBar />
        <ProgressBar />
      </div>
    </div>
  )
}

export default index
import React, { useEffect, useState, useRef } from 'react'

import '../../assets/styles/topScrollBar.css';
// https://www.youtube.com/watch?v=BknFoMND0zk
const Index = () => {
  const scrollBarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const fullHeight = document.body.scrollHeight - window.innerHeight;
      const scroll = window.scrollY;
      const progress = (scroll / fullHeight) * 100;

      if (scrollBarRef) {
        scrollBarRef.current.style.width = `${progress}vw`
      }
    }

    window.addEventListener("scroll", handleScroll);
    
    /*
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
    */
  }, []);

  return (
    <div
      ref={scrollBarRef}
      className="top-bar"
    />
  )
}

export default Index

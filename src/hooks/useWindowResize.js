import { useEffect, useState } from 'react';

export const useWindowResize = () => {
  const windowInnerSize = [window.innerWidth, window.innerHeight];
  const [windowSize, setWidowSize] = useState(windowInnerSize);

  useEffect(() => {
    const changeWindowSize = () => {
      setWidowSize([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener("resize", changeWindowSize);

    return () => window.removeEventListener('resize', changeWindowSize);
  }, []);

  return windowSize;
}
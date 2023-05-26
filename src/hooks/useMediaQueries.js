import { useEffect, useState } from 'react';

const deviceType = (size, device) => {
  switch (true) {
    case size <= 900 && device === 'mobile':
      return true;
    case size > 480 && size <= 768 && device === 'tablet':
      return true;
    case size > 768 && size <= 1024 && device === 'laptop':
      return true;
    case size > 1024 && device === 'desktop':
      return true;
    case size > 1440 && device === 'largeScreen':
      return true;

    default:
      return false;
  }
};

function useMediaQueries(device) {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const deviceSize = deviceType(windowSize.width, device);
  return deviceSize;
}

export default useMediaQueries;

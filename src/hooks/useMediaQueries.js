import { useEffect, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

export const useWidth = () => {
  const xxl = useMediaQuery((theme) => theme.breakpoints.up(2000));
  const xl = useMediaQuery((theme) => theme.breakpoints.between(1600, 2000));
  const lg = useMediaQuery((theme) => theme.breakpoints.between(1201, 1600));
  const md = useMediaQuery((theme) => theme.breakpoints.between(900, 1200));
  const sm = useMediaQuery((theme) => theme.breakpoints.between(701, 900));
  const xs = useMediaQuery((theme) => theme.breakpoints.between(0, 700));
  switch (true) {
    case xxl:
      return 6;
    case xl:
      return 5;
    case lg:
      return 4;
    case md:
      return 3;
    case sm:
      return 2;
    case xs:
      return 1;
    default:
      return 1;
  }
};

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

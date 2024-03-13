import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Dependency array with pathname ensures effect runs on route change

  return null; // This component does not render anything
};

export default ScrollToTop;

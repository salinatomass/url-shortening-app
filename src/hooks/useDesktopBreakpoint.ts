import { useState, useEffect } from 'react';

const useDesktopBreakpoint = (): boolean => {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    const mediaDesktop = window.matchMedia('(min-width: 720px)');

    const handleMediaDesktop = () => {
      mediaDesktop.matches ? setIsDesktop(true) : setIsDesktop(false);
    };

    handleMediaDesktop();

    mediaDesktop.addEventListener('change', handleMediaDesktop);

    return () => mediaDesktop.removeEventListener('change', handleMediaDesktop);
  }, []);

  return isDesktop;
};

export default useDesktopBreakpoint;

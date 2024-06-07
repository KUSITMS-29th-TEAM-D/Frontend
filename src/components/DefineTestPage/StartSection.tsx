import { useEffect, useState } from 'react';

import { DefineDesktopView } from '@/components/DefineStartPage/DefineDesktopView';
import { DefineMobileView } from '@/components/DefineStartPage/DefineMobileView';

export const StartSection = ({ onNext }: { onNext: () => void }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1279);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>{isMobile ? <DefineMobileView onNext={onNext} /> : <DefineDesktopView onNext={onNext} />}</>
  );
};

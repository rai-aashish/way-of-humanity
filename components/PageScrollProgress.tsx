import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
interface PageScrollProgressProps {}

const PageScrollProgress: React.FunctionComponent<PageScrollProgressProps> = (props) => {
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  //? check for scroll progress
  const handlePageScroll = () => {
    const currentY = document.body.scrollTop || document.documentElement.scrollTop;
    const maxY = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollProgress = Math.ceil((currentY * 100) / maxY);
    setProgress(() => 100 - scrollProgress);
  };
  useEffect(() => {
    window.addEventListener('scroll', handlePageScroll);
    return () => window.removeEventListener('scroll', handlePageScroll);
  }, []);

  //? reset progress on route change
  useEffect(() => {
    handlePageScroll();
  }, [router.asPath]);

  return (
    <div className="overflow-clip">
      <div
        style={{
          transform: `translateX(-${progress}%)`,
        }}
        className="h-[0.313rem]  backdrop-blur-xl bg-opacity-60 duration-75 ease-in bg-gradient-to-r from-accent-50 to-accent-700 rounded-r-xl "
      ></div>
    </div>
  );
};

export default PageScrollProgress;

import * as React from 'react';

interface BackdropProps {
  className?: string;
}

const Backdrop: React.FunctionComponent<BackdropProps> = ({ children, className }) => {
  return <div className={`relative z-20 bg-accent-light-blue  ${className}`}>{children}</div>;
};

export default Backdrop;

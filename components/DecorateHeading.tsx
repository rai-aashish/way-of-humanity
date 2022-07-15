import * as React from 'react';

interface DecorateHeadingProps {
  start?: 'left' | 'center';
}
const DecorateHeading: React.FunctionComponent<DecorateHeadingProps> = ({ start = 'center', children }) => {
  return (
    <span
      className={`inline-block relative after:absolute after:w-[80%] after:h-[3px] after:bg-accent-800 after:opacity-30 ${
        start === 'left' ? 'after:left-0' : 'after:-translate-x-1/2 after:left-1/2'
      } after:-bottom-3 `}
    >
      {children}
    </span>
  );
};

export default DecorateHeading;

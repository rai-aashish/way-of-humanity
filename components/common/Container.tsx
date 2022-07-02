import * as React from 'react';

interface ContainerProps {
  className?: string;
  grid?: boolean;
  noPaddingX?: boolean;
}

const Container: React.FunctionComponent<ContainerProps> = ({
  children,
  noPaddingX = false,
  className,
  grid = false,
}) => {
  return (
    <div className={`max-w-[1100px] 2xl:max-w-[1200px] 3xl:max-w-[1400px] mx-auto ${noPaddingX ? '' : 'px-5'}`}>
      <div
        className={`${grid ? 'grid grid-cols-4 md:grid-cols-12 gap-x-gutter-md lg:gap-x-gutter-lg' : ''} ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
export { Container };

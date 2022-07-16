import * as React from 'react';
import { ImageProps } from 'next/image';
import ExportImage from 'next-image-export-optimizer';

const Image: React.FunctionComponent<ImageProps> = (props) => {
  return <ExportImage {...props} unoptimized />;
};

export default Image;

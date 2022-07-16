import * as React from 'react';
import { KeyTextField, ImageField } from '@prismicio/types';
import Image from 'components/Image';

interface FeatureCardProps {
  featureTitle: KeyTextField;
  featureIcon: ImageField;
  className?: string;
}

const FeatureCard: React.FunctionComponent<FeatureCardProps> = ({ featureTitle, featureIcon, className }) => {
  return (
    <div className={`flex gap-x-5 items-center  px-4 py-5 shadow-all-md rounded-md ${className}`}>
      <div className="relative w-17 h-17">
        <Image src={featureIcon.url as string} alt={featureIcon.alt as string} layout="fill" objectFit="cover" />
      </div>
      <span>{featureTitle}</span>
    </div>
  );
};

export default FeatureCard;

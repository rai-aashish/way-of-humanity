import { PrismicRichText } from '@prismicio/react';
import * as React from 'react';
import { RichTextField, KeyTextField, ImageField } from '@prismicio/types';
import Image from 'next/image';

interface ServiceCardProps {
  className?: string;
  serviceTitle: RichTextField;
  serviceBrief: KeyTextField;
  thumbnail: ImageField;
}

const ServiceCard: React.FunctionComponent<ServiceCardProps> = ({
  className,
  serviceTitle,
  serviceBrief,
  thumbnail,
}) => {
  return (
    <div className={`group rounded-2xl  overflow-hidden shadow-all-lg ${className}`}>
      {/* //? thumbnail */}
      <div className="relative w-full h-66  overflow-hidden ">
        <div className="relative w-full h-full duration-300 group-hover:scale-[1.1] ease-in-out">
          <Image src={thumbnail.url as string} alt={thumbnail.alt as string} layout="fill" objectFit="cover" />
        </div>
      </div>
      {/* //? body */}
      <div className="px-6 pt-5 pb-10">
        <PrismicRichText
          field={serviceTitle}
          components={{
            heading4: ({ children }) => <h4 className="text-center mb-4">{children}</h4>,
            heading5: ({ children }) => <h5 className="text-center mb-4">{children}</h5>,
          }}
        />

        <p>{serviceBrief}</p>
      </div>
    </div>
  );
};

export default ServiceCard;

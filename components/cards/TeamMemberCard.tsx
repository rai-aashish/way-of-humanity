import React from 'react';
import Image from 'components/Image';
import { RichTextField, KeyTextField, ImageField } from '@prismicio/types';
import { PrismicRichText } from '@prismicio/react';

interface TeamMemberCardProps {
  className?: string;
  displayPicture: ImageField;
  memberName: RichTextField;
  memberDesignation: KeyTextField;
  breifDescription: KeyTextField;
}

const TeamMemberCard: React.FunctionComponent<TeamMemberCardProps> = ({
  className,
  displayPicture,
  memberName,
  memberDesignation,
  breifDescription,
}) => {
  return (
    <div className={`overflow-clip rounded-2xl shadow-xl ${className}`}>
      <div className="relative w-full aspect-4/3">
        <Image
          src={displayPicture.url as string}
          alt={displayPicture.alt as string}
          objectFit="cover"
          layout="fill"
          placeholder="blur"
        />
      </div>
      <div className="p-6 text-center">
        <PrismicRichText
          field={memberName}
          components={{
            heading4: ({ children }) => <h4 className="text-h5 md:text-h4">{children}</h4>,
            heading5: ({ children }) => <h5 className="text-h5">{children}</h5>,
          }}
        />
        <h6 className="my-3 text-b2 text-backdrop-black-60">{memberDesignation}</h6>
        <p className="text-b2 text-backdrop-black-60">{breifDescription}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;

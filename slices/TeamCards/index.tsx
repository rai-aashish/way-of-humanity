import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { TeamCardsProps } from './interfaces';
import Container from 'components/common/Container';
import TeamMemberCard from '../../components/cards/TeamMemberCard';
import DecorateHeading from 'components/DecorateHeading';

const TeamCards: React.FC<TeamCardsProps> = ({ slice }) => (
  <section aria-label="our team members">
    <Container grid className="my-14 lg:my-16">
      <div className="col-span-full mb-12 md:mb-17 lg:mb-19 text-center">
        <PrismicRichText
          field={slice.primary.sectionTitle}
          components={{
            heading2: ({ children }) => (
              <h2 className="text-h3 md:text-h2">
                <DecorateHeading>{children}</DecorateHeading>
              </h2>
            ),
            heading3: ({ children }) => (
              <h3>
                <DecorateHeading>{children}</DecorateHeading>
              </h3>
            ),
          }}
        />
      </div>
      <div className="col-span-full">
        <Container noPaddingX grid className="col-span-full gap-y-15">
          {slice.items.map((member, index) => (
            <TeamMemberCard
              className="col-span-full md:col-span-6 lg:col-span-4"
              key={index}
              memberName={member.memberName}
              memberDesignation={member.memberDesignation}
              displayPicture={member.displayPicture}
              breifDescription={member.briefDescription}
            />
          ))}
        </Container>
      </div>
    </Container>
  </section>
);

export default TeamCards;

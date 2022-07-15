import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { RichTextField } from '@prismicio/types';
import Container from 'components/common/Container';
import { CheckIcon } from '@heroicons/react/solid';

interface MegaDescriptionProps {
  slice: {
    primary: {
      content: RichTextField;
    };
  };
}

const MegaDescription: React.FC<MegaDescriptionProps> = ({ slice }) => (
  <section>
    <Container grid className="my-10 md:my-12">
      <div className="col-span-full">
        <PrismicRichText
          field={slice.primary.content}
          components={{
            heading2: ({ children }) => (
              <h2 className="text-h3 md:text-h2 pb-3 mb-3 md:mb-5 md:pb-4 relative after:absolute after:w-[20%] after:left-0 after:bottom-0 after:h-[0.15rem] after:bg-content-placeholder">
                {children}
              </h2>
            ),
            heading3: ({ children }) => (
              <h3 className="text-h5 md:text-h4 lg:text-h3 mt-6 md:mt-8 mb-1 md:mb-2">{children}</h3>
            ),
            heading4: ({ children }) => <h4 className="text-h5 md:text-h4 mt-6 md:mt-8 mb-1 md:mb-2">{children}</h4>,
            heading5: ({ children }) => <h5 className="mb-2 mt-3 md:mt-5">{children}</h5>,
            heading6: ({ children }) => <h6 className="mb-2 mt-3 md:mt-3">{children}</h6>,
            oList: ({ children }) => <ol className="mt-4">{children}</ol>,
            list: ({ children }) => <ul className="mt-4">{children}</ul>,
            listItem: ({ children, key }) => (
              <li key={key} className="flex gap-x-3 items-center mb-2 md:mb-3 last:mb-0">
                <span className="inline-block">
                  <CheckIcon className="w-7 aspect-square md:w-8 fill-success-base" />
                </span>
                {children}
              </li>
            ),
          }}
        />
      </div>
    </Container>
  </section>
);

export default MegaDescription;

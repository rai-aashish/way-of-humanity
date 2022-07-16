import * as React from 'react';
import Container from 'components/common/Container';
import { PrismicDocument, KeyTextField, LinkField } from '@prismicio/types';
import * as PrismicH from '@prismicio/helpers';
import { linkResolver } from 'prismicio';
import Link from 'next/link';
import Image from 'components/Image';
import { PrismicRichText } from '@prismicio/react';

interface FooterProps {
  header: PrismicDocument;
  footer: PrismicDocument;
}

const Footer: React.FunctionComponent<FooterProps> = ({ header, footer }) => {
  return (
    <div>
      <footer className="bg-backdrop-black-90 text-backdrop-white-60 pt-16">
        <Container grid className="gap-y-8">
          {/* //? Quick links */}
          <div className="col-span-4 md:col-start-2 md:col-span-4  lg:col-span-2">
            <div className="text-backdrop-white-60 mb-4 pb-1 border-b-2 border-b-backdrop-white-40">
              {footer.data.quickLinkLabel ?? 'Quick Links'}
            </div>
            <ul className="ml-3">
              {header.data.navLinks.map((navLink: { linkLabel: KeyTextField; linkTo: LinkField }, index: number) => (
                <li key={index}>
                  <Link href={(PrismicH.asLink(navLink.linkTo, linkResolver) as string) || '#'}>
                    <a className="inline-block py-2  mb-2 hover:text-accent-600">{navLink.linkLabel}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* //?Contact Info */}
          <div className="col-span-4 md:col-start-7 md:col-span-5 lg:col-span-3">
            <div className="text-backdrop-white-60 mb-4 pb-1 border-b-2 border-b-backdrop-white-40">
              {footer.data.contactLabel ?? 'Contact info'}
            </div>

            <ul className="ml-3">
              <li>
                <Link href={PrismicH.asLink(header.data.contactNumber, linkResolver) as string}>
                  <a className="inline-block py-2 mb-2 hover:text-accent-600"> {header.data.contactLabel}</a>
                </Link>
              </li>
              <li>
                <Link href={`mailto:${header.data.emailAddress}`}>
                  <a className="inline-block py-2 mb-2 hover:text-accent-600"> {header.data.emailAddress}</a>
                </Link>
              </li>
            </ul>
            <div className="flex gap-5 mt-4 ml-3">
              {header.data.socialNetwork.map((socialLink: any, index: any) => (
                <span key={index} className="inline-block cursor-pointer">
                  <Link href={PrismicH.asLink(socialLink.linkTo, linkResolver) as string}>
                    <a className="inline-block relative w-12 h-12  grayscale duration-200 ease hover:grayscale-0">
                      <Image
                        layout="fill"
                        src={socialLink.linkIcon.url as string}
                        alt={socialLink.linkIcon.alt as string}
                      />
                    </a>
                  </Link>
                </span>
              ))}
            </div>
          </div>

          {/* //? map */}
          <div className="col-span-4 md:col-start-2 md:col-span-7 lg:col-span-4">
            <div className="text-backdrop-white-60 mb-4 pb-1 border-b-2 border-b-backdrop-white-40">
              {footer.data.mapLabel ?? 'Map'}
            </div>
            <Link href={PrismicH.asLink(header.data.mapAddressLink, linkResolver) as string}>
              <a className="inline-block py-2 mb-2  hover:text-accent-600" target="_blank" rel="noreferrer">
                {header.data.mapAddressLabel}
              </a>
            </Link>
            <div className="rounded-xl overflow-hidden opacity-70 hover:opacity-90">
              <iframe
                title="google map for Way of Humanity"
                className="w-full aspect-16/9"
                src={footer.data.iframeMapUrl}
                frameBorder={0}
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
              />
            </div>
          </div>

          {/* //? love fpr NDIS */}
          <div className="col-span-4 md:col-span-4 lg:col-span-3 flex items-center justify-center md:justify-end">
            <div className="relative opacity-90 hover:opacity-100 max-w-[212px] w-full aspect-square">
              <Image
                src={footer.data.ndisImage.url as string}
                alt={footer.data.ndisImage.alt as string}
                layout="fill"
              />
            </div>
          </div>
        </Container>
        <div className="mt-10 px-5 text-center bg-backdrop-black-80 py-3">
          {footer.data.copyrightLabel ?? 'Way of Humanity'}
        </div>

        {footer.data.developerCredit && (
          <div className="py-3 px-5 text-center bg-black text-gray-500">
            <PrismicRichText
              field={footer.data.developerCredit}
              components={{
                hyperlink: ({ children }) => (
                  <a className="text-accent-800 hover:text-accent-100 cursor-pointer">{children}</a>
                ),
              }}
            />
          </div>
        )}
      </footer>
    </div>
  );
};

export default Footer;

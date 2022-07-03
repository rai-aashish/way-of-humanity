import React, { useState, useEffect } from 'react';
import Container from './common/Container';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneIcon, LocationMarkerIcon } from '@heroicons/react/solid';
import { PrismicDocument, KeyTextField, LinkField } from '@prismicio/types';
import { PrismicLink } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';
import { linkResolver } from 'prismicio';
import { useRouter } from 'next/router';
import MobileNavMenu from './MobileNavMenu';

type HeaderProps = {
  header: PrismicDocument;
};

const Header: React.FC<HeaderProps> = ({ header }) => {
  const [showMobileNavMenu, setShowMobileNavMenu] = useState<boolean>(false);

  //handlers
  const toggleMobileNav = () => setShowMobileNavMenu((pre) => !pre);

  //effect hook
  useEffect(() => {
    const resizeListener = () => {
      const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      if (width < 768) setShowMobileNavMenu(false);
    };
    // set resize listener
    window.addEventListener('resize', resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return (
    <>
      {/* //? contact bar */}
      <div className="bg-[#FDEDCD] text-[#C15D00] text-b1 py-3 border-b border-b-[rgba(237,121,13,0.3)]">
        <Container className="flex justify-between gap-x-10 gap-y-3 flex-wrap">
          {/* //? contact us */}
          <PrismicLink field={header.data.contactNumber}>
            <span className="flex gap-x-2 items-center">
              <PhoneIcon className="w-5 h-5" />
              {header.data.contactLabel}
            </span>
          </PrismicLink>

          {/* //? address map */}
          <PrismicLink field={header.data.mapAddressLink}>
            <span className="flex gap-x-2 items-center">
              <LocationMarkerIcon className="w-5 h-5" />
              {header.data.mapAddressLabel}
            </span>
          </PrismicLink>
        </Container>
      </div>
      {/* //? main header */}
      <header className="sticky z-50 top-0 bg-backdrop-white-100 backdrop-blur-xl bg-opacity-80">
        <Container className="py-3 flex items-center justify-between">
          <div className="relative w-28 h-18">
            <Link href="/">
              <a>
                <Image
                  src={header.data?.brandLogo?.url as string}
                  alt={header.data?.brandLogo?.alt as string}
                  layout="fill"
                />
              </a>
            </Link>
          </div>

          {/* //? nav bar */}
          <NavBar navLinks={header.data?.navLinks} className={'hidden lg:flex'} />
          <div className="flex gap-x-6 items-center">
            <Link href={(prismicH.asLink(header.data?.ctaLinkTo, linkResolver) as string) || '#'}>
              <a className="hidden md:inline-block rounded-2xl bg-accent-600 text-backdrop-white-100 px-4 py-2 duration-300 ease-in-out hover:bg-accent-800">
                {header.data?.ctaLabel}
              </a>
            </Link>

            {/* //? hamburger menu */}
            <button
              className="flex flex-col gap-y-[6px] lg:hidden px-2 py-3 rounded ease duration-200 cursor-pointer opacity-70 hover:opacity-100 hover:bg-accent-50"
              onClick={toggleMobileNav}
              role="navigation"
              aria-label="Main menu"
              aria-expanded={showMobileNavMenu ? 'true' : 'false'}
            >
              <div
                className={`w-8 h-[4px] rounded bg-icon-default  duration-300 ease-out ${
                  showMobileNavMenu ? 'rotate-[45deg] translate-y-[10px]' : ''
                }`}
              ></div>
              <div
                className={`origin-left ease-out duration-300 ${
                  showMobileNavMenu ? 'scale-x-0 opacity-100' : ''
                } w-8 h-[4px] rounded bg-icon-default`}
              ></div>
              <div
                className={`w-8 h-[4px] rounded bg-icon-default  duration-300 ease-out  ${
                  showMobileNavMenu ? '-rotate-[45deg] -translate-y-[10px]' : ''
                } `}
              ></div>
            </button>
          </div>
        </Container>

        <MobileNavMenu
          show={showMobileNavMenu}
          navLinks={header.data?.navLinks}
          ctaLinkLabel={header.data?.ctaLabel}
          ctaLinkUrl={prismicH.asLink(header.data?.ctaLinkTo, linkResolver) as string}
        />
      </header>
    </>
  );
};

//?? navbar component
interface NavBarProps {
  className?: string;
  navLinks: {
    linkLabel: KeyTextField;
    linkTo: LinkField;
  }[];
}
const NavBar: React.FC<NavBarProps> = ({ navLinks, className }) => {
  const router = useRouter();

  const activeClass = 'text-accent-800 after:scale-x-100';

  return (
    <nav className={`gap-x-6 items-center justify-between ${className}`} aria-label="primary">
      {navLinks.map(({ linkTo, linkLabel }, index) => {
        const href = prismicH.asLink(linkTo, linkResolver);
        return (
          <Link key={index} href={href || '#'}>
            <a
              className={`relative text-h6 after:absolute after:duration-300 after:ease-in-out after:w-full after:mt-1 after:h-[0.15rem] after:bg-accent-800 after:top-full after:left-0 hover:text-accent-800 hover:after:scale-x-100  ${
                router.asPath === href ? activeClass : 'after:scale-x-0 text-content-body'
              }`}
            >
              {linkLabel}
            </a>
          </Link>
        );
      })}
    </nav>
  );
};
export default Header;

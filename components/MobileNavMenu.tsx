import React, { useRef } from 'react';
import Link from 'next/link';
import { KeyTextField, LinkField } from '@prismicio/types';
import * as prismicH from '@prismicio/helpers';
import { useRouter } from 'next/router';
import { linkResolver } from 'prismicio';
import { FocusTrap, Transition } from '@headlessui/react';
import useOnClickOutside from 'hooks/useOnclickOutside';

interface MobileNavMenuProps {
  toggleMobileNav: () => void;
  navLinks: {
    linkLabel: KeyTextField;
    linkTo: LinkField;
  }[];
  ctaLinkUrl: string;
  ctaLinkLabel: KeyTextField;
  show: boolean;
}

const MobileNavMenu: React.FunctionComponent<MobileNavMenuProps> = ({
  toggleMobileNav,
  show,
  navLinks,
  ctaLinkUrl,
  ctaLinkLabel,
}) => {
  const router = useRouter();
  const mobileNavRef = useRef(null);
  useOnClickOutside(mobileNavRef, toggleMobileNav);

  return (
    <Transition
      show={show}
      as={'div'}
      enter="transition duration-300 ease-out"
      leave="transition duration-300 ease-out delay-300"
      enterFrom="opacity-0"
      leaveTo="opacity-0"
      className="overflow-hidden` absolute z-50 top-full w-screen h-screen bg-backdrop-black-60 bg-opacity-60 backdrop-blur-xl"
    >
      <Transition.Child
        ref={mobileNavRef}
        as="div"
        enter="transition duration-500 ease-out"
        leave="transition duration-500 ease-out"
        enterFrom="translate-x-full opacity-0"
        leaveTo="translate-x-full opacity-0"
        className="w-full md:max-w-[30rem] overflow-clip rounded-b-xl  p-10 absolute top-0 right-0  bg-backdrop-white-100 backdrop-blur-xl shadow-sm "
      >
        <FocusTrap
          as="nav"
          className="flex flex-col gap-y-6 items-center justify-between"
          aria-label="primary"
          role="navigation"
        >
          {navLinks.map(({ linkTo, linkLabel }, index) => {
            let href = prismicH.asLink(linkTo, linkResolver);
            //? to match trailing slash of route
            if (href?.slice(-1) !== '/') href = href + '/';
            return (
              <Link key={index} href={href || '#'}>
                <a
                  className={`text-h5 mobile-nav-link hover:after:scale-x-100 hover:before:scale-x-100 after:bg-accent-700 before:bg-accent-700 cursor-pointer relative inline-block px-3 py-1  text-accent-700
                 ${router.asPath === href ? 'active' : ''}
                `}
                >
                  {linkLabel}
                </a>
              </Link>
            );
          })}

          {/* //?cta link */}
          <Link href={ctaLinkUrl || '#'}>
            <a className="md:hidden rounded-2xl bg-accent-600 text-backdrop-white-100 px-4 py-2 duration-300 ease-in-out hover:bg-accent-800 focus:bg-accent-100 focus:text-accent-900">
              {ctaLinkLabel}
            </a>
          </Link>

          <button
            onClick={toggleMobileNav}
            type="button"
            className="p-1 text-gray-600 absolute opacity-0 pointer-events-none focus:relative focus:opacity-100 "
          >
            close navigation
          </button>
        </FocusTrap>
      </Transition.Child>

      {/* //? styles */}
      <style jsx>{`
        .mobile-nav-link::before,
        .mobile-nav-link::after {
          position: absolute;
          width: 100%;
          height: 0.15rem;
          left: 0;
          border-radius: 1rem;
          transform: scaleX(0);
          transition: transform 300ms ease-in-out;
        }
        .mobile-nav-link::before {
          top: 0rem;
        }

        .mobile-nav-link:hover::before,
        .mobile-nav-link:hover::after,
        .active::before,
        .active::after {
          transform: scaleX(1);
        }
        .mobile-nav-link::after {
          bottom: 0rem;
        }
      `}</style>
    </Transition>
  );
};

export default MobileNavMenu;

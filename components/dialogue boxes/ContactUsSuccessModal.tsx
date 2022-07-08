import * as React from 'react';
import { Transition } from '@headlessui/react';
import { ExclamationCircleIcon, XIcon } from '@heroicons/react/solid';
import { RichTextField } from '@prismicio/types';
import { PrismicRichText } from '@prismicio/react';
import Button from 'components/common/Button';

interface ContactUsSuccessModalProps {
  hide: () => void;
  formState: 'initial' | 'submitting' | 'success' | 'error';
  successMessage: RichTextField;
  errorMessage: RichTextField;
  waitingMessage: RichTextField;
}

const ContactUsSuccessModal: React.FunctionComponent<ContactUsSuccessModalProps> = ({
  hide,
  formState,
  successMessage,
  errorMessage,
  waitingMessage,
}) => {
  return (
    <Transition
      as="div"
      className="bg-backdrop-black-40 fixed z-50 inset-0 px-5 grid place-items-center"
      show={formState !== 'initial'}
      enterFrom="opacity-0"
      enter="duration-300 ease"
    >
      <div className="w-full max-w-[400px] h-full  max-h-[400px] bg-backdrop-white-100 rounded p-5">
        {formState !== 'submitting' && (
          <div className="flex justify-end items-center">
            <XIcon
              className="opacity-70 hover:opacity-100 w-8 h-8 fill-icon-default cursor-pointer rounded hover:bg-error-light hover:fill-error-base"
              onClick={hide}
            />
          </div>
        )}
        {formState === 'success' ? (
          <SuccessState successMessage={successMessage} />
        ) : formState === 'error' ? (
          <ErrorState errorMessage={errorMessage} />
        ) : (
          <SubmittingState submittingMessage={waitingMessage} />
        )}
      </div>
    </Transition>
  );
};

const SubmittingState: React.FC<{
  submittingMessage: RichTextField;
}> = ({ submittingMessage }) => {
  return (
    <div className="h-full grid">
      <div className="mt-10 grid place-items-center">
        <div className="animate-spin  relative w-[100px] aspect-square rounded-full border-8 border-accent-600">
          <div className="absolute w-15 aspect-square bg-white rounded-full -top-4 left-1/2"></div>
        </div>
      </div>
      <div className="mt-5 text-xl text-center text-accent-800">
        <PrismicRichText
          field={submittingMessage}
          components={{
            heading5: ({ children }) => <h5 className="text-accent-800 font-semibold">{children}</h5>,
            heading6: ({ children }) => <h6 className="text-accent-800 font-semibold">{children}</h6>,
            paragraph: ({ children }) => <p className="text-accent-800">{children}</p>,
          }}
        />
      </div>
    </div>
  );
};

const ErrorState: React.FC<{
  errorMessage: RichTextField;
}> = ({ errorMessage }) => {
  return (
    <div className="">
      <div className="mt-10 grid place-items-center">
        <ExclamationCircleIcon className="w-28 aspect-square fill-error-base" />
        <div className="mt-6 text-xl text-center text-error-dark">
          <PrismicRichText
            field={errorMessage}
            components={{
              heading5: ({ children }) => <h5 className="text-center text-error-dark font-semibold">{children}</h5>,
              heading6: ({ children }) => <h6 className="text-center text-error-dark font-semibold">{children}</h6>,
              paragraph: ({ children }) => <p className="text-error-dark">{children}</p>,
            }}
          />
        </div>
      </div>
    </div>
  );
};

const SuccessState: React.FC<{ successMessage: RichTextField }> = ({ successMessage }) => {
  return (
    <div>
      <div className="mt-10 grid place-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-28 w-28 stroke-success-base"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
        <div className="mt-6 text-xl text-success-dark">
          <PrismicRichText
            field={successMessage}
            components={{
              heading5: ({ children }) => <h5 className="text-center text-success-dark font-semibold">{children}</h5>,
              heading6: ({ children }) => <h6 className="text-center text-success-dark font-semibold">{children}</h6>,
              paragraph: ({ children }) => <p className="text-center text-success-dark">{children}</p>,
            }}
          />
          <div className="mt-6 flex items-center justify-center gap-6">
            <span className="inline-block">
              <Button
                asLink
                href={'/'}
                variant="outline"
                className="border-success-base !text-success-base hover:!border-success-base hover:!bg-success-base hover:!text-white"
                size="small"
              >
                Go Home
              </Button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUsSuccessModal;

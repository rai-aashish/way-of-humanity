import * as React from 'react';

interface ContactUsSuccessModalProps {
  hide: () => void;
}

const ContactUsSuccessModal: React.FunctionComponent<ContactUsSuccessModalProps> = ({ hide }) => {
  return (
    <div className="bg-backdrop-black-40 fixed z-50 inset-0 grid place-items-center">
      <div className="w-[400px] h-[400px] bg-backdrop-white-100 rounded">
        <button onClick={hide}>X</button>
        success
      </div>
    </div>
  );
};

export default ContactUsSuccessModal;

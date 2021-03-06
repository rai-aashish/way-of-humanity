import { Transition } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon, MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';

interface SelectProps {
  isError?: boolean;
  helperText?: string;
  name?: string;
  value?: string;
  label?: string | null;
  required?: boolean;
  itemsName?: string;
  options: { relation: string }[];
  onOptionSelect?: (value: string) => void;
}

const Select: React.FunctionComponent<SelectProps> = ({
  isError,
  label,
  helperText,
  name,
  required,
  options,
  value,
  onOptionSelect,
}) => {
  const [showSelectedServices, setShowSelectedServices] = useState<boolean>(false);

  const toggleShowSelectedServices = () => setShowSelectedServices((pre) => !pre);
  const serviceSelectHandler = (value: string) => {
    if (onOptionSelect) onOptionSelect(value);
    setShowSelectedServices(() => false);
  };
  return (
    <div>
      {label && (
        <label htmlFor={name} className="block">
          {label} {required && <span className="text-error-base font-bold">*</span>}:
        </label>
      )}
      <span className="block relative cursor-pointer">
        <div
          className={`group flex gap-x-4 justify-between items-center relative border ${
            showSelectedServices ? 'shadow-xl' : ''
          } border-stroke-default hover:border-accent-700 py-3 px-4 rounded  ${isError ? 'border-error-base' : ''}`}
          onClick={toggleShowSelectedServices}
        >
          {value}
          <ChevronDownIcon className="w-6 h-6 fill-icon-default opacity-50 group-hover:opacity-100" />
        </div>
        {/* //? All services section */}
        <AllOptions
          show={showSelectedServices}
          options={options}
          serviceSelectHandler={serviceSelectHandler}
          toggleShow={toggleShowSelectedServices}
          selectedOption={value as string}
        />
        {helperText && helperText !== '' && (
          <small className={`block ${isError ? 'text-error-base' : 'text-content-placeholder'}`}>{helperText}</small>
        )}
      </span>
    </div>
  );
};

const AllOptions: React.FC<{
  selectedOption: string;
  show: boolean;

  options: { relation: string }[];
  toggleShow: () => void;
  serviceSelectHandler: (value: string) => void;
}> = ({ selectedOption, show, options, serviceSelectHandler, toggleShow }) => {
  return (
    <Transition
      show={show}
      as="div"
      enterFrom="opacity-0 translate-y-20"
      enter="duration-200 ease"
      leave="duration-200 ease"
      leaveTo="opacity-0 translate-y-20"
      className="border border-stroke-divider overflow-auto max-h-screen absolute left-0 z-10 w-full rounded-b-xl shadow-2xl bg-backdrop-white-100"
    >
      <div className="bg-backdrop-white-100 shadow-lg">
        <ul>
          {options.map(({ relation }, index) => {
            return (
              <li
                className={`flex  hover:bg-success-light hover:text-success-dark gap-5 justify-between items-center last:border-none border-b border-stroke-divider px-4 py-3 cursor-pointer ${
                  selectedOption === relation ? 'bg-success-light text-success-dark' : 'bg-backdrop-white-100'
                }`}
                key={index}
                onClick={() => serviceSelectHandler(relation)}
              >
                {relation}
                {selectedOption === relation && <CheckIcon className="w-8 h-8 fill-success-base" />}
              </li>
            );
          })}
        </ul>
      </div>
    </Transition>
  );
};

export default Select;

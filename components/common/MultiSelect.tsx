import { Transition, FocusTrap } from '@headlessui/react';
import { ChevronDownIcon, MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/solid';
import useOnClickOutside from 'hooks/useOnclickOutside';
import React, { useState, useRef } from 'react';

interface MultiSelectProps {
  isError?: boolean;
  helperText?: string;
  name?: string;
  values?: string[];
  label?: string | null;
  required?: boolean;
  itemsName?: string;
  options: { value: string }[];
  onOptionSelect?: (value: string) => void;
}

const MultiSelect: React.FunctionComponent<MultiSelectProps> = ({
  isError,
  label,
  helperText,
  name,
  required,
  itemsName = 'items',
  options,
  values,
  onOptionSelect,
}) => {
  const serviceSelectHandler = (value: string) => {
    if (onOptionSelect) onOptionSelect(value);
  };

  const [showSelectedServices, setShowSelectedServices] = useState<boolean>(false);

  const toggleShowSelectedServices = () => setShowSelectedServices((pre) => !pre);

  return (
    <div>
      {label && (
        <label htmlFor={name} className="block">
          {label} {required && <span className="text-error-base font-bold">*</span>}:
        </label>
      )}

      <button
        type="button"
        className={`w-full group flex gap-x-4 justify-between items-center relative border ${
          showSelectedServices ? 'shadow-xl' : ''
        } border-stroke-default hover:border-accent-700 py-3 px-4 rounded  ${isError ? 'border-error-base' : ''}`}
        onClick={toggleShowSelectedServices}
      >
        <div role="presentation">
          {values?.length === 0 ? (
            <span className="text-content-placeholder">no {itemsName} selected</span>
          ) : values?.length === 1 ? (
            <span>{values[0]}</span>
          ) : (
            <span className="">
              <strong>{values?.length}</strong> {itemsName} selected
            </span>
          )}
        </div>

        <ChevronDownIcon className="w-6 h-6 fill-icon-default opacity-50 group-hover:opacity-100" />
      </button>
      {helperText && helperText !== '' && (
        <small className={`block ${isError ? 'text-error-base' : 'text-content-placeholder'}`}>{helperText}</small>
      )}

      {/* //? All services section */}
      <AllSelectedItems
        show={showSelectedServices}
        itemsName={itemsName}
        options={options}
        serviceSelectHandler={serviceSelectHandler}
        toggleShow={toggleShowSelectedServices}
        values={values as []}
      />
    </div>
  );
};

const AllSelectedItems: React.FC<{
  values: string[];
  show: boolean;
  itemsName: string;
  options: { value: string }[];
  toggleShow: () => void;
  serviceSelectHandler: (value: string) => void;
}> = ({ values, show, options, itemsName, serviceSelectHandler, toggleShow }) => {
  const allSelectedItemsRef = useRef(null);

  useOnClickOutside(allSelectedItemsRef, toggleShow);

  return (
    <Transition
      show={show}
      as="div"
      className="fixed z-50 inset-0 bg-backdrop-black-60 grid place-items-center p-5"
      enterFrom="opacity-0"
      enter="duration-300 ease"
      leave="delay-300 duration-300 ease"
      leaveTo="opacity-0"
    >
      <Transition.Child
        ref={allSelectedItemsRef}
        as="div"
        enterFrom="opacity-0 translate-y-20"
        enter="delay-300 duration-300 ease"
        leave="duration-300 ease"
        leaveTo="opacity-0 -translate-y-20"
        className="relative  w-full max-w-[500px] max-h-screen rounded-xl overflow-hidden bg-backdrop-white-100 pb-5"
      >
        <FocusTrap>
          {/* //? status menu */}
          <div className="bg-backdrop-white-100 flex items-center gap-x-10 justify-between p-4 border-b border-stroke-divider">
            <span className="flex-grow text-center">
              <strong className="text-lg">{values.length}</strong> {itemsName} selected
            </span>
            <button
              type="button"
              className="text-content-placeholder duration-300 hover:bg-success-base  focus:bg-success-base cursor-pointer rounded hover:text-white focus:text-white px-3 py-2"
              onClick={toggleShow}
            >
              DONE
            </button>
          </div>
          <div className="h-full max-h-[500px] overflow-auto">
            <ul>
              {options.map(({ value }, index) => {
                const isServiceSelected = values.includes(value);
                return (
                  <li
                    className={`flex hover:text-accent-800 gap-5 justify-between items-center border-b border-stroke-divider px-4 py-3 cursor-pointer ${
                      isServiceSelected ? 'bg-success-light' : 'bg-backdrop-white-100'
                    }`}
                    key={index}
                    onClick={() => serviceSelectHandler(value)}
                  >
                    <span className="block">{value}</span>
                    {isServiceSelected ? (
                      <button type="button" onClick={() => serviceSelectHandler(value)}>
                        <MinusCircleIcon role="presentation" className="w-8 h-8 fill-error-base" />
                      </button>
                    ) : (
                      <button type="button" onClick={() => serviceSelectHandler(value)}>
                        <PlusCircleIcon role="presentation" className="w-8 h-8 fill-success-base" />
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </FocusTrap>
      </Transition.Child>
    </Transition>
  );
};

export default MultiSelect;

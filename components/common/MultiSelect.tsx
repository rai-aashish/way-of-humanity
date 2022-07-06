import { ChevronDownIcon, MinusCircleIcon, PlusCircleIcon, XCircleIcon, XIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';

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

      <div
        className={`group flex gap-x-4 justify-between items-center relative border border-stroke-default hover:border-accent-700 py-3 px-4 rounded  ${
          isError ? 'border-error-base' : ''
        }`}
        onClick={toggleShowSelectedServices}
      >
        <div className="">
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
      </div>
      {helperText && helperText !== '' && (
        <small className={`block ${isError ? 'text-error-base' : 'text-content-placeholder'}`}>{helperText}</small>
      )}

      {/* //? All services section */}
      {showSelectedServices && (
        <AllSeceltedItems
          itemsName={itemsName}
          options={options}
          serviceSelectHandler={serviceSelectHandler}
          toggleShow={toggleShowSelectedServices}
          values={values as []}
        />
      )}
    </div>
  );
};

const AllSeceltedItems: React.FC<{
  values: string[];
  itemsName: string;
  options: { value: string }[];
  toggleShow: () => void;
  serviceSelectHandler: (value: string) => void;
}> = ({ values, options, itemsName, serviceSelectHandler, toggleShow }) => {
  return (
    <div className="fixed z-50 inset-0 bg-backdrop-black-60 grid place-items-center px-5">
      <div className="relative  w-full max-w-[500px]  rounded-xl overflow-hidden bg-backdrop-white-100 pb-6">
        {/* //? status menu */}
        <div className="bg-backdrop-white-100 flex items-center gap-x-10 justify-between p-4 border-b border-stroke-divider">
          <span className="flex-grow text-center">
            <strong className="text-lg">{values.length}</strong> {itemsName} selected
          </span>
          <XIcon
            className="hover:bg-backdrop-disabled p-1 rounded-md cursor-pointer opacity-70 hover:opacity-100 w-10 h-10"
            onClick={toggleShow}
          />
        </div>
        <div className="h-full max-h-[500px] overflow-auto">
          <ul>
            {options.map(({ value }, index) => {
              const isServiceSelected = values.includes(value);
              return (
                <li
                  className={`flex hover:text-accent-800 gap-5 justify-between items-center border-b border-stroke-divider px-4 py-3 ${
                    isServiceSelected ? 'bg-success-light' : 'bg-backdrop-white-100'
                  }`}
                  key={index}
                >
                  <span className="block">{value}</span>
                  {isServiceSelected ? (
                    <MinusCircleIcon
                      className="cursor-pointer w-8 h-8 fill-error-base"
                      onClick={() => serviceSelectHandler(value)}
                    />
                  ) : (
                    <PlusCircleIcon
                      className="cursor-pointer w-8 h-8 fill-success-base"
                      onClick={() => serviceSelectHandler(value)}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MultiSelect;

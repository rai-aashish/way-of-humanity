import * as React from 'react';

interface SelectProps {
  isError?: boolean;
  helperText?: string;
  name?: string;
  value?: string | number;
  label?: string | null;
  required?: boolean;
  options: { relation: string }[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FunctionComponent<SelectProps> = ({
  isError,
  label,
  helperText,
  name,
  required,
  options,
  value,
  onChange,
}) => {
  const onChangeHandler: React.ChangeEventHandler<HTMLSelectElement> = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) onChange(e);
  };
  return (
    <div>
      {label && (
        <label htmlFor={name} className="block">
          {label} {required && <span className="text-error-base font-bold">*</span>}:
        </label>
      )}
      <select
        defaultValue={options[0].relation}
        className={`w-full border border-stroke-default rounded px-4 py-3 ${
          isError ? 'border-error-base' : ''
        } outline-none focus:bg-accent-light-blue focus:border-accent-800 hover:border-accent-600 focus:shadow-xl`}
        name={name}
        id={name}
        onChange={onChangeHandler}
      >
        {options.map(({ relation }, index) => (
          <option key={index} value={relation as string}>
            {relation}
          </option>
        ))}
      </select>

      {helperText && helperText !== '' && (
        <small className={`block ${isError ? 'text-error-base' : 'text-content-placeholder'}`}>{helperText}</small>
      )}
    </div>
  );
};

export default Select;

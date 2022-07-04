import * as React from 'react';

interface InputFieldProps {
  isError?: boolean;
  helperText?: string;
  name?: string;
  value?: string | number;
  label?: string | null;
  required?: boolean;
  type?: 'text' | 'number';
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FunctionComponent<InputFieldProps> = ({
  isError,
  label,
  type = 'text',
  helperText,
  name,
  required,
  value,
  onChange,
}) => {
  //handlers
  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e);
  };
  return (
    <div>
      {label && (
        <label htmlFor={name} className="block">
          {label} {required && <span className="text-error-base font-bold">*</span>}:
        </label>
      )}
      <input
        className={`w-full border border-stroke-default rounded px-5 py-3 ${
          isError ? 'border-error-base' : ''
        } outline-none focus:bg-accent-light-blue focus:border-accent-800 hover:border-accent-600`}
        name={name}
        onChange={onChangeHandler}
        value={value}
        type={type}
      />
      {helperText && helperText !== '' && (
        <small className={`block ${isError ? 'text-error-base' : 'text-content-placeholder'}`}>{helperText}</small>
      )}
    </div>
  );
};

export default InputField;

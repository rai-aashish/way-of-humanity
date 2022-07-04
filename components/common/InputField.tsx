import * as React from 'react';

interface InputFieldProps {
  isError?: boolean;
  helperText?: boolean;
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
  type,
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
        className={`border${isError ? 'border-error-base' : ''} `}
        name={name}
        onChange={onChangeHandler}
        value={value}
        type={type}
      />
      {helperText && (
        <small className={` ${isError ? 'text-error-base' : 'text-content-placeholder'}`}>{helperText}</small>
      )}
    </div>
  );
};

export default InputField;

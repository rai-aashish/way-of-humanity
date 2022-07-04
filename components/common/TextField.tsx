import * as React from 'react';

interface TextFieldProps {
  isError?: boolean;
  helperText?: string;
  name?: string;
  value?: string | number;
  label?: string | null;
  required?: boolean;
  textField?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextField: React.FunctionComponent<TextFieldProps> = ({
  isError,
  label,
  helperText,
  name,
  required,
  value,
  onChange,
}) => {
  //handlers
  const onChangeHandler: React.ChangeEventHandler<HTMLTextAreaElement> = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    if (onChange) onChange(e);
  };
  return (
    <div>
      {label && (
        <label htmlFor={name} className="block">
          {label} {required && <span className="text-error-base font-bold">*</span>}:
        </label>
      )}
      <textarea
        value={value}
        onChange={onChangeHandler}
        className={`w-full border border-stroke-default rounded px-5 py-3 min-w-[100px] ${
          isError ? 'border-error-base' : ''
        } outline-none focus:bg-accent-light-blue focus:border-accent-800`}
      />
      {helperText && helperText !== '' && (
        <small className={`block ${isError ? 'text-error-base' : 'text-content-placeholder'}`}>{helperText}</small>
      )}
    </div>
  );
};

export default TextField;

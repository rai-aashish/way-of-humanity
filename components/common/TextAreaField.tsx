import * as React from 'react';

interface TextAreaFieldProps {
  isError?: boolean;
  maxChars?: number;
  helperText?: string;
  name?: string;
  value?: string | number;
  label?: string | null;
  required?: boolean;
  textField?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextAreaField: React.FunctionComponent<TextAreaFieldProps> = ({
  isError,
  label,
  helperText,
  name,
  required,
  value,
  maxChars,
  onChange,
}) => {
  return (
    <div>
      {label && (
        <label htmlFor={name} className="block">
          {label} {required && <span className="text-error-base font-bold">*</span>}{' '}
          <small className="text-content-placeholder">(max:{maxChars}chars)</small>:
        </label>
      )}
      <textarea
        name={name}
        maxLength={maxChars ?? 255}
        value={value}
        onChange={onChange}
        className={`w-full border border-stroke-default rounded px-4 py-3 min-w-[100px] ${
          isError ? 'border-error-base' : ''
        } outline-none focus:bg-accent-light-blue focus:border-accent-800 focus:shadow-xl`}
      />
      {helperText && helperText !== '' && (
        <small className={`block ${isError ? 'text-error-base' : 'text-content-placeholder'}`}>{helperText}</small>
      )}
    </div>
  );
};

export default TextAreaField;

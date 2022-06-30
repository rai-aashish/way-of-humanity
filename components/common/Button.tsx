import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Url } from 'url';

interface ButtonProps {
  disabled?: boolean;
  variant?: 'lite' | 'solid' | 'outline' | 'outline-dark';
  size?: 'large' | 'medium' | 'small';
  icon?: JSX.Element;
  iconPosition?: 'left' | 'right';
  className?: string;
  type?: 'submit';
  asLink?: boolean;
  href?: Url | string;
  as?: Url | undefined;
  replace?: boolean | undefined;
  scroll?: boolean | undefined;
  shallow?: boolean | undefined;
  passHref?: boolean | undefined;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  size,
  variant,
  icon,
  iconPosition,
  type,
  className,
  asLink,
  as,
  href,
  replace,
  scroll,
  shallow,
  passHref,
  ...props
}) => {
  const [varaintClasses, setVariantClasses] = useState<string>('');
  const [isButtonPressed, setIsButtonPressed] = useState<boolean>(false);
  const buttonOnMouseLeave = () => setIsButtonPressed(false);

  let sizeClasses: string = '';

  //variant and button state determination
  useEffect(() => {
    switch (variant) {
      case 'lite':
        setVariantClasses(() =>
          disabled
            ? 'bg-accent-100 text-content-disabled cursor-not-allowed'
            : isButtonPressed
            ? 'border-accent-900 bg-accent-100 text-accent-900'
            : '' + 'bg-accent-50 text-accent-900 hover:bg-accent-100',
        );
        break;
      case 'solid':
        setVariantClasses(() =>
          disabled
            ? 'bg-backdrop-disabled text-content-disabled cursor-not-allowed'
            : isButtonPressed
            ? 'bg-accent-900 text-backdrop-white-100 border-accent-900'
            : 'bg-accent-700 text-backdrop-white-100 hover:bg-accent-800',
        );
        break;
      case 'outline':
        setVariantClasses(() =>
          disabled
            ? 'border-backdrop-disabled text-content-disabled cursor-not-allowed'
            : isButtonPressed
            ? 'text-accent-900 border-accent-900'
            : 'bg-transparent border-stroke-default text-accent-900 hover:border-accent-600',
        );
        break;
      case 'outline-dark':
        setVariantClasses(() =>
          disabled
            ? 'border-backdrop-white-60 text-backdrop-white-60 cursor-not-allowed'
            : isButtonPressed
            ? 'text-accent-900 bg-backdrop-light'
            : 'bg-transparent border-backdrop-white-100 text-backdrop-white-100 hover:bg-backdrop-white-100 hover:text-accent-900',
        );
        break;
    }
  }, [variant, disabled, isButtonPressed]);

  //size class determination
  switch (size) {
    case 'large':
      sizeClasses = 'px-6 py-4 text-[15px]';
      break;
    case 'medium':
      sizeClasses = 'px-6 py-4 text-[14px]';
      break;
    case 'small':
      sizeClasses = 'px-3 py-2 text-[14px]';
  }

  // handlers
  const buttonPressedHandler = () => setIsButtonPressed(() => true);
  const buttonReleasedHandler = () => setIsButtonPressed(() => false);

  //as next link
  if (asLink)
    return (
      <Link as={as} href={(href as Url) ?? ''} passHref={passHref} replace={replace} scroll={scroll} shallow={shallow}>
        <a
          className={`${
            disabled ? 'pointer-events-none' : ''
          } border font-medium border-transparent rounded ${varaintClasses} ${sizeClasses} ${className}`}
          {...props}
          onMouseDown={buttonPressedHandler}
          onMouseUp={buttonReleasedHandler}
          onMouseLeave={buttonOnMouseLeave}
          type={type}
        >
          <span
            className={`inline-flex gap-1 items-center justify-center ${
              iconPosition === 'left' ? 'flex-row' : 'flex-row-reverse'
            }`}
          >
            {icon} {children}
          </span>
        </a>
      </Link>
    );
  // as button
  else
    return (
      <button
        className={`border font-medium border-transparent rounded ${varaintClasses} ${sizeClasses} ${className}`}
        {...props}
        disabled={disabled}
        onMouseDown={buttonPressedHandler}
        onMouseUp={buttonReleasedHandler}
        onMouseLeave={buttonOnMouseLeave}
        type={type}
      >
        <span
          className={`inline-flex gap-1 items-center justify-center ${
            iconPosition === 'left' ? 'flex-row' : 'flex-row-reverse'
          }`}
        >
          {icon} {children}
        </span>
      </button>
    );
};

Button.defaultProps = {
  size: 'small',
  className: '',
  iconPosition: 'left',
};
export default Button;

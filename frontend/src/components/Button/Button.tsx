import React, { FC, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import cx from 'classnames';
import './button.scss';

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode | string;
  className?: string;
  disabled?: boolean;
  hierarchy?: 'primary' | 'secondary';
}

const Button: FC<ButtonProps> = props => {
  const {
    children,
    className,
    disabled = false,
    type,
    hierarchy = 'primary',
  } = props;

  return (
    <button
      {...props}
      className={cx(
        'btnXaxis',
        hierarchy === 'primary' ? 'btnXaxis__primary' : 'btnXaxis__secondary',
        className && className,
      )}
      disabled={disabled}
      type={type || 'button'}>
      {children}
    </button>
  );
};

export default Button;

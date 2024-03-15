import React, { FC, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import cx from 'classnames';
import './input.scss';

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
  disabled?: boolean;
  label?: string;
  value?: string;
}

const Input: FC<InputProps> = props => {
  const {
    type = 'text',
    label = '',
    disabled = false,
    className,
    onChange = () => {},
  } = props;
  return (
    <div className={cx('cntInput', className && className)}>
      {label && <label className="cntInput_label">{label}</label>}
      <input
        {...props}
        className={cx('cntInput_field', className && className)}
        type={type}
        disabled={disabled}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;

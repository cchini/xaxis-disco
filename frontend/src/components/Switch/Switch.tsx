import React from 'react';
import cx from 'classnames';
import './switch.scss';

export interface ISwitch
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  /** overwrite className */
  className?: string;
  /** label  checkbox */
  label?: React.ReactNode | string;
  ref?: any;
  /** name for interaction state */
  name: string;
}

const Switch: React.FC<ISwitch> = ({ label = '', ...props }: ISwitch) => {
  const { className, ref, name } = props;
  return (
    <div className={cx(className)}>
      {typeof label === 'string' ? <span>{label}</span> : label}
      <input className="checkSwitch" id={name} type="checkbox" ref={ref} />
      <label htmlFor={name} className="check-trail">
        <span className="check-handler"></span>
      </label>
    </div>
  );
};

export default Switch;

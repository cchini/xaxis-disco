import React, {
  FC,
  ReactNode,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from 'react';
import cx from 'classnames';
import './checkbox.scss';

export interface ICheckbox
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  /** overwrite className */
  className?: string;
  /** overwrite className in checkbox */
  classNameCheckbox?: string;
  /** label Left side checkbox */
  labelLeft?: ReactNode | string;
  /** label Right side checkbox */
  labelRight?: ReactNode | string;
  /** disabled state */
  disabled?: boolean;
  ref?: any;
}

const Checkbox: FC<ICheckbox> = ({
  labelLeft = '',
  labelRight = '',
  disabled = false,
  ...props
}: ICheckbox) => {
  const { className, classNameCheckbox, ref } = props;
  const isLabelLeftString = labelLeft && typeof labelLeft === 'string';
  const isLabelRightString = labelRight && typeof labelRight === 'string';
  return (
    <div
      className={cx(
        'componentCheck',
        disabled && 'componentCheck__disabled',
        className && className,
      )}>
      <label className="labelCheckbox">
        {isLabelLeftString ? (
          <span className="labelCheckbox_left">{labelLeft}</span>
        ) : (
          <>{labelLeft}</>
        )}
        <input
          {...props}
          className={cx(
            'labelCheckbox_checkbox',
            classNameCheckbox && classNameCheckbox,
          )}
          type="checkbox"
          disabled={disabled}
          ref={ref}
        />
        {isLabelRightString ? (
          <span className="labelCheckbox_right">{labelRight}</span>
        ) : (
          <>{labelRight}</>
        )}
      </label>
    </div>
  );
};

export default Checkbox;

import React, { FC } from 'react';
import Select, { Props } from 'react-select';
import cx from 'classnames';
import './select.scss';

type SelectProps = Props & {
  disabled?: boolean;
  activeMaxHeight?: boolean;
  emptyOptionsText?: string;
  label?: string;
  classNameSelect?: string;
};

const customStyles = {
  control: (values: any) => ({
    ...values,
    borderColor: '#c5c8cd',
  }),
  valueContainer: (values: any) => ({
    ...values,
    padding: '0 .5rem',
  }),
  menu: (provided: any) => ({
    ...provided,
    margin: '.25rem 0 0 0 ',
  }),

  option: (values: any) => ({
    ...values,
    padding: '.25rem .5rem',
    backgroundColor: '#fff',
  }),
  placeholder: (values: any) => ({
    ...values,
    fontSize: '.75rem',
    color: '#c5c8cd',
  }),
  indicatorSeparator: (values: any) => ({
    ...values,
    display: 'none',
  }),
};

const ReactSelect: FC<SelectProps> = ({
  isClearable = true,
  disabled = false,
  isLoading = false,
  activeMaxHeight = false,
  ...props
}: SelectProps) => {
  const {
    options,
    value,
    className,
    emptyOptionsText,
    label,
    classNameSelect,
  } = props;

  return (
    <div className={cx('cntSelect', className && className)}>
      <label className="cntSelect_label">{label}</label>
      <Select
        styles={customStyles}
        classNamePrefix="reactSelect"
        className={cx(
          'reactSelect',
          activeMaxHeight && 'reactSelect__maxHeightMenu',
          classNameSelect,
        )}
        value={value && value}
        isDisabled={disabled && disabled}
        options={options}
        isClearable={isClearable}
        noOptionsMessage={() =>
          emptyOptionsText ? `${emptyOptionsText}` : null
        }
        {...props}
      />
    </div>
  );
};

export default ReactSelect;

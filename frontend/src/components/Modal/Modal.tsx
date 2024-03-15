import React, { FC, ReactNode } from 'react';
import cx from 'classnames';
import './modal.scss';

interface ModalProps {
  active: boolean;
  onClose: () => void;
  header?: ReactNode;
  className?: string;
  children?: ReactNode;
}

const Modal: FC<ModalProps> = (props: ModalProps) => {
  const { active, children, header, className } = props;

  return (
    <article className={`modal ${active && 'modal--show'}`}>
      <section className={cx('modal_content', `${className && className}`)}>
        <header className={cx('modal_header')}>{header}</header>
        {children}
      </section>
    </article>
  );
};

export default Modal;

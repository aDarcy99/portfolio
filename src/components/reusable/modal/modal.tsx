import React, { FunctionComponent, KeyboardEvent, ReactNode } from 'react';
// Types

// Functions
import clsx from 'clsx';
import FocusLock from 'react-focus-lock';
// Components
import { Portal } from 'react-portal';
// Styles
import classes from './modal.module.scss';

export interface ModalProps {
  isOpen: boolean;
  node?: string;
  className?: string;
  onClose?: () => void;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  panelProps?: any;
}

/**
 * Generic modal component. To be used as a wrapper for specific modal components
 * eg: \<Modal>{your modal here}\</Modal>
 * @param {boolean} isOpen If modal should be shown
 * @param {('sm' | 'md' | 'lg')} size Size of modal (optional)
 * @param {string} node Classname of parent element in which Portal should be inserted into. Defaults to body
 * @param {string} className Custom styling for this component (optional)
 * @param {function} onClose Function to handle closing of modal
 * @param {object} panelProps props to be passed to panel element (optional)
 */
export const Modal = ({ children, className, node, isOpen, onClose, size = 'md', panelProps, ...props }: ModalProps) => {
  const onEscapeKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape' && onClose) {
      onClose();
    }
  };

  return isOpen ? (
    <Portal node={document && node ? document.getElementsByClassName(node)[0] : null}>
      <FocusLock returnFocus disabled={!isOpen}>
        <div role='dialog' aria-modal='true' className={clsx(classes['root'], !isOpen && classes['is-hidden'], classes[`size-${size}`], className)}>
          <div className={classes['overlay']} tabIndex={0} aria-label='Close modal' onClick={onClose} onKeyDown={onEscapeKeyDown} />
          <div {...panelProps} className={clsx(classes['panel'], panelProps?.className)}>{children}</div>
        </div>
      </FocusLock>
    </Portal>
  ) : null;
};

export default Modal;

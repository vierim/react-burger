import React from 'react';
import ReactDOM from 'react-dom';

import { IModalProps } from './interface';

import ModalOverlay from '../modal-overlay';

import styles from './modal.module.css';

const Modal: React.FC<IModalProps> = (props) => {
  const { header, children, closeModal } = props;
  
  const targetEl: HTMLElement | null = document.getElementById('react-modals');

  React.useEffect(() => {
    const handleKeyDown = (evt: KeyboardEvent) => {
      if (evt.code === 'Escape') closeModal();
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  return (
    <>
      {(targetEl !== null) &&
        ReactDOM.createPortal(
          <div className={styles.modal}>
            <ModalOverlay closeModal={closeModal} />
            <div className={styles.container + ' pt-10 pr-10 pb-15 pl-10'}>
              <button className={styles.closeButton} onClick={closeModal}></button>
              {header?.length && (
                <h2 className={'text text_type_main-large ' + styles.header}>
                  {header}
                </h2>
              )}
              {children}
            </div>
          </div>,
          targetEl
        )
      }
    </>
  );    
};

export default Modal;

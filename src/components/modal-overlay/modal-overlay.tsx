import { IModalOverlayProps } from './interface';

import styles from './modal-overlay.module.css';

const ModalOverlay = (props: IModalOverlayProps) => {
  const {closeModal} = props;

  return (
    <div className={styles.overlay} onClick={closeModal}></div>
  );
}

export default ModalOverlay;

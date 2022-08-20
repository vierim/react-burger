import { IModalOverlayProps } from './interface';

import styles from './modal-overlay.module.css';

const ModalOverlay: React.FC<IModalOverlayProps> = ({ closeModal }) => {
  return <div className={styles.overlay} onClick={closeModal}></div>;
};

export default ModalOverlay;

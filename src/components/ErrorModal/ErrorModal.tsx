import { FC } from 'react';
import ReactDOM from 'react-dom';

import Button from 'src/UI/Button/Button';
import './ErrorModal.scss';

interface ErrorModalProps {
  onClose?: () => void;
}

const ErrorModal: FC<ErrorModalProps> = ({ onClose }) => {
  const modalContent = (
    <div className='modal__overlay' onClick={onClose}>
      <div className='modal' role='dialog' onClick={(e) => e.stopPropagation()}>
        <h2 className='modal__title'>Oops...</h2>
        <p className='modal__message'>
          This page is still under development. Please check back later!
        </p>
        <Button onClick={onClose} view='default' text='Close' />
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

export default ErrorModal;

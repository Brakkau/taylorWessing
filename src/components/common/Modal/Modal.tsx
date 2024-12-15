import { useEffect } from 'react';
import './Modal.css'
import { Button } from '../Button/Button';

export const Modal = ({ isOpen, children, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: { keyCode: number; }) => {
      if (event.keyCode === 27) onClose();
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="overlay-container">
        {children}
        <Button onClick={onClose}>Back</Button>
      </div>
    </div>
  );
};

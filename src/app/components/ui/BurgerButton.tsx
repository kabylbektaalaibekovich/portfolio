'use client';

import { useHeaderStore } from '@/stores/useHeaderStore';
import scss from './BurgerButton.module.scss';

const BurgerButton = () => {
  const { isOpen, setIsOpen } = useHeaderStore();

  

  return (
    <button
      className={`${scss.BurgerButton} ${isOpen ? scss.open : ''}`}
      onClick={() => setIsOpen(!isOpen)} 
      
    >
      <div className={scss.content}>
        <div className={`${scss.line} ${scss.line1}`}></div>
        <div className={`${scss.line} ${scss.line2}`}></div>
        <div className={`${scss.line} ${scss.line3}`}></div>
      </div>

    </button>
  );
};

export default BurgerButton;

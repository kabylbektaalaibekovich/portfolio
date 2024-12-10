import scss from './BurgerMenu.module.scss';
import { Link as ScrollLink } from 'react-scroll';
import { links } from '@/constans/links';
import { useHeaderStore } from '@/stores/useHeaderStore';
import { IoLanguageOutline } from 'react-icons/io5';
import { useState } from 'react';

const BurgerMenu = () => {
  const { isOpen, toggleMenu } = useHeaderStore(); // Добавлено управление меню
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleMenuClose = () => {
    toggleMenu(); // Закрывает модальное меню
  };

  return (
    <div className={`${scss.BurgerMenu} ${isOpen ? scss.active : ''}`}>
      <div className={scss.content}>
        <nav className={scss.nav}>
          <ul>
            {links.map((item, index) => (
              <li key={index} className={scss.navItem}>
                <ScrollLink
                  to={item.to} 
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={handleMenuClose}
                >
                  <span>{item.name}</span>
                </ScrollLink>
              </li>
            ))}
            <div className={scss.language}>
              <span onClick={toggleDropdown}>Переключить язык</span>
              <button onClick={toggleDropdown} className={scss.languageBtn}>
                <IoLanguageOutline />
              </button>
            </div>
            {isDropdownOpen && (
              <ul className={scss.languageDropdown}>
                <li>
                  <button>KG</button>
                </li>
                <li>
                  <button>RU</button>
                </li>
                <li>
                  <button>EN</button>
                </li>
              </ul>
            )}
            <li className={scss.navItem}>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={scss.resumeButton}
                onClick={handleMenuClose} // Закрытие меню при клике на "Resume"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default BurgerMenu;

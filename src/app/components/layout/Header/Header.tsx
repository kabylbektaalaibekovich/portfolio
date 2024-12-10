'use client';

import { useEffect, useState } from 'react';
import scss from './Header.module.scss';
import { links } from '@/constans/links';
import BurgerButton from '../../ui/BurgerButton';
import BurgerMenu from '../../ui/BurgerMenu';
import { Link as ScrollLink } from 'react-scroll';
import { useHeaderStore } from '@/stores/useHeaderStore';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoLanguageOutline } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isMobile, setIsMobile] = useState(true);
  const { fixScroll } = useHeaderStore();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeIsMobile = () => {
    setIsMobile(window.innerWidth <= 1020);
  };

  useEffect(() => {
    changeIsMobile();
    window.addEventListener('resize', changeIsMobile);
    return () => {
      window.removeEventListener('resize', changeIsMobile);
    };
  }, []);

  const handleLanguageToggle = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsLanguageOpen(false);
    fixScroll();
    
  }
  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.left}>
            <div className={scss.logo}>
              <ScrollLink
                onClick={fixScroll}
                to="idWelcome"
                spy={true}
                smooth={true}
                offset={-300}
                duration={600}
              >
                <img
                  className={scss.logoImg}
                  src="https://cdn1.iconfinder.com/data/icons/andriod-app-logo/32/icon_k-512.png"
                  alt="logo"
                />
              </ScrollLink>
            </div>
          </div>
          <div className={scss.right}>
            {!isMobile ? (
              <>
                <nav className={scss.nav}>
                  <ul>
                    {links.map((item, index) => (
                      <li key={index}>
                        <ScrollLink
                          className={scss.link}
                          onClick={fixScroll}
                          activeClass={scss.active}
                          to={item.to}
                          spy={item.spy}
                          smooth={item.smooth}
                          offset={item.offset}
                          duration={item.duration}
                        >
                          {t(item.name)}
                        </ScrollLink>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div
                  className={scss.language}
                  onClick={handleLanguageToggle}
                >
                  <button className={scss.languageBtn} aria-expanded={isLanguageOpen}>
                    <IoLanguageOutline />
                  </button>
                  {isLanguageOpen && (
                    <ul className={scss.languageDropdown}>
                      <li>
                        <button onClick={() => handleLanguageChange('kg')}>KG</button>
                      </li>
                      <li>
                        <button onClick={() => handleLanguageChange('ru')}>RU</button>
                      </li>
                      <li>
                        <button onClick={() => handleLanguageChange('en')}>EN</button>
                      </li>
                    </ul>
                  )}
                </div>

                <div className={scss.resume}>
                  <a href="https://github.com/kabylbektaalaibekovich">
                    <button className={scss.resumeBtn}>{t('resume')}</button>
                  </a>
                  <FaRegUserCircle />
                </div>
              </>
            ) : (
              <>
                <BurgerButton />
                <BurgerMenu />
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

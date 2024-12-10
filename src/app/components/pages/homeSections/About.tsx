'use client';

import React, { useEffect, useRef, useState } from 'react';
import scss from './About.module.scss';
import Macos from '../../../assets/Macos.png'; // Import the image correctly
import { IoLocationOutline } from 'react-icons/io5';
import { RiMacbookLine } from 'react-icons/ri';

const About = () => {
  const text = ' FRONT-END WEB DEVELOPER ';
  const letters = text.split('');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null); // Указываем тип для ref

  const handleScroll = () => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []); 

  return (
    <section
      id="about"
      className={`${scss.aboutMe} ${isVisible ? scss.visible : ''}`}
      ref={sectionRef}
    >
      <div className="container">
        <div className={scss.content}>
          <div className={scss.imageSection}>
            <img src={Macos.src} alt="Workspace" className={scss.image} />
            <div className={scss.badge}>
              <div className={scss.badgeText}>
                {letters.map((letter, index) => (
                  <span
                    key={index}
                    style={{ '--i': index } as React.CSSProperties}
                  >
                    {letter === " " ? "" : letter}
                  </span>
                ))}
              </div>
              <span className={scss.emoji}><RiMacbookLine /></span>
            </div>
          </div>
          <div className={scss.textSection}>
            <h2 className={scss.title}>ABOUT ME</h2>
            <h3 className={scss.subtitle}>
              Experienced Front-End Developer from <br />
              Kyrgyzstan <span><IoLocationOutline /></span>
            </h3>
            <p className={scss.description}>
              As a Front-End developer, my skill set covers a wide range of
              technologies, including modern frameworks and UI/UX design
              principles. My primary objective is to create and maintain
              responsive and visually appealing websites with a focus on
              delivering seamless user experiences and ensuring optimal
              performance. My specialization lies in crafting dynamic and
              interactive user interfaces using clean and efficient code. I am
              also skilled in utilizing modern development tools and following
              best practices to deliver high-quality solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

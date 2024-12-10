'use client';
import { useEffect, useState } from 'react';
import scss from './Welcome.module.scss';
import Image from 'next/image';
import meeLogo from '../../../assets/mee.png';
import { GrInstagram } from "react-icons/gr";
import { FaSquareGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

const words = ["Designer", "Mobilograph", "Front-End developer", "Back-End developer"];
const techStackIcons = [
  { src: 'https://i.pinimg.com/originals/c6/18/ed/c618edb71c600432c13ebd6ef2a0c317.png' },
  { src: 'https://v1.elcho.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmac-os-icon.522b98c1.png&w=640&q=25', alt: '' },
  { src: 'https://v1.elcho.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhtml-icon.3bdbae36.png&w=640&q=25', alt: '' },
  { src: 'https://v1.elcho.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcss-icon.efcd8613.png&w=640&q=25', alt: '' },
  { src: 'https://v1.elcho.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjava-script-icon.a4e1a162.png&w=640&q=25', alt: '' },
  { src: 'https://v1.elcho.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Freact-icon.cd4a3653.png&w=640&q=25', alt: '' },
  { src: 'https://v1.elcho.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fredux-icon.50f1c238.png&w=640&q=25', alt: '' },
  { src: 'https://v1.elcho.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvite-icon.a3686851.png&w=640&q=25', alt: '' },
  { src: 'https://tsh.io/wp-content/uploads/2022/03/Next-logo-adj.png', alt: '' },
  { src: 'https://flowbite.s3.amazonaws.com/brand/logo-dark/mark/flowbite-logo.png', alt: '' },
  { src: 'https://v1.elcho.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnode-js-icon.c65aeace.png&w=640&q=25', alt: '' },
  { src: 'https://v1.elcho.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscss-icon.b18fa40c.png&w=640&q=25', alt: '' },
  { src: 'https://v1.elcho.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftype-script-icon.4ca749db.png&w=640&q=25', alt: '' },
  { src: 'https://v1.elcho.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnode-js-icon.c65aeace.png&w=640&q=25', alt: '' },
  { src: 'https://v1.elcho.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprisma.1ec4a520.png&w=640&q=25', alt: '' },
  { src: 'https://yt3.googleusercontent.com/NuBWxGpdF0YzNSr7x_Tc8EEFXbQoHc0Xf9rU_ehxFPRikw8YPN886HltWeMDihKU8v5SeKFI3B4=s900-c-k-c0x00ffffff-no-rj', alt: '' },
  { src: 'https://v1.elcho.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgit-icon.f6cf1da1.png&w=640&q=25', alt: '' },




 
];
const Welcome = () => {


  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const maxWordIndex = words.length - 1;

    const intervalId = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex === maxWordIndex ? 0 : prevIndex + 1));
        setFade(true);
      }, 400);

    }, 2000);

    return () => clearInterval(intervalId);
  }, []);
  

  return (

    
    <section id='idWelcome' className={scss.Welcome}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.changeText}>
            <h1 className={scss.textH1}>Hi, I'm Kabylbek</h1>
           <div className={scss.meeaboutText}>
           <h2 className={scss.textH2}>I AM A</h2>
            <h3 className={scss.textH3}>
              <span className={`${scss.word} ${fade ? scss.fadeIn : scss.fadeOut}`}>
                {words[currentWordIndex]}
              </span>
            </h3>
           </div>
            <p className={scss.description}>
              As an experienced Front-End developer, I bring designs to life with clean, efficient, 
               and scalable code.<br /> From intuitive user interfaces to seamless interactivity, I specialize 
               in creating responsive and engaging <br />web experiences that leave a lasting impression.
            </p>
            <div className={scss.infoBox}>
              <span className={scss.linkedin}><IoLogoLinkedin /></span>
              <span className={scss.gitHub}><FaSquareGithub /></span>
          <a href="https://www.instagram.com/taalaibekovichk?igsh=NmFkZXNpcDk3NDR5&utm_source=qr"> <span className={scss.insta}><GrInstagram /></span></a>
            </div>
          </div>
          <div className={scss.photoWrapper}>
  <img src={meeLogo.src} alt="Kabylbek" className={scss.photo} />
</div>
        
        </div>
            <section className={scss.techStack}>
        <h3>Tech Stack :</h3>
        <div className={scss.techIcons}>
          {techStackIcons.map((icon, index) => (
            <div key={index} className={scss.iconContainer}>
              <img src={icon.src} alt={icon.alt} className={scss.icon} />
            </div>
          ))}
        </div>
      </section>
     </div>
   
    </section>
  );
};

export default Welcome;

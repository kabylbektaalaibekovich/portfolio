import  scss from './Project.module.scss';
import iStore from '../../../assets/Снимок экрана 2024-11-17 194539.png'
import Exclusive from '../../../assets/exclusive.png'
import KFC from '../../../assets/KFC.png'
import DOM from '../../../assets/DOM.png'
import { FaGithub } from 'react-icons/fa6';



const Projeckts = () => {
    return (
        <section id='projects' className={scss.Projects}>
            <div className="container">
                <div className={scss.content}>
                  <h1 className={scss.content__title}>PROJECTS</h1>
                  <h4 className={scss.content__subtitle}>Each project is a unique piece of development !</h4>
               <div className={scss.Main}>
               <div className={scss.mainCard}>
                <div className={scss.card}>
      <h3 className={scss.title}>iStore  </h3>
      <p className={scss.description}>
        iStore is your one-stop  choice for accessories! iStore 
         is created for those who value
          technology and comfort. Our mission
           is to offer stylish and functional 
           solutions that are suitable for both
            newcomers to the IT world and experienced 
            users.</p>
  
      <div className={scss.technologies}>
        <span className={scss.tech}>NextJS</span>
        <span className={scss.tech}>TypeScript</span>
        <span className={scss.tech}>ReduxToolkit</span>
        <span className={scss.tech}>Tailwind</span>
        
      </div>
      <div className={scss.links}>
        <a href='https://github.com/kabylbektaalaibekovich/iStore' target="_blank" rel="noopener noreferrer" className={scss.link}>
        <FaGithub /> Code
        </a>
        <a href='/' target="_blank" rel="noopener noreferrer" className={scss.link}>
          Live Demo
        </a>
      </div>
               </div>
               <div className={scss.imageWrapper}>
        <img src={iStore.src} className={scss.image} />
      </div>
                </div>
                <div className={scss.mainCard}>
                <div className={scss.imageWrapper}>
        <img src={KFC.src} className={scss.image} />
      </div>
                <div className={scss.card}>
      <h3 className={scss.title}>K F C</h3>
      <p className={scss.description}>
      "Welcome to KFC – your go-to spot for crispy 
      chicken, tasty sides, and refreshing beverages.
       We’re dedicated to serving fresh, high-quality
        meals for any occasion, with the unmistakable
         taste of KFC to satisfy your cravings every time."

</p>
  
      <div className={scss.technologies}>
        <span className={scss.tech}>HTML</span>
        <span className={scss.tech}>CSS</span>
        <span className={scss.tech}>REACT</span>
      </div>
      <div className={scss.links}>
        <a href='https://github.com/kabylbektaalaibekovich/KFC-react' target="_blank" rel="noopener noreferrer" className={scss.link}>
        <FaGithub /> Code
        </a>
        <a href='/' target="_blank" rel="noopener noreferrer" className={scss.link}>
          Live Demo
        </a>
      </div>
               </div>
           
                </div>
                <div className={scss.mainCard}>
                <div className={scss.card}>
      <h3 className={scss.title}>Exclusive  </h3>
      <p className={scss.description}>
        iStore is your one-stop  choice for accessories! iStore 
         is created for those who value
          technology and comfort. Our mission
           is to offer stylish and functional 
           solutions that are suitable for both
            newcomers to the IT world and experienced 
            users.</p>
  
      <div className={scss.technologies}>
        <span className={scss.tech}>NextJS</span>
        <span className={scss.tech}>TypeScript</span>
        <span className={scss.tech}>ReduxToolkit</span>
        <span className={scss.tech}>SCSS</span>


      </div>
      <div className={scss.links}>
        <a href='https://github.com/Daniel27231203/store' target="_blank" rel="noopener noreferrer" className={scss.link}>
        <FaGithub /> Code
        </a>
        <a href='/' target="_blank" rel="noopener noreferrer" className={scss.link}>
          Live Demo
        </a>
      </div>
               </div>
               <div className={scss.imageWrapper}>
        <img src={Exclusive.src} className={scss.image} />
      </div>
                </div>
                <div className={scss.mainCard}>
                <div className={scss.imageWrapper}>
        <img src={DOM.src} className={scss.image} />
      </div>
                <div className={scss.card}>
      <h3 className={scss.title}>DOM</h3>
      <p className={scss.description}>
      "Welcome to our fast-food hub – your
       go-to spot for quick, delicious meals!
        Built with HTML, CSS, and JavaScript,
         this site offers a seamless way to 
         explore tasty options and satisfy 
         your cravings in no time. Fresh ingredients,
          fast service, and great taste – all
           in one place!"

</p>
  
      <div className={scss.technologies}>
        <span className={scss.tech}>HTML</span>
        <span className={scss.tech}>CSS</span>
        <span className={scss.tech}>JS</span>
      </div>
      <div className={scss.links}>
        <a href='https://github.com/kabylbektaalaibekovich/project-html-css-Js' target="_blank" rel="noopener noreferrer" className={scss.link}>
        <FaGithub /> Code
        </a>
        <a href='/' target="_blank" rel="noopener noreferrer" className={scss.link}>
          Live Demo
        </a>
      </div>
               </div>
           
                </div>
               </div>
                </div>
            </div>
        </section>
    );
};

export default Projeckts;
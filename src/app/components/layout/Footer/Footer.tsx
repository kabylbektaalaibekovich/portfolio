import React from 'react'
import scss from './Footer.module.scss'
import { ImLinkedin } from 'react-icons/im'
import { FaGithub, FaInstagram } from 'react-icons/fa6'
const Footer = () => {
  return (
    <footer id='footer' className={scss.Footer}>
        <div className="container">
            <div className={scss.content}>
              <div className={scss.footerCard}>
                <div className={scss.footer__card}>
                  <h3 className={scss.card___title}>Copyright © 2024-2025. All rights are reserved</h3>
                </div>
                <div className={scss.footer__card}>
                  <h3 className={scss.card___title}>Built with  by Next.TS</h3>
                </div>
                <div className={scss.footer__card}>
                  <a href=""  className={scss.linkIcon}><ImLinkedin /></a>
                  <a href="https://github.com/kabylbektaalaibekovich" className={scss.linkIcon}><FaGithub /></a>
                  <a href="" className={scss.linkIcon}><FaInstagram /></a>
                </div>
              </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer

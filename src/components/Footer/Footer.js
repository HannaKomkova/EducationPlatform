import FooterStyle from '../Footer/Footer.module.scss';
import  '../../index.scss';
import helloKitty from './footerImg/hello-kitty.svg';
import GT from './footerImg/GT.svg';
import youtube from './footerImg/youtube.svg';
import { Link } from 'react-router-dom';

function Footer(){
    return <>
    <footer>
          <div className="container">
            <div className={FooterStyle["footer-wrapper"]}>
              <div className={FooterStyle['footer-top']}>
                <div className={FooterStyle["footer-top-nav"]}>
                    <Link to={'/'} href="#">Home</Link>
                    <a href="#">Textbook</a>
                    <a href="#">Statistics</a>
                    <a href="#">Sprint</a>
                </div>
                <div className={FooterStyle["footer-top-list"]}>
                  <p>Alex</p>
                  <p>Gabriel</p>
                  <p>Marcus</p>
                </div>
              </div>
              <div className={FooterStyle["footer-bottom"]}>
                <div className={FooterStyle["footer-bottom-socials"]}>
                  <div className={FooterStyle["social-item"]}>
                    <img src={helloKitty}/>
                  </div>
                  <div className={FooterStyle["social-item"]}>
                    <img src={GT}/>
                  </div>
                  <div className={FooterStyle["social-item"]}>
                    <img src={youtube}/>
                  </div>
                </div>
                <p>
                ©2021 Hschool. Project for Hschool.
                </p>
              </div>
            </div>
          </div>
        </footer>
        </>
}

export default Footer;
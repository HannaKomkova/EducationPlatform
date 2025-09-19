import '../styles/Error.scss';
import helloKitty from '../img/hello-kitty.svg';
import GT from '../img/GT.svg';
import youtube from '../img/youtube.svg';
import ghost from '../img/ghost.svg';
import { Link } from 'react-router-dom';

function ErrorPage(){
    return <>
    <header className='error-page-header'>
      <div className="container">
        <div className="error-page-header-wrapper">
          <p className='logo'>Hschool</p>
          <div className="error-page-header-registration">
          <Link to={'/login'} className="login">Login →</Link>
          <Link to={'/register'} className="signUp">Sign Up</Link>
          </div>
        </div>
      </div>
    </header>
    <section className='error-page-hero'>
        <div className='container'>
            <div className='error-page-hero-wrapper'>
                 <div className='error-page-hero-description'>
                    <h2>
                    Error 404
                    </h2>
                    <h1>
                    Hey Buddy
                    </h1>
                    <p>
                    We can’t seem to find the page you are looking for.
                    </p>
                    <Link to={'/'} className='button'>Go home</Link>
                </div>
                <div className='error-page-hero-img'>
                     <img src={ghost}/>
                </div>
            </div>
        </div>

    </section>
    
    <footer className='error-page-footer'>
              <div className="container">
                <div className="error-page-footer-wrapper">
                  <div className='error-page-footer-top'>
                    <div className="error-page-footer-top-nav">
                        <Link to={'/'}>Home</Link>
                        <a href="#">Textbook</a>
                        <a href="#">Statistics</a>
                        <a href="#">Sprint</a>
                    </div>
                    <div className="error-page-footer-top-list">
                      <p>Alex</p>
                      <p>Gabriel</p>
                      <p>Marcus</p>
                    </div>
                  </div>
                  <div className="error-page-footer-bottom">
                    <div className="error-page-footer-bottom-socials">
                      <div className="social-item">
                        <img src={helloKitty}/>
                      </div>
                      <div className="social-item">
                        <img src={GT}/>
                      </div>
                      <div className="social-item">
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

export default ErrorPage
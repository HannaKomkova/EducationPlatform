import '../styles/login.scss';
import helloKitty from '../img/hello-kitty.svg';
import GT from '../img/GT.svg';
import youtube from '../img/youtube.svg';
import heroImg from '../img/hero-img.svg';
import { Link } from 'react-router-dom';

function LoginPage(){
    return <>
    <header className='login-page-header'>
      <div className="container">
        <div className="login-page-header-wrapper">
          <p className='logo'>Hschool</p>
          <div className="login-page-header-registration">
          <Link to={'/login'} className="login">Login →</Link>
          <Link to={'/register'} className="signUp">Sign Up</Link>
          </div>
        </div>
      </div>
    </header>
    <section className='login-page-hero'>
        <div className='container'>
            <div className='login-page-hero-wrapper'>
                <div className='login-page-hero-description'>
                    <h1> 
                    Login
                    </h1>
                    <input placeholder='Placeholder text'/>
                    <input placeholder='Placeholder text'/>
                    <Link to={'/login'} className='button'>Login</Link>
                </div>
                <div className='login-page-hero-img'>
                    <img src={heroImg}/>
                </div>
            </div>
        </div>
    </section>
    <footer className='login-page-footer'>
              <div className="container">
                <div className="login-page-footer-wrapper">
                  <div className='login-page-footer-top'>
                    <div className="login-page-footer-top-nav">
                        <Link to={'/'}>Home</Link>
                        <a href="#">Textbook</a>
                        <a href="#">Statistics</a>
                        <a href="#">Sprint</a>
                    </div>
                    <div className="login-page-footer-top-list">
                      <p>Alex</p>
                      <p>Gabriel</p>
                      <p>Marcus</p>
                    </div>
                  </div>
                  <div className="login-page-footer-bottom">
                    <div className="login-page-footer-bottom-socials">
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

export default LoginPage
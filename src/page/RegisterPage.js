import '../styles/register.scss';
import helloKitty from '../img/hello-kitty.svg';
import GT from '../img/GT.svg';
import youtube from '../img/youtube.svg';
import heroImg from '../img/hero-img.svg';
import { Link } from 'react-router-dom';

function RegisterPage(){
    return <div>
        <header className="register-header">
            <div className="container">
                <div className="register-header-wrapper">
                <p className='logo'>Hschool</p>
                <div className="register-header-registration">
                <Link to={'/login'} className="login">Login →</Link>
                <Link to={'/register'} className="signUp">Sign Up</Link>
                </div>
                </div>
            </div>
    </header>

    <section className='register-hero'>
        <div className='container'>
            <div className='register-hero-wrapper'>
                <div className='register-hero-description'>
                    <h1> 
                    Sign Up
                    </h1>
                    <input placeholder='Placeholder text'/>
                    <input placeholder='Placeholder text'/>
                    <input placeholder='Placeholder text'/>
                    <input placeholder='Placeholder text'/>
                    <a href='#' className='button'>Sign Up</a>
                </div>
                <div className='register-hero-img'>
                    <img src={heroImg}/>
                </div>
            </div>
        </div>
    </section>

    <footer className='register-footer'>
              <div className="container">
                <div className="register-footer-wrapper">
                  <div className='register-footer-top'>
                    <div className="register-footer-top-nav">
                        <Link to={'/'}>Home</Link>
                        <a href="#">Textbook</a>
                        <a href="#">Statistics</a>
                        <a href="#">Sprint</a>
                    </div>
                    <div className="register-footer-top-list">
                      <p>Alex</p>
                      <p>Gabriel</p>
                      <p>Marcus</p>
                    </div>
                  </div>
                  <div className="register-footer-bottom">
                    <div className="register-footer-bottom-socials">
                      <div className="register-social-item">
                        <img src={helloKitty}/>
                      </div>
                      <div className="register-social-item">
                        <img src={GT}/>
                      </div>
                      <div className="register-social-item">
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
    </div>
}

export default RegisterPage;
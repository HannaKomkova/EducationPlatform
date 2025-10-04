import LoginStyle from '../styles/login.module.scss';
import  '../index.scss';
import heroImg from '../img/hero-img.svg';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function LoginPage(){
    return <>
    <Header/>
    <section className={LoginStyle['login-page-hero']}>
        <div className='container'>
            <div className={LoginStyle['login-page-hero-wrapper']}>
                <div className={LoginStyle['login-page-hero-description']}>
                    <h1> 
                    Login
                    </h1>
                    <input placeholder='Placeholder text'/>
                    <input placeholder='Placeholder text'/>
                    <Link to={'/login'} className={LoginStyle.button}>Login</Link>
                </div>
                <div className={LoginStyle['login-page-hero-img']}>
                    <img src={heroImg}/>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    </>
}

export default LoginPage
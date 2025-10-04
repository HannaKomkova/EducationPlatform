import RegisterStyle from '../styles/register.module.scss';
import  '../index.scss';
import heroImg from '../img/hero-img.svg';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function RegisterPage(){
    return <div>
        <Header/>
    <section className={RegisterStyle['register-hero']}>
        <div className='container'>
            <div className={RegisterStyle['register-hero-wrapper']}>
                <div className={RegisterStyle['register-hero-description']}>
                    <h1> 
                    Sign Up
                    </h1>
                    <input placeholder='Placeholder text'/>
                    <input placeholder='Placeholder text'/>
                    <input placeholder='Placeholder text'/>
                    <input placeholder='Placeholder text'/>
                    <a href='#' className={RegisterStyle.button}>Sign Up</a>
                </div>
                <div className={RegisterStyle['register-hero-img']}>
                    <img src={heroImg}/>
                </div>
            </div>
        </div>
    </section>

    <Footer/>
    </div>
}

export default RegisterPage;
import ErrorStyle from '../styles/Error.module.scss';
import  '../index.scss';
import ghost from '../img/ghost.svg';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';


function ErrorPage(){
    return <>
    <Header/>
    <section className={ErrorStyle['error-page-hero']}>
        <div className='container'>
            <div className={ErrorStyle['error-page-hero-wrapper']}>
                 <div className={ErrorStyle['error-page-hero-description']}>
                    <h2>
                    Error 404
                    </h2>
                    <h1>
                    Hey Buddy
                    </h1>
                    <p>
                    We can’t seem to find the page you are looking for.
                    </p>
                    <Link to={'/'} className={ErrorStyle.button}>Go home</Link>
                </div>
                <div className={ErrorStyle['error-page-hero-img']}>
                     <img src={ghost}/>
                </div>
            </div>
        </div>

    </section>
    
    <Footer/>
    </>
}

export default ErrorPage
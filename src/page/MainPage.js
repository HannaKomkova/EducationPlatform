import '../styles/App.scss';
import platformImg from '../img/platform-img.svg';
import flash from '../img/flash.svg';
import sprint from '../img/sprint-img.svg';
import tasks from '../img/tasks-img.svg'
import playful from '../img/playful-img.svg';
import knowledge from '../img/knowledge-img.svg';
import progress from '../img/progress-img.svg';
import helloKitty from '../img/hello-kitty.svg';
import GT from '../img/GT.svg';
import youtube from '../img/youtube.svg';
import { Link } from 'react-router-dom';

function Main(){
  return (
  <>
    <header>
      <div className="container">
        <div className="header-wrapper">
          <p className='logo'>Hschool</p>
          <div className="header-registration">
            <Link to={'/login'} className="login">Login →</Link>
            <Link to={'/register'} className="signUp">Sign Up</Link>
          </div>
        </div>
      </div>
    </header>
    <main>
        <section className='platform'>
          <div className='container'>
            <div className='platform-wrapper'>
              <div className='platform-description'>
                <h2>E-COURSE PLATFORM</h2>
                <h1>Learning and teaching online, made easy.</h1>
                <p>Any subject, in any language, on any device, for all ages!</p>
                <a href='#'>About platform</a>  
                <div className='platformItem'>
                  <div className='platformItemTop'>
                        <div className='platformItemImg'>
                        <img src={flash}/>
                        </div>
                        <p>600 <span>+</span></p>
                        </div>
                  <div className='platformItemBottom'>
                    <p>Students</p>
                  </div>
                </div>
              </div>
              <div className='platform-img'>
                <img src={platformImg}/>
              </div>
            </div>
          </div>
        </section>
        <section className='playful'>
          <div className='container'>
            <div className='playful-wrapper'>
              <div className='playful-img'>
                <img src={playful}/>
              </div>
              <div className='description'>
                <h2>Learn a language in a playful way</h2>
                <p>Make learning programming languages more fun with mini-games</p>
                <div className='playful-items'>
                  <div className='item'>
                    <div className='sprint-img'>
                      <img src={sprint}/>
                    </div>
                    <a href='#' className='item-sprint'>Sprint →</a>
                  </div>
                  <div className='item'>
                    <div className='task-img'>
                      <img src={tasks}/>
                    </div>
                    <a href='#' className='item-task'>Tasks →</a>
                  </div>
                <div/>
              </div>
            </div>
          </div>
          </div>
        </section>
        <section className='knowledge'>
          <div className='container'>
            <div className='knowledge-wrapper'>
              <div className='description'>
                <h2>Increase your knowledge</h2>
                <p>Traditional and new effective approaches to learning languages</p>
                <a href="#" className='button'>Textbook →</a>
              </div>
              <div className='knowledge-img'>
                <img src={knowledge}/>
              </div>
            </div>
          </div>
        </section>
        <section className='progress'>
          <div className='container'>
            <div className='progress-wrapper'>
              <div className='progress-img'>
                <img src={progress}/>
              </div>
              <div className='description'>
                <h2>Watch your progress every day</h2>
                <p>Save statistics on your achievements and mistakes</p>
                <a href="#" className='button'>Statistics →</a>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="container">
            <div className="footer-wrapper">
              <div className='footer-top'>
                <div className="footer-top-nav">
                    <Link to={'/'} href="#">Home</Link>
                    <a href="#">Textbook</a>
                    <a href="#">Statistics</a>
                    <a href="#">Sprint</a>
                </div>
                <div className="footer-top-list">
                  <p>Alex</p>
                  <p>Gabriel</p>
                  <p>Marcus</p>
                </div>
              </div>
              <div className="footer-bottom">
                <div className="footer-bottom-socials">
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
    </main>
  </> )
  
}

export default Main;
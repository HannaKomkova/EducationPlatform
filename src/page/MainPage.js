import AppStyle from '../styles/App.module.scss';
import  '../index.scss';
import platformImg from '../img/platform-img.svg';
import flash from '../img/flash.svg';
import sprint from '../img/sprint-img.svg';
import tasks from '../img/tasks-img.svg'
import playful from '../img/playful-img.svg';
import knowledge from '../img/knowledge-img.svg';
import progress from '../img/progress-img.svg';

import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function Main(){
  return (
  <>
  <Header/>
    <main>
        <section className={AppStyle.platform}>
          <div className='container'>
            <div className={AppStyle['platform-wrapper']}>
              <div className={AppStyle['platform-description']}>
                <h2>E-COURSE PLATFORM</h2>
                <h1>Learning and teaching online, made easy.</h1>
                <p>Any subject, in any language, on any device, for all ages!</p>
                <a href='#'>About platform</a>  
                <div className={AppStyle.platformItem}>
                  <div className={AppStyle.platformItemTop}>
                        <div className={AppStyle.platformItemImg}>
                        <img src={flash}/>
                        </div>
                        <p>600 <span>+</span></p>
                        </div>
                  <div className={AppStyle.platformItemBottom}>
                    <p>Students</p>
                  </div>
                </div>
              </div>
              <div className={AppStyle['platform-img']}>
                <img src={platformImg}/>
              </div>
            </div>
          </div>
        </section>
        <section className={AppStyle.playful}>
          <div className='container'>
            <div className={AppStyle['playful-wrapper']}>
              <div className={AppStyle['playful-img']}>
                <img src={playful}/>
              </div>
              <div className={AppStyle.description}>
                <h2>Learn a language in a playful way</h2>
                <p>Make learning programming languages more fun with mini-games</p>
                <div className={AppStyle['playful-items']}>
                  <div className={AppStyle.item}>
                    <div className={AppStyle['sprint-img']}>
                      <img src={sprint}/>
                    </div>
                    <a href='#' className={AppStyle['item-sprint']}>Sprint →</a>
                  </div>
                  <div className={AppStyle.item}>
                    <div className={AppStyle['task-img']}>
                      <img src={tasks}/>
                    </div>
                    <a href='#' className={AppStyle['item-task']}>Tasks →</a>
                  </div>
                <div/>
              </div>
            </div>
          </div>
          </div>
        </section>
        <section className={AppStyle.knowledge}>
          <div className='container'>
            <div className={AppStyle['knowledge-wrapper']}>
              <div className={AppStyle.description}>
                <h2>Increase your knowledge</h2>
                <p>Traditional and new effective approaches to learning languages</p>
                <a href="#" className={AppStyle.button}>Textbook →</a>
              </div>
              <div className={AppStyle['knowledge-img']}>
                <img src={knowledge}/>
              </div>
            </div>
          </div>
        </section>
        <section className={AppStyle.progress}>
          <div className='container'>
            <div className={AppStyle['progress-wrapper']}>
              <div className={AppStyle['progress-img']}>
                <img src={progress}/>
              </div>
              <div className={AppStyle.description}>
                <h2>Watch your progress every day</h2>
                <p>Save statistics on your achievements and mistakes</p>
                <a href="#" className={AppStyle.button}>Statistics →</a>
              </div>
            </div>
          </div>
        </section>
        
    </main>
    <Footer/>
  </> )
  
}

export default Main;
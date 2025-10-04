import CoursesPageStyle from '../styles/CoursesPage.module.scss';
import  '../index.scss';
import { Link } from 'react-router-dom';
import HeaderSignOut from '../components/Header-Sign-Out/Header-Sign-Out.js';
import Footer from '../components/Footer/Footer';
import GraduationHat from '../img/fluent_hat-graduation.svg';
import JSCoursesImg from '../img/JS-courses.svg';
import TSCoursesImg from '../img/TS-courses.svg';
import PythonCoursesImg from '../img/Python-courses.svg';


function ErrorPage(){
    return <>
    <HeaderSignOut/>
        <main>
            <section className={CoursesPageStyle.courses}>
                <div className='container'>
                    <div className={CoursesPageStyle['courses-wrapper']}>
                        <div className={CoursesPageStyle['courses-title']}>
                            <img src={GraduationHat}/>
                            <h1>Courses</h1>
                        </div>
                    <div className={CoursesPageStyle['courses-list-items']}>
                        <div className={CoursesPageStyle['courses-item']}>
                            <div className={CoursesPageStyle['courses-item-img']}>
                                <img src={JSCoursesImg}/>
                            </div>
                            <div className={CoursesPageStyle['courses-item-description']}>
                                <h2>
                                JavaScript
                                </h2>
                                <p>
                                JavaScript is a practical course where students learn the basics of JavaScript. It covers variables, operators, conditionals, loops, functions, and data manipulation.
                                </p>
                            </div>
                        </div>
                        <div className={CoursesPageStyle['courses-item']}>
                            <div className={CoursesPageStyle['courses-item-img']}>
                                <img src={TSCoursesImg}/>
                            </div>
                            <div className={CoursesPageStyle['courses-item-description']}>
                                <h2>
                                TypeScript
                                </h2>
                                <p>
                                TypeScript is a course that provides an introduction to TypeScript. Students will learn about TypeScript's key features, such as type annotations, interfaces, classes, and modules
                                </p>
                            </div>
                        </div>
                        <div className={CoursesPageStyle['courses-item']}>
                            <div className={CoursesPageStyle['courses-item-img']}>
                                <img src={PythonCoursesImg}/>
                            </div>
                            <div className={CoursesPageStyle['courses-item-description']}>
                                <h2>
                                Python
                                </h2>
                                <p>
                                Students will learn about variables, data types, conditionals, loops, functions, and file handling. Through hands-on exercises and projects, students will gain proficiency in writing Python code and solving real-world problems.
                                </p>
                            </div>
                        </div>
                    </div>   
                    </div>
                </div>
            </section>
        </main>
    <Footer/>
    </>
}

export default ErrorPage
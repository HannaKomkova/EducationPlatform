import HeaderStyle from '../Header/Header.module.scss';
import  '../../index.scss';
import { Link } from 'react-router-dom';


function Header(){
    return <>
    <header>
      <div className='container'>
        <div className={HeaderStyle["header-wrapper"]}>
          <p className={HeaderStyle.logo}>Hschool</p>
          <div className={HeaderStyle["header-registration"]}>
            <Link to={'/login'} className={HeaderStyle.login}>Login →</Link>
            <Link to={'/register'} className={HeaderStyle.signUp}>Sign Up</Link>
          </div>
        </div>
      </div>
    </header>
    </>
}


export default Header;

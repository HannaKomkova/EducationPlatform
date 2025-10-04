import HeaderSignOutStyle from '../Header-Sign-Out/Header-Sign-Out.module.scss';
import  '../../index.scss';
import { Link } from 'react-router-dom';


function Header(){
    return <>
    <header>
      <div className='container'>
        <div className={HeaderSignOutStyle["header-wrapper"]}>
          <p className={HeaderSignOutStyle.logo}>Hschool</p>
          <div className={HeaderSignOutStyle["header-registration"]}>
            <Link to={'/login'} className={HeaderSignOutStyle.SignOut}>Sign Out→</Link>
          </div>
        </div>
      </div>
    </header>
    </>
}


export default Header;

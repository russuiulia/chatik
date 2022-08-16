import classes from './MainNavigation.module.css'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';
const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const logoutHandler = () => {
    authCtx.logout();
  }
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        Chatik
      </div>
      <nav className={classes.nav}>
        <ul>
          {!isLoggedIn && (<li><NavLink to='/auth' activeClassName={classes.active}>Login</NavLink></li>)}
          {isLoggedIn && (<li><NavLink to='/' onClick={logoutHandler}>Logout</NavLink></li>
          )}
        </ul>
      </nav>

    </header>
  )
}
export default MainNavigation;
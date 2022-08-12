import classes from './MainNavigation.module.css'
import { NavLink } from 'react-router-dom'
const MainNavigation = () => {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        Chatik
      </div>
      <nav className={classes.nav}>
        <ul>
          <li><NavLink to='/login' activeClassName={classes.active}>Login</NavLink></li>
        </ul>
      </nav>

    </header>
  )
}
export default MainNavigation;
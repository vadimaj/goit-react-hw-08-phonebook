import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={css['authNav-container']}>
      <NavLink to="register" className={css['authNav-link']}>
        Sign Up
      </NavLink>
      <NavLink to="login" className={css['authNav-link']}>
        Log in
      </NavLink>
    </div>
  );
};

export default AuthNav;

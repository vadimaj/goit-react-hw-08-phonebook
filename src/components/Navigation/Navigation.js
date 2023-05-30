import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={css['navigation-container']}>
      <div className={css.logo}>
        <NavLink to="/" className={css.logo}>
          PhoneBook
        </NavLink>
      </div>

      <NavLink to="/phonebook" className={css['navlink']}>
        Manage your contacts
      </NavLink>
    </nav>
  );
};
export default Navigation;

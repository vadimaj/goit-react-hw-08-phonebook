import { useSelector, useDispatch } from 'react-redux';
import css from './UserMenu.module.css';
import authSelectors from '../../redux/authSelectors';
import { logoutUser } from '../../redux/authOperations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(authSelectors.getUserEmail);
  const logOutHandler = () => {
    dispatch(logoutUser());
  };

  return (
    <div className={css['usermenu-container']}>
      <p className={css['usermenu-text']}>{userEmail}</p>
      <button className={css.logoutbtn} onClick={logOutHandler}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;

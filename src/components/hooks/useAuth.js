import { useSelector } from 'react-redux';
import authSelectors from '../../redux/authSelectors';
export const useAuth = () => {
  return {
    isLoggedIn: useSelector(authSelectors.getIsLoggedIn),
    isRefreshing: useSelector(authSelectors.getRefreshingStatus),
    email: useSelector(authSelectors.getUserEmail),
  };
};

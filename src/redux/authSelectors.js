const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserEmail = state => state.auth.user.email;
const getRefreshingStatus = state => state.auth.isRefreshing;

const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  getRefreshingStatus,
};

export default authSelectors;

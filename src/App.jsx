import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from './redux';
import { useAuth } from 'components/hooks/useAuth';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import SharedLayout from 'pages/SharedLayout';
const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('./pages/Register'));
const Login = lazy(() => import('./pages/Login'));
const Phonebook = lazy(() => import('./components/Phonebook'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth;
  useEffect(() => {
    dispatch(authOperations.refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    'Updating page...'
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path="register"
          element={
            <RestrictedRoute component={Register} redirectTo="/phonebook" />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute component={Login} redirectTo="/phonebook" />
          }
        />

        <Route
          path="phonebook"
          element={<PrivateRoute component={Phonebook} redirectTo="/login" />}
        />
      </Route>
    </Routes>
  );
};

export default App;

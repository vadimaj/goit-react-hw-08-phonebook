import { useState } from 'react';
import { useDispatch } from 'react-redux';
import css from '../RegisterForm/RegisterForm.module.css';
import { authOperations } from '../../redux';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = evt => {
    const {
      currentTarget: { name, value },
    } = evt;
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(authOperations.loginUser(userData));
    reset();
  };
  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div className={css['register-container']}>
      <form className={css['register-form']} onSubmit={handleSubmit}>
        <h2 className={css['register-title']}>Log in</h2>
        <div className={css['register-form-wrap']}>
          <input
            type="email"
            name="email"
            className={css['form-input']}
            value={email}
            onChange={handleInputChange}
            placeholder="Enter email"
            required
          />
          <input
            type="password"
            name="password"
            className={css['form-input']}
            value={password}
            onChange={handleInputChange}
            placeholder="Enter password"
            required
          />
          <button type="submit" className={css.regbtn}>
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

import { useState } from 'react';
import { useDispatch } from 'react-redux';

import css from './RegisterForm.module.css';
import { authOperations } from '../../redux';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = evt => {
    const {
      currentTarget: { name, value },
    } = evt;

    switch (name) {
      case 'name':
        return setName(value);
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
      name,
      email,
      password,
    };
    console.log(userData);
    dispatch(authOperations.registerUser(userData));
    reset();
  };
  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={css['register-container']}>
      <form className={css['register-form']} onSubmit={handleSubmit}>
        <h2 className={css['register-title']}>Free registration</h2>
        <div className={css['register-form-wrap']}>
          <input
            type="text"
            name="name"
            className={css['form-input']}
            value={name}
            onChange={handleInputChange}
            placeholder="Enter your name"
          />

          <input
            type="email"
            name="email"
            className={css['form-input']}
            value={email}
            onChange={handleInputChange}
            placeholder="Enter email"
          />
          <input
            type="password"
            name="password"
            className={css['form-input']}
            value={password}
            onChange={handleInputChange}
            placeholder="Enter password"
          />
          <button type="submit" className={css.regbtn}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;

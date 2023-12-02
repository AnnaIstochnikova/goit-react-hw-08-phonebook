import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { login } from 'redux/auth/operations';

export const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      login({
        email,
        password,
      })
    );
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <>
          <h3>Email</h3>
          <input
            autoComplete="username"
            type="text"
            name="email"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <h3>Password</h3>
          <input
            autoComplete="current-password"
            type="password"
            name="password"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button className="button--submit" type="submit">
            Login
          </button>
        </>
      </form>
    </>
  );
};

Login.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  h3: PropTypes.string,
  onSubmit: PropTypes.func,
  dispatch: PropTypes.func,
};

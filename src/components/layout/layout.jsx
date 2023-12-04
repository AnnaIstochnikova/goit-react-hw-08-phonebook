import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

import { useAuth } from 'hook/useAuth';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { Link, LayoutStyled } from 'components/layout/layout.styled';

const RoutesByAuthorization = () => {
  const { isLoggedIn, user } = useAuth();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  };

  return isLoggedIn ? (
    <>
      <button>{user.email}</button>
      <button onClick={handleClick}>Logout</button>
      <Link to="/contacts">Contacts</Link>
    </>
  ) : (
    <>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </>
  );
};

export const Layout = () => {
  return (
    <>
      <LayoutStyled>
        <nav>
          <Link to="/">Home</Link>
          <RoutesByAuthorization />
        </nav>
        <Outlet />
      </LayoutStyled>
    </>
  );
};

RoutesByAuthorization.propTypes = {
  isLoggedIn: PropTypes.bool,
  dispatch: PropTypes.func,
  handleClick: PropTypes.func,
  input: PropTypes.string,
};

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { useAuth } from 'hook/useAuth';
// import Loader from '../../components/phonebook/Loader/loader';
import { Link, LayoutStyled } from 'components/layout/layout.styled';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';
// import { logout } from 'redux/auth/operations';

const RoutesByAuthorization = () => {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  };

  return isLoggedIn ? (
    <>
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
          {/* <Suspense fallback = {<Loader/>}> */}
          {/* </Suspense> */}
        </nav>
        <Outlet />
      </LayoutStyled>
    </>
  );
};

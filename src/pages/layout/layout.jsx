import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import Loader from '../../components/phonebook/Loader/loader';
import { Link, LayoutStyled } from 'components/phonebook/layout/layout.styled';
import { useAuth } from 'hook/useAuth';

export const Layout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <LayoutStyled>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          {isLoggedIn && <Link to="/contacts">Contacts</Link>}
          {/* <Suspense fallback = {<Loader/>}> */}

          {/* </Suspense> */}
        </nav>
        <Outlet />
      </LayoutStyled>
    </>
  );
};

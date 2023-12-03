import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
// import { selectIsLoggedIn } from '../redux/reducers/auth/selectors';
// import { selectUser } from 'redux/auth/selectors';
// import { selectUsers } from 'redux/contacts/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  //   const user = useSelector(selectUsers);
  return {
    isLoggedIn,
    // user,
  };
};

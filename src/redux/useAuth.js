import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// prettier-ignore
import { selectUser, selectIsLoggedIn } from '../redux/authSelector';

export const useAuth = () => {
    //  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUser);
    
//     useEffect(() => {
//     const token = localStorage.getItem('authToken');
//     if (token) {
//       // Optionally validate token or get user data
//       dispatch(setUserLoggedIn(true)); // Example action to update state
//     }
//   }, [dispatch]);

  return {
    isLoggedIn,

    user,
  };
};
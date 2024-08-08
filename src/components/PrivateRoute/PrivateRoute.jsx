import { Navigate } from 'react-router-dom';
import { useAuth } from '../../redux/useAuth';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

// so that the user cannot access the phonebook page by manually typing the contacts route in the web URL

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  // we are negating the isLoggedIn to make sure that everytime the isLoggedIn variable is false, the private route will force the React router to navigate back to the login page

  // if isLoggedIn is false , shouldRedirect is true
  // if isLoggedIn is true, shouldRedirect is false
  const shouldRedirect = !isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};

// if isLoggedIn is false and shouldRedirect is true, the application will force us to navigate to the login page
// if isLoggedIn is true and shouldRedirect is false, the private route will show us the home page/ contacts page

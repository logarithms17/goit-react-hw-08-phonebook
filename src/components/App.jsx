import SharedLayout from '../Shared/SharedLayout';
import HomePage from '../pages/HomePage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import ContactsPage from 'pages/ContactsPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../redux/authOperations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    console.log(token);
    if (token) {
      console.log('entered localstorage');
      // Optionally dispatch refreshUser to validate and fetch user data
      dispatch(refreshUser());
    }
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />

        {/* CONTACTS PAGE IS RESTRICTED AND IS ONLY ACCESSIBLE BY SUCCESSFULLY REGISTERING IN THE REGISTER PAGE */}
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={RegisterPage} />
          }
        />
        {/* CONTACTS PAGE IS RESTRICTED AND IS ONLY ACCESSIBLE BY SUCCESSFULLY LOGGING IN THE LOGIN PAGE */}
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={LoginPage} />
          }
        />
      </Route>
      {/* CONTACTS PAGE IS PRIVATE AND IS REDIRECTED TO LOGIN PAGE IF USER IS NOT AUTHENTICATED*/}
      <Route
        path="/contacts"
        element={<PrivateRoute redirectTo="/login" component={ContactsPage} />}
      />
    </Routes>
  );
};

export default App;

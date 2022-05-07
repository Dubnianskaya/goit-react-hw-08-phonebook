import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from 'pages';
import { AppBar } from './AppBar/AppBar';
import { authOperations, authSelectors } from 'redux/auth';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const createChunk = componentName => {
  return lazy(() =>
    import(`../pages/${componentName}`).then(module => ({
      default: module[componentName],
    }))
  );
};

const Register = createChunk('Register');
const Login = createChunk('Login');
const Contacts = createChunk('Contacts');

export const App = () => {
  const dispatch = useDispatch();
  const isLoadingUser = useSelector(authSelectors.getIsLoadingCurrentUser)


  useEffect(() => {
    dispatch(authOperations.refreshUser());
  }, [dispatch])

  return (
    !isLoadingUser && (
    <Routes>
      <Route path="/" element={<AppBar />}>
       <Route index element={
        <PublicRoute restricted navigateTo="/contacts">
          <HomePage />
        </PublicRoute>} />
        <Route path="register" element={
        <PublicRoute restricted navigateTo="/contacts">
          <Register />
        </PublicRoute>} />
        <Route path="login" element={
        <PublicRoute restricted navigateTo="/contacts">
          <Login />
        </PublicRoute>} />
        <Route path="contacts" element={
        <PrivateRoute>
          <Contacts />
        </PrivateRoute>}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
    )
  );
};
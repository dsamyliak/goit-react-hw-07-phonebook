import { Layout } from '../Layout/Layout';
import { LoginPage, DashboardPage, PhonebookPage, HomePage } from 'pages';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Layout />
            <HomePage />
          </>
        }
      >
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/phonebook" element={<PhonebookPage />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Route>
    </Routes>
  );
};

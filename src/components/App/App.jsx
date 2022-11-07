import { Layout } from '../Layout/Layout';
import { LoginPage, DashboardPage, PhonebookPage, HomePage } from 'pages';
import { Route, Routes, Navigate } from 'react-router-dom';

export const App = () => {
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

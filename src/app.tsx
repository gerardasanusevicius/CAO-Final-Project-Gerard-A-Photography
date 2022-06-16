import React from 'react';
import {
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import './app.css';

import { useRootSelector, useRootDispatch } from './store/hooks';
import { selectAuthLoading, selectAuthLoggedIn, selectAuthToken } from './store/selectors';
import { createAuthenticateActionThunk } from './store/action-creators';

// all
import LandingPage from './pages/landing-page';
import PortfolioPage from './pages/portfolio-page';
import AboutPage from './pages/about-page';
import ContactPage from './pages/contact-page';
import PicturePage from './pages/picture-page';
// visitor
import LoginPage from './pages/login-page';
// admin
import AdminPage from './pages/admin-page';

import MainLayout from './components/layouts/main-layout';
import AdminLayout from './components/layouts/admin-layout';

import RequireAuth from './routing/require-auth';
import RequireVisitor from './routing/require-visitor';

const App: React.FC = () => {
  const location = useLocation();
  const token = useRootSelector(selectAuthToken);
  const loggedIn = useRootSelector(selectAuthLoggedIn);
  const loading = useRootSelector(selectAuthLoading);
  const dispatch = useRootDispatch();

  if (!loggedIn && token) {
    if (!loading) {
      dispatch(createAuthenticateActionThunk(token, location.pathname));
    }
    return <div />;
  }

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route element={<MainLayout />}>
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="portfolio/:id" element={<PicturePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contacts" element={<ContactPage />} />
      </Route>
      <Route element={<AdminLayout />}>
        <Route
          path="login"
          element={(
            <RequireVisitor>
              <LoginPage />
            </RequireVisitor>
        )}
        />
        <Route
          path="/admin"
          element={(
            <RequireAuth>
              <AdminPage />
            </RequireAuth>
        )}
        />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
export default App;

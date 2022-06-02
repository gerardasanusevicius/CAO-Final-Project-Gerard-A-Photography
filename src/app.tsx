import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import './app.css';

import AboutPage from './pages/about-page';
import ContactPage from './pages/contact-page';
import LandingPage from './pages/landing-page';
import PortfolioPage from './pages/portfolio-page';
import ProjectsPage from './pages/projects-page';
import LoginPage from './pages/login-page';
import AdminPage from './pages/admin-page/admin-page';

import MainLayout from './components/layouts/main-layout';
import RequireAuth from './routing/require-auth';
import RequireVisitor from './routing/require-visitor';

import store from './store';
import AdminLayout from './components/layouts/admin-layout';
import PicturePage from './pages/picture-page';

const App: React.FC = () => (
  <BrowserRouter>
    <ReduxProvider store={store}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<MainLayout />}>
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="portfolio/:id" element={<PicturePage />} />
          <Route path="projects" element={<ProjectsPage />} />
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
    </ReduxProvider>
  </BrowserRouter>
);
export default App;

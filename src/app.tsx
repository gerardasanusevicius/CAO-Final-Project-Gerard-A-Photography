import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './app.css';

import AboutPage from './pages/about-page';
import ContactPage from './pages/contact-page';
import LandingPage from './pages/landing-page';
import PortfolioPage from './pages/portfolio-page';
import ProjectsPage from './pages/projects-page';
import LoginPage from './pages/login-page';
import AdminPage from './pages/admin-page/admin-page';
import ReduxTestPage from './pages/redux-test-page';

import MainLayout from './components/main-layout';
import RequireAuth from './routing/require-auth';

import store from './store';

const App: React.FC = () => (
  <BrowserRouter>
    <ReduxProvider store={store}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<MainLayout />}>
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contacts" element={<ContactPage />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route
          path="/admin"
          element={(
            <RequireAuth>
              <AdminPage />
            </RequireAuth>
        )}
        />
        <Route
          path="/reduxtest"
          element={(
            <RequireAuth>
              <ReduxTestPage />
            </RequireAuth>
        )}
        />
      </Routes>
    </ReduxProvider>
  </BrowserRouter>
);
export default App;

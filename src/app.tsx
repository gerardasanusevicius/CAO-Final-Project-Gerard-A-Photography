import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import AboutPage from './pages/about-page';
import ContactPage from './pages/contact-page';
import LandingPage from './pages/landing-page';
import PortfolioPage from './pages/portfolio-page';
import LoginPage from './pages/login-page';
import AdminPage from './pages/admin-page/admin-page';

import MainLayout from './components/main-layout';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route element={<MainLayout />}>
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contacts" element={<ContactPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
export default App;

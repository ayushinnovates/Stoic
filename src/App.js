import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import VaultPage from './pages/VaultPage';
import MarketplacePage from './pages/MarketplacePage';
import StoicClubPage from './pages/StoicClubPage'; // Import the new StoicClubPage
import { UserProvider } from './contexts/UserContext';

const App = () => {
  console.log("Custom App.js is running");
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/vault" element={<VaultPage />} />
          <Route path="/marketplace" element={<MarketplacePage />} />
          <Route path="/stoic-club" element={<StoicClubPage />} /> {/* Added StoicClubPage route */}
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import Assets from './assets/Assets';
import Payment from './payment/Payment';

import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

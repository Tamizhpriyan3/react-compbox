import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ComplaintsProvider } from './components/ComplaintsContext';
import { MessagesProvider } from './components/MessagesContext';
import Dashboard from './components/Dashboard';
import FormComponent from './components/FormComponent';
import EscalationPeriod from './components/EscalationPeriod';
import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/About';
import Contact from './components/Contact';
import ChartComponent from './components/ChartComponent';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import Confirmation from './components/Confirmation';
import ViewComplaints from './components/ViewComplaints';

// import AdminSignup from './components/AdminSignup';
import './App.css';

function App() {
  return (
    <ComplaintsProvider>
      <MessagesProvider>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/form" element={<FormComponent />} />
              <Route path="/escalation-period" element={<EscalationPeriod />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/charts" element={<ChartComponent />} />
              <Route path="/admin-login" element={<AdminLogin />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/confirmation" element={<Confirmation />} />
              <Route path="/admin-login" element={<AdminLogin />} />
              <Route path="/view-complaints" element={<ViewComplaints />} />
              {/* <Route path="/admin-signup" element={<AdminSignup />} /> */}
            </Routes>
          </div>
        </Router>
      </MessagesProvider>
    </ComplaintsProvider>
  );
}

export default App;

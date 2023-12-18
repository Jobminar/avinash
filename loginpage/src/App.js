import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import LoginPage from './Login/LoginPage';
import HomePage from './Home/HomePage';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/home" component={HomePage} />
        <Route path="/" component={LoginPage} /> */}
        <Route path="/home" element={<HomePage/>} />
        <Route path="/" element={<LoginPage/>} />
      </Routes>
    </Router>
  );
};

export default App;

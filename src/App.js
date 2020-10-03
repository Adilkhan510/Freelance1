import React from 'react';
import { Navbar } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './globalStyles'
function App() {
  return (
    <div className="App">

      <Router>
        <GlobalStyles />
        <Navbar />
      </Router>
    </div>
  );
}

export default App;

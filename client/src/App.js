import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/nav.component';
import Landing from './components/landing.component';
import Login from './components/login.component';
import Register from './components/register.component';
import Logout from './components/logout.component';


function App() {
  return (
    <Router>
      <Nav />
      <div className="container">
        <Route path='/' exact component={Landing} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
        <Route path='/logout' exact component={Logout} />
      </div>
    </Router>
  );
}

export default App;

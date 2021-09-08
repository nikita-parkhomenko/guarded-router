import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './pages/home';
import Header from './components/header'
import Protected from './pages/protected';
import Unprotected from './pages/unprotected';
import GuardedRoute from './components/guarded-route';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  console.log ('user logged in ', isAuthenticated);
  return <Router>
    <Header login={login} logout={logout} />
    <Switch>
      <Route exact path='/' component={Home} />
      <GuardedRoute path='/protected' component={Protected} auth={isAuthenticated} />
      <Route path='/unprotected' component={Unprotected} />
    </Switch>
  </Router>;
}

export default App;

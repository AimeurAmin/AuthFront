import React from 'react';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';


function App() {
  return (
    <div className="App">
      <Router>
        
        <Route
          render = { ({ location }) => (
            <div>
              {/* <Header location={location}></Header> */}
              <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                  <Route path='/Signup' component={Signup}></Route>
                  <Route path='/Login' component={Login}></Route>
                  <Route path='/' exact component={Home}></Route>
                </Switch>
              </AnimatePresence>
            </div>
          )}
        />
      </Router>

    </div>
  );
}

export default App;

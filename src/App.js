import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import version from '../package.json';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import './App.css';

function App() {
  const menu = () => {

  }
  return (
    <div className='App'>
       <Router>
       <Navbar/>
       <div className = 'right-content'>
         <Switch>
          <Route exact path="/portfolio" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/skills" component={Skills}/> 

          {/* <Route path="*" component={NotFound} /> */}
          </Switch>
          </div>
        </Router>
    </div>
  );
}

export default App;

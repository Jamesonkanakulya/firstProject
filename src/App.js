import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Rooms } from './pages/Rooms';

import { Errorpage } from './pages/Errorpage';
import Singleroom from './pages/Singleroom';

import{Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar';


function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      
      <Route exact path="/" component={Home}/>
      <Route exact path="/rooms" component={Rooms}/>
      <Route exact path="/rooms/:slug" component={Singleroom}/>
      <Route  component={Errorpage}/>

    </Switch>

    
    
    </>
  );
}

export default App;

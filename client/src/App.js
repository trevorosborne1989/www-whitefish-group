import React from 'react';
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Meetings from './pages/Meetings';
import Whiteboard from './pages/Whiteboard';
import DistributionList from './pages/DistributionList';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="navBar">
        <NavLink to="/" exact>Home</NavLink>
        <NavLink to="/meetings" exact>Meetings</NavLink>
        <NavLink to="/whiteboard" exact>Whiteboard</NavLink>
        <NavLink to="/distribution-list" exact>Distribution</NavLink>
      </div>
      <header className="App-header">

        {/**** Routes *****/}
        <Route path="/" exact component={Home} />
        <Route path="/meetings" exact component={Meetings} />
        <Route path="/distribution-list" exact component={DistributionList} />
        <Route path="/whiteboard" exact component={Whiteboard} />

      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;

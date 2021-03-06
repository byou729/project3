import React, { Component } from 'react';


import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Menu/components/Navbar";
import Chicken from "./Menu/components/pages/Chicken";
import Beef from "./Menu/components/pages/Beef";
import Sides from "./Menu/components/pages/Sides";
import Dessert from "./Menu/components/pages/Dessert";

//import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
      <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Chicken} />
        <Route exact path="/beef" component={Beef} />
        <Route exact path="/sides" component={Sides} />
        <Route exact path="/dessert" component={Dessert} />
      </div>
    </Router>

      </div>
    );
  }
}

export default App;

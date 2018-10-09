import React, { Component } from 'react';
<<<<<<< HEAD


=======
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Chicken from "./components/pages/Chicken";
import Beef from "./components/pages/Beef";
import Sides from "./components/pages/Sides";
import Dessert from "./components/pages/Dessert";
//import './App.css';
>>>>>>> b7f122300f2d44c557f24a68688891e5de9915c4

class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
=======
      <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Chicken} />
        <Route exact path="/beef" component={Beef} />
        <Route exact path="/sides" component={Sides} />
        <Route exact path="/dessert" component={Dessert} />
      </div>
    </Router>
>>>>>>> b7f122300f2d44c557f24a68688891e5de9915c4
      </div>
    );
  }
}

export default App;

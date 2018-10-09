import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Chicken from "./components/pages/Chicken";
import Beef from "./components/pages/Beef";
import Sides from "./components/pages/Sides";
<<<<<<< HEAD
import Dessert from "./components/pages/Dessert";
=======
import Dessert from "./components/pages/Desserts";
>>>>>>> master
//import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Chicken} />
        <Route exact path="/beef" component={Beef} />
        <Route exact path="/sides" component={Sides} />
        <Route exact path="/dessert" component={Dessert} />
      </div>
    </Router>
<<<<<<< HEAD

      

=======
>>>>>>> master
      </div>
    );
  }
}

export default App;

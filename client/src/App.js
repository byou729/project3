import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Menu/components/Navbar";
import Chicken from "./Menu/components/pages/Chicken";
import Beef from "./Menu/components/pages/Beef";
import Sides from "./Menu/components/pages/Sides";
import Dessert from "./Menu/components/pages/Dessert";
//Form Customization Modules
import Categories from './Form/components/pages/Categories';
import Items from './Form/components/pages/Items';

//import './App.css';

const App = () => (
  <Router> 
      <Switch>
      <Route exact path="/" component={Chicken} />
      <Route exact path="/beef" component={Beef} />
      <Route exact path="/sides" component={Sides} />
      <Route exact path="/dessert" component={Dessert} />


      {/* Form Customization Paths */}
      <Route exact path="/cats" component={Categories} />
      <Route exact path="/cust/:id" component={Items} />
      </Switch>
  </Router>
);
export default App;
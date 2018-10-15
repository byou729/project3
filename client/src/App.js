import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Categories from './Form/components/pages/Categories';

//import './App.css';

const App = () => (
  <Router> 
      <Switch>
      <Route exact path="/" component={Categories} />
      <Route exact path="/:id" component={Categories} />
      </Switch>
  </Router>
);
export default App;
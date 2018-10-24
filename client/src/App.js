import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Menu/components/Navbar";
import Chicken from "./Menu/components/pages/Chicken";
import Beef from "./Menu/components/pages/Beef";
import Sides from "./Menu/components/pages/Sides";
import Dessert from "./Menu/components/pages/Dessert";
//Form Customization Modules
import Categories from './Form/components/pages/Categories';
import Items from './Form/components/pages/Items';
import fire from "./config/Fire";
import Login from "./Form/components/Login";

//import './App.css';

class App extends Component {

   constructor(props) {
    super(props);
    this.state = ({
      user: null,
    });
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      //console.log(user);
      if (user) {
        this.setState({ user });      
      } else {
        this.setState({ user: null });    
      }
    });
  }

  render() {
    return(
      
        <Router> 
            
        
              <Switch>
              <Route exact path="/" component={Chicken} />
              <Route exact path="/beef" component={Beef} />
              <Route exact path="/sides" component={Sides} />
              <Route exact path="/dessert" component={Dessert} />

              {/* Authentication Path */}
              {this.state.user ? (<Categories />) : (<Login />)}
              <Route exact path="/login" component={Login} />
              


              {/* Form Customization Paths */}
              <Route exact path="/cats" component={Categories} />
              <Route exact path="/cust/:id" component={Items} />
              </Switch>
            
        </Router> 
      
    );
  }
}

// const App = () => (
//   <Router> 
//       <Switch>
//       <Route exact path="/" component={Chicken} />
//       <Route exact path="/beef" component={Beef} />
//       <Route exact path="/sides" component={Sides} />
//       <Route exact path="/dessert" component={Dessert} />

//       {/* Authentication Path */}
//       <Route exact path="/login" component={} />


//       {/* Form Customization Paths */}
//       <Route exact path="/cats" component={Categories} />
//       <Route exact path="/cust/:id" component={Items} />
//       </Switch>
//   </Router> 
// );
export default App;
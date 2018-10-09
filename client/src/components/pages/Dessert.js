import React from "react";
import Containers from '../Containers'
import {withRouter} from 'react-router-dom'

const Dessert= () => (
  <div>
    <h1>Menu</h1>
    <Containers />  
  </div>
);

export default withRouter(Dessert);
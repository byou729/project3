import React, {Component    } from "react";
import MenuItem from './MenuItem';
import Chicken from "../../src/Chicken.json"
import Beef from "../../src/Beef.json"
import Sides from "../../src/Sides.json"
import Dessert from "../../src/Dessert.json"
import {withRouter} from 'react-router-dom'
// import API from "../utils/Api"

//import the utils folder with your axios request here - import api fromfjklsafjdads;l

// api (axios) request to get the data => as an array of objects;
// inside utils/api.js will hold axios request to the backend routes;


class Containers extends Component {
    state = {
        /*data from api request(database) goes here - this is where you set the current state from the (get) data you get back from the database after making the axios get request*/ 
        //array: ["hello", "goodbye", "soolonnnnnng","Moebro"],
        //data from Database will be an array of objects, each object will be a menu item with a name, image, price, and description
        //dataFromDatabase: [],
        //chickenItems: ["classic chicken burger", "chicken and cheese sandwich", "chicken wings"]
        //beefItems: ["classic beef burger", "chewy beef", "beef taco" ],
        //sideItems: ["fries", "onion rings", "baked potato"]
        data: [],
    }
    // api request to get the data => array of objects;
    // inside utils/api.js will hold axios request to the backend routes;
    //use api.getData.then() here which will get the data back from the database here and send it to the dataFromDatabase array & then set that array to the current state
    // Now map through and display that data by putting the following in the render section in the div - {this.state.dataFromDatabase.map((el) => (<MenuItem key={el.key} name={el.name} image={} price={} description={}/>))}
    //{this.state.chickenItems.map(chickenItem => (<MenuItem name={chickenItem}/>))}
    componentDidMount() {
        switch(this.props.match.path) {
            case '/':
            this.setState({data: Chicken})
            break;

            case "/beef":
            this.setState({data: Beef});
            break;

            case "/sides":
            this.setState({data: Sides});
            break;

            case "/dessert":
            this.setState({data: Dessert})
        }
        
        
    }
     render() {
        console.log(this.state.data)

        return (
            <div>
                        
                {this.state.data.map(Item => (
                    <MenuItem key={Item.id} name={Item.name} image={Item.image} price={Item.price} description={Item.description}/>
                ))}
                
            </div>
        )
    }
}
//if on chicken page loop through chicken.json, if on beef page loop through beef.json
//or if on chicken page loop through every item in the chicken category (has a category value of chicken)
export default withRouter(Containers);






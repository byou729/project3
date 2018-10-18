import React, {Component    } from "react";
import MenuItem from './MenuItem';
//import Chicken from "../../Menu/Chicken.json"
//import Beef from "../../Menu/Beef.json"
//import Sides from "../../Menu/Sides.json"
//import Dessert from "../../Menu/Dessert.json"
import {withRouter} from 'react-router-dom'
import API from "../../utils/API"

class Containers extends Component {
    state = {
        /*data from api request(database) goes here*/
        data: [],
    }

    componentWillMount() {

        API.findItemsByCategory(this.props.category).then(res =>{
            this.setState({data: res.data})
        })

        // switch(this.props.match.path) {
        //     case '/':
        //     API.getChickenItems().then(res =>{
        //         this.setState({data: res.data})
        //     })
        //     break;

        //     case '/beef':
        //     API.getBeefItems().then(res =>{
        //         this.setState({data: res.data})
        //     })
        //     break;

        //     case '/sides':
        //     API.getSidesItems().then(res =>{
        //         this.setState({data: res.data})
        //     })
        //     break;

        //     case '/dessert':
        //     API.getDessertItems().then(res =>{
        //         this.setState({data: res.data})
        //     })
        //     break;
        // }
    
    }
    
    // componentDidMount() {
    //     switch(this.props.match.path) {
    //         case '/':
    //         this.setState({data: Chicken})
    //         break;

    //         case "/beef":
    //         this.setState({data: Beef});
    //         break;

    //         case "/sides":
    //         this.setState({data: Sides});
    //         break;

    //         case "/dessert":
    //         this.setState({data: Dessert})
    //     }    
        
    // }


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

export default withRouter(Containers);






import React, {Component,Fragment} from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import { Link, withRouter } from "react-router-dom";
import Div from '../../../components/div';
import Form from '../../../components/Form';
import Button from '../../../components/button';
import DeleteBtn from '../../../components/DeleteBtn';
import Label from '../../../components/label';
import Input from '../../../components/input';
import './App.css';
import API from '../../../../utils/API';



//sortableItem function with value passed into it to call it within JSX
const SortableItem = SortableElement(({value,onClick}) =>
  //{value} = arrayElements
  <div className='col-lg-3 d-inline-block m'>
    <button id={value._id} className='delete-btn float-left d-inline-block' name='editCat' onClick={onClick}>✎</button>
    <button id={value._id} className='delete-btn float-right d-inline-block' name='deleteCat' onClick={onClick}>x</button> 
    <h1 key={value._id} className='shadow bg-light display-1 inline-block'>{value.category}</h1>
  </div>
);

//sortableList functions with itemsArray passed into it using .map to list each element
const SortableList = SortableContainer(({items,onClick}) => 
    <div className='d-flex justify-content-center'>
      {items.map((value, index) => (
        <SortableItem key={`cat-${index}`} id={value.id} index={index} value={value} onClick={onClick}/>
      ))}
    </div>
);

//Class App that has methods and render method
class CustomCats extends Component {
  constructor(props){
    super(props)
    this.state = {
      //updating items with the 
      items: [],
      //updating category state via input handle change 
      category:[],
  
      menuItems:[]

    };
    //Logging state on update
    console.log(this.state.category);
  }
    //When components mount call load categories function
    componentDidMount() {
      this.loadCats();
    }

    //Load categories function
    loadCats = () =>{
      API.getCats()
      .then(res =>{
        console.log(res.data);
        this.setState({items:res.data,menuItems:res.data})
      })
      .catch(err => console.log(err));
    }
    
    //Saving Category function
    addCat = (e)=>{
      e.preventDefault();
      let category = this.state.category[0]
      console.log(category);
      console.log(this.state.items.length);
      API.saveCat(
            {
              category:category,
              sortOrder:this.state.items.length+6
            }
            ).then(res=> this.loadCats())
      e.target.reset();
    }
    
    //Delete Category by _id
    deleteCat = (data)=>{
      const {id} = data.target;
      API.deleteCat(id)
        .then(res=> this.loadCats())
        .catch(err => console.log(err));
    }

    //Edit Category by _id
      editCat = (e)=>{
        console.log(e.target.id)
        this.props.history.push('/cust/' + e.target.id)
        console.log(this.props) 
      }
      //Display Category
      displayCat = ()=>{

        return(
        <Fragment>
        <Div className='container'>
          <Div className='row'>
            <Div className='form-group'>
              <Form onSubmit={this.addCat}>
                <Label for='category'>Category:
                <Input type='text' className='form-control'name='category' onChange={this.handleChange}/>
                </Label> 
                <Input id='submit' type='submit' value='+'/>
              </Form>
            </Div>
          </Div>
        </Div>
        <Div className='container-fluid'>
          <Div className='row d-flex justify-content-center align-content-center'>
            <Div className='displayChg d-flex justify-content-center align-content-center'>
            <SortableList axis='x' items={this.state.items} onSortEnd={this.onSortEnd} 
              onClick={(data)=>{data.target.name === 'deleteCat' ? this.deleteCat(data):this.editCat(data)}}/>
            </Div>
          </Div>
        </Div>
        </Fragment>
        )
      }

    //handleChange functions
    handleChange = data=>{
      const {name,value} = data.target;
      console.log(value);
      this.setState({
        [name]:[value]
      })
    }

  //sort end method taking in oldIndex and newIndex values
  onSortEnd = ({oldIndex, newIndex}) => {
    //updating the state after sorting ends
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    })
    //logging the updated state to verify state position
    console.log(this.state.items,oldIndex,newIndex);
  };
  render() {

    return (

      <Fragment>
        {this.displayCat()}
      </Fragment>
    )
  }
}

export default withRouter(CustomCats);

/*

- CatDetailPage
assign db_id to key prop (key prop = catDB_id) so admin can use onclick delete & edit function on each category. DONE

  on delete remove category by invoking deleteCat(). - DONE

  on click of pencil icon it will hit the route "/api/categories/:id" to render catdata and its menuItems
    - create input with placholder = res.data[0].category with button to save ()=>{update catNamefunction} (NTH)

    MenuItems FORM:

    Create a form that allows user to capture user's menuItem input {itemName:"",itemDesc.:"",itemPic:"", itemPrice:"$", catId:catFK} 3
      on menuItem form save it will submit the formdata to db creating new menuItem with cat_id = :/id 4
        reload the data with catName, menuItems

        Initial State = {
          categories: [{...}] //DB DATA
          items: [] //shuffling of menuItems as NTH
        }


*/
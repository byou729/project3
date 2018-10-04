import React, {Component,Fragment} from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import Div from './components/div';
import Form from './components/Form';
import Button from './components/button';
import Label from './components/label';
import Input from './components/input';
import './App.css'
import Menu from './menu.json'

//empty array to push objects into it
const Categories = []
console.log(SortableContainer);
//function to push objects that will be invoked onSave event
const insertCat = ()=>{
  Menu.map(e=>{
    return Categories.push(e.name); 
  })
}

//invoking the push objects function
insertCat();

//sortableItem function with value passed into it to call it within JSX
const SortableItem = SortableElement(({value}) =>
  //{value} = arrayElements
  <div className='col-lg-12'>
    <h1 key={value} className='shadow bg-light p-3 display-1 d-inline-block'>{value}</h1>
    <i className="fas fa-pencil-alt ml-5"></i>
    <button className='delete d-inline-block ml-5' onClick={this.deleteCat}>X</button>
  </div>
  // <div className='row'>
  // <h1 className='text-center shadow-lg p-3 display-1'>{value}</h1>
  // </div>
  
);

//sortableList functions with itemsArray passed into it using .map to list each element
const SortableList = SortableContainer(({items}) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`cat-${index}`} index={index} value={value} />
      ))}
    </ul>
  );
});

//Class App that has methods and render method
export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      items: [],
      category:[],
      categories:[],
      dbItems:[]
    };
    //Logging state on update
    console.log(this.state);
  }

      //Display Category
      displayCat = ()=>{
        return(
        <Div className='container'>
          <Div className='row'>
            <Div className='form-group'>
              <Form onSubmit={this.addCat}>
                <Label for='category'>Category:
                <Input type='text' className='form-control'name='category' onChange={this.handleChange}/>
                </Label><br/>  
                <Input type='submit' value='Add +'/>
              </Form>
            </Div>
          </Div>
        </Div>
        )
      }

          //Saving Category function
    addCat = (e)=>{
      e.preventDefault();
      this.setState({
        categories:[...this.state.categories,...this.state.category],
        items:[...this.state.items,...this.state.category]
      },
      ()=>{console.log(this.state.items)}) 
      e.target.reset();
    }

    //handleChange functions
    handleChange = data=>{
      const {name,value} = data.target;
      console.log(value);
      this.setState({
        [name]:[value]
      })
    }

    //Delete Category
    deleteCat = (index)=>{
      console.log(index);
    }
  //sort end method taking in oldIndex and newIndex values
  onSortEnd = ({oldIndex, newIndex}) => {
    //updating the state after sorting ends
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    })
    //logging the updated state to verify state position
    console.log(this.state.items);
  };
  render() {

    return (

    <Fragment>
      {this.displayCat()}
    <Div className='container'>
      <Div className='row'>
        <Div className='form-group m-3'>
          <Div className='displayChg'>
          <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />
          </Div>
        </Div>
      </Div>
    </Div>
    </Fragment>  
    )
  }
}
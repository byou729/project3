import React, {Component,Fragment} from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import { Link } from "react-router-dom";
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
  <div className='col-lg-3 d-inline-block'>
    {/* <Form onSubmit={onSubmit}> */}
    {/* <a href={'/'+value._id} id={value._id} name='editCat' onClick={onClick}>✎</a> */}
    {/* </Form> */}
    {/* <button id={value._id} className='inline-block' type='submit' onSubmit={onSubmit}>✎</button> */}
    
    <h2 key={value._id} className='shadow bg-light p-3 display-6 inline-block'>{value.category}</h2>
    <button id={value._id} className='delete-btn d-inline-block ml-5' name='editCat' onClick={onClick}>✎</button>
    <button id={value._id} className='delete-btn d-inline-block ml-5' name='deleteCat' onClick={onClick}>X</button> 
     
    {/* <button id={value._id} className='delete-btn d-inline-block ml-5' onClick={onClick}>X</button> */}
  </div>
);

//sortableList functions with itemsArray passed into it using .map to list each element
const SortableList = SortableContainer(({items,onClick}) => 
    <div className='d-inline-block'>
      {items.map((value, index) => (
        <SortableItem key={`cat-${index}`} id={value.id} index={index} value={value} onClick={onClick}/>
      ))}
    </div>
);

//Class App that has methods and render method
export default class Customization extends Component {
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
              sortOrder:this.state.items.length
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
        // this.props.history.push('/' + e.target.id)
        // console.log(this.props.match.params)
        const {id} = e.target;
        console.log('catid',id)
        API.getCat(id)
          .then(res=>{

            if(res.data.menuItem.length){
              res.data.menuItem.map((e,i,arr)=>{
                // console.log(i,e);
                API.getItem(e)
                  .then(res =>this.setState({
                    menuItems:[...this.state.menuItems,res.data]
                  }
                    
                  ))
              })
            } else{
              return console.log('no item data found')
            }

          }
   
            )

        // this.setState({displayCat:!this.state.displayCat},()=>{console.log(this.state.displayCat)});//Mohammed to search for the resolution
        //grabbing the id of clicked cat
        // const {id} = e.target;
        //invoke api to get cat by its id and set the categories: res.data
          //then res.data.map {
            /*
              create dom with 
                e.menuItem.map(
                  h1 catName
                  form
                  title input,price input,desc.input, pictureinput and save'submit' button
                  )

                'Save' button will call the Api.post route creating menu item. 
                    then {
                      loadItems() [similar to loadCats but set the items state to ]
                    }
            */
          //}
        
        // console.log(id)
        
      }
      //Display Category
      displayCat = ()=>{

        return(
        <Fragment>
        <Div className='container-fluid'>
          <Div className='row'>
            <Div className='form-group'>
              <Form onSubmit={this.addCat}>
                <Label for='category'>Category:
                <Input type='text' className='form-control'name='category' onChange={this.handleChange}/>
                </Label><br/>  
                <Input id='submit' type='submit' value='Add +'/>
              </Form>
            </Div>
          </Div>
        </Div>
        <Div className='row d-flex justify-content-center align-content-center'>
          <Div className='displayChg d-flex justify-content-center align-content-center'>
          <SortableList axis='x' items={this.state.items} onSortEnd={this.onSortEnd} 
            onClick={(data)=>{data.target.name === 'deleteCat' ? this.deleteCat(data):this.editCat(data)}}/>
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
    console.log(this.state.items);
  };
  render() {

    return (

      <Fragment>
        {this.displayCat()}

        <br/>
        
        {this.state.menuItems.map((e,i)=>{
          return (
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-3'>
                <h2 className='itemName text-left display-2' key={i}>{e.name}</h2>
              </div>
              <div className='col-3'>
                <img className='itemPic text-center' src={e.image} key={i}/>
              </div>
              <div className='col-3'>
                <h5 className='itemPrice text-center display-5' key={i}>{e.price}</h5>
              </div>
              <div className='col-3'>
                <p className='itemDesc text-center display-6' key={i}>{e.description}</p>
              </div>
            </div>
            

          </div>  
          
          

          )
        })}

      </Fragment>
    )
  }
}

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
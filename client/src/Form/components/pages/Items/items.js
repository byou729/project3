
import React, {Component,Fragment} from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import {withRouter} from 'react-router-dom';
import Div from '../../../components/div';
import Form from '../../../components/Form';
import MenuItem from './MenuItem';
import Label from '../../../components/label';
import Input from '../../../components/input';
import API from '../../../../utils/API';


//sortableItem function with value passed into it to call it within JSX
const SortableItem = SortableElement(({value,onClick}) =>
  //{value} = arrayElements
  <div className='col-lg-12 d-block'>
    <button id={value._id} className='delete-btn' name='deleteItem' onClick={onClick}>x</button> 
    {/* <h2 key={value._id} className='shadow bg-light p-3 display-6 inline-block'>{value.category}</h2> */}
    <MenuItem key={value._id} name={value.name} image={value.image} price={value.price} description={value.description}/>
  </div>
);

//sortableList functions with itemsArray passed into it using .map to list each element
const SortableList = SortableContainer(({items,onClick}) => 
    <div className='d-block'>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} id={value.id} index={index} value={value} onClick={onClick}/>
      ))}
    </div>
);


class CustomItems extends Component {

    constructor(props){
        super(props)

        this.state = {

            name:'',
            category: '',
            description: '',
            image:'',
            price: '',
            items: []
        }
    }

    componentWillMount() {
            console.log(this.props.match.params.id);
                //load items fn
                API.getCat(this.props.match.params.id)
                .then(res =>{
                    // console.log(res.data);
                    this.setState({category:res.data.category})
                        
                   console.log(this.state.category)
                    res.data.menuItem.map(itemId=>{
                        console.log(itemId);
                        API.getItem(itemId)
                        .then(res=>{
                            console.log(res.data)
                            this.setState({
                                items:[...this.state.items,res.data]
                            })
                        })
                    })
                    
                })
    }



    //addItem fn
    addItem = (e)=>{
        e.preventDefault();
        let category = this.state.category
        console.log(category);
        console.log(this.state);
        API.saveItem(
              {
                name:this.state.name,
                category: category,
                description:this.state.description,
                image:this.state.image,
                price:this.state.price,
                sortOrder:100
              }
              ).then(res=> {
                API.updateCat(this.props.match.params.id,res.data._id)
                    .then(res=>{
                        console.log(res.data);
                    })
              })

        e.target.reset();
      }

    //deleteItem fn


    // handleChange functions
    handleChange = data=>{
        const {name,value} = data.target;
        console.log(name,value);
        this.setState({
          [name]:value,
        })
      }


    //onSortEnds fn:

      //sort end method taking in oldIndex and newIndex values
        onSortEnd = ({oldIndex, newIndex}) => {
            //updating the state after sorting ends
            this.setState({
            items: arrayMove(this.state.items, oldIndex, newIndex),
            })
            //logging the updated state to verify state position
            console.log(oldIndex,this.state.items,newIndex);
        };

     render() {
        
        return (
            
            <div>
                <Div className='container-fluid'>
                <Div className='row d-flex justify-content-center'>
                
                    <Form onSubmit={this.addItem}>
                    <Label for='Item'>Item:
                    <Input type='text' className='form-control'name='name' onChange={this.handleChange}/>
                    </Label> 
                    <Label for='Image'>Image:
                    <Input type='file' className='form-control'name='image' onChange={this.handleChange}/>
                    </Label> 
                    <Label for='Price'>Price:
                    <Input type='text' className='form-control'name='price' onChange={this.handleChange}/>
                    </Label> 
                    <Label for='Description'>Description:
                    <textarea className='form-control'name='description' onChange={this.handleChange}/>
                    </Label> 
                    <Input id='submit' type='submit' value='Add Item'/>
                    </Form>
                </Div>
                </Div>
                <br/>
                <div className='row d-flex justify-content-center'>
                    <h1 className='display-2 text-center'>{this.state.category}</h1>
                </div>
                    
                <div className='row d-flex justify-content-center'>
                    <SortableList items={this.state.items} onSortEnd={this.onSortEnd} 
                    onClick={(data)=>{this.deleteItem(data)}}/>         
                        {/* {this.state.items.map(Item => (
                            <MenuItem key={Item.id} name={Item.name} image={Item.image} price={Item.price} description={Item.description}/>
                        ))} */}
                </div>
            </div>
        )
    }
}

export default withRouter(CustomItems);






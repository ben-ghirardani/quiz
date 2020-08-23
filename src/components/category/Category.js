import React, { Component } from 'react';
import Button from '../button/Button.js';
import './Category.css';

export default class Category extends Component {

  constructor(props) {
    super(props);
    this.selectCategory = this.selectCategory.bind(this);
  }

  selectCategory(event) {
    let categoryID = this.props.getCategoryID(event.target.getAttribute('name'));
    this.props.getNumberOfQuestions(categoryID);
    this.props.changeDisplay("Difficulty");
  };

  render() {
    // race? this.props.categories is sometimes null
    // create a Promise to avoid race conditions?
    const itemList = this.props.categories.map((category)=> 
      <div key={category.id}>
      <Button  
        disabled={false} 
        name={category.name} 
        value={category.name} 
        onClick={this.selectCategory} 
        buttonText={category.name}
      /> 
      {/* <br></br> */}
      </div>
    )
    return(
      <div className="category" key={"ItemList"} >
        <div className="category-header">
          {"Choose a category"}
        </div>
        <div className="category-body">
          {itemList}
        </div>
      </div>
    )
  };

};
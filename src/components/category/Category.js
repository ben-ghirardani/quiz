import React, { Component } from 'react';
import Header from '../header/Header.js'
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
    const itemList = this.props.categories.map((category)=> 
      <div
        className="category-item" 
        key={category.id}
        name={category.name}
        onClick={this.selectCategory}
      >
        <p
          name={category.name}
        >
          {category.name}
        </p> 
      </div>
    )
    return(
      <div className="category" key={"ItemList"} >
        
        <Header
          text={"Choose Category"}
        />

        <div className="category-body">
          {itemList}
        </div>
      </div>
    )
  };

};
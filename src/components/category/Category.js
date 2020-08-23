import React, { Component } from 'react';
import Item from '../item/Item';
import './Category.css';

export default class Category extends Component {

  constructor(props) {
    super(props);
    this.selectItem = this.selectItem.bind(this);
  }

  selectItem(event) {
    let categoryID = this.props.getCategoryID(event.target.getAttribute('name'));
    this.props.getNumberOfQuestions(categoryID);
    this.props.changeDisplay("Difficulty");
  };

  render() {
    // race? this.props.categories is sometimes null
    // create a Promise to avoid race conditions?
    const itemList = this.props.categories.map((category)=> <Item key={category.id} onClick={this.selectItem} name={category.name}/>)
    return(
      <div className="category" key={"ItemList"} >
        {itemList}
      </div>
    )
  };

};
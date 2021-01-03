import React, { Component } from 'react';
import Header from '../header/Header.js'
import './Category.css';
import {motion} from 'framer-motion';

export default class Category extends Component {

  constructor(props) {
    super(props);
    this.selectCategory = this.selectCategory.bind(this);
    this.createCategories = this.createCategories.bind(this);
  }

  selectCategory(event) {
    let categoryID = this.props.getCategoryID(event.target.getAttribute('name'));
    this.props.getNumberOfQuestions(categoryID);
    this.props.changeDisplay("Difficulty");
  };

  createCategories(array) {
    const itemList = array.map((category)=> 
      <motion.div
        className="category-item" 
        key={category.id}
        name={category.name}
        onClick={this.selectCategory}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{
          delay: array.indexOf(category) / 6
        }}
      >
        <p
          name={category.name}
        >
          {category.name}
        </p> 
      </motion.div>
    )
    return itemList;
  }

  render() {
    return(
      <div className="category" key={"ItemList"} >
        
        <Header
          text={"Choose Category"}
        />
        {/* does this need to be a motion div anymore? */}
        <motion.div 
          className="category-body"
        >
          {/* {itemList} */}
          {this.createCategories(this.props.categories)}
        </motion.div>
      </div>
    )
  };

};
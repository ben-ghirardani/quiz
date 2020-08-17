// import React, { Component } from 'react';
// import './Category.css';

// export default class Category extends Component {

//   constructor(props) {
//     super(props);
//     this.state = { 
//       value: "" 
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   // combine handleChange and handleSubmit into a single onClick event

//   handleChange(event) {
//     this.setState({value: event.target.value})
//   };

//   handleSubmit(event) {
//     event.preventDefault();
//     if(this.state.value === "") {
//       return
//     } else {
//       let categoryID = this.props.getCategoryID(this.state.value);
//       // annonymous async funtion here to make sure first line happens first?
//       this.props.getNumberOfQuestions(categoryID);
//       this.props.changeDisplay("Difficulty");
//     }
//   };

//   render() {
//     return(
//       <div className="category">
//         <form onSubmit={this.handleSubmit}>
//           <label> {this.props.label}
//           <select name={this.props.selectName} value={this.state.value} onChange={this.handleChange} >
//             <option value="" hidden>
//               Choose a category...
//             </option>
//             {
//               this.props.categories.map((category) => <option key={category.id} value={category.name}> {category.name} </option> )
//             }
//           </select>
//           </label>
//           {/* Rename Submit to something more appropriate */}
//           <input type="submit" value="Submit" />
//         </form>
//       </div>
//     )
//   };

// };



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
    const itemList = this.props.categories.map((category)=> <Item key={category.id} onClick={this.selectItem} name={category.name}/>)
    return(
      <div className="category" key={"ItemList"} >
        {itemList}
      </div>
    )
  };

};
import React, { Component } from 'react';
import * as firebasedb from '../firebasedb';

class NewCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      links: this.props.links,
      selectedLinks: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.createCategory = this.createCategory.bind(this);
    // this.onButtonClick = this.onButtonClick.bind(this);
  }
  // componentDidMount() {
  //   this.setState({ links: firebasedb.fetchAllLinks() });
  // }
  onInputChange(event) {
    this.setState({ title: event.target.value });
  }
  onButtonClick(selected) {
    const newArray = this.state.selectedLinks;
    newArray.push(selected);
    this.setState({ selectedLinks: newArray });
  }
  createCategory() {
    const cat = {
      title: this.state.title,
      links: this.state.selectedLinks,
    };

    firebasedb.createCategory(cat);
  }


  // http://stackoverflow.com/questions/26505064/react-js-what-is-the-best-way-to-add-a-value-to-an-array-in-state
  // onButtonClick(event) {
  //   const newArray = this.state.arr.slice();
  //   newArray.push('new value');
  //   this.setState({ arr: newArray });
  // }


  render() {
    return (
      <div>
        <div>New Category</div>
        <div>Title: <input onChange={this.onInputChange} value={this.state.title} /></div>
        {this.state.links.map((link) => {
          console.log(link);
          return (
            <div>{link}<button onClick={clicked => this.onButtonClick(link)}>Add</button></div>
          );
        })}
        <button onClick={this.createCategory}>Create</button>
      </div>
    );
  }
}

export default NewCategory;

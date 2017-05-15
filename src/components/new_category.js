import React, { Component } from 'react';
// import * as firebasedb from '../firebasedb';

class NewCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      links: this.props.links,
      selectedLinks: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
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
    console.log(selected);
    const newArray = this.state.selectedLinks;
    if (document.getElementById(selected).textContent === 'Add') {
      newArray.push(selected);
      this.setState({ selectedLinks: newArray });
      document.getElementById(selected).textContent = 'Delete';
      console.log('selected links');
      console.log(this.state.selectedLinks);
    } else if (document.getElementById(selected).textContent === 'Delete') {
      document.getElementById(selected).textContent = 'Add';
      const index = newArray.indexOf(selected);
      if (index > -1) {
        newArray.splice(index, 1);
        this.setState({ selectedLinks: newArray });
        console.log(this.state.selectedLinks);
      }
    }
  }


  createCategory() {
    const cat = {
      title: this.state.title,
      links: this.state.selectedLinks,
    };
    this.props.create(cat);
  }


  render() {
    return (
      <div id="new-category">
        <h2>Create a New Category</h2>
        <div>Title: <input type="text" name="My Category Name" placeholder="Type a new category name here" onChange={this.onInputChange} value={this.state.title} /></div>
        <hr />
        {this.state.links.map((link) => {
          // console.log(link);
          return (
            <div className="modal-links">
              <li>{link}</li>
              <button className="add-button" id={link} onClick={clicked => this.onButtonClick(link)}>Add</button>
            </div>
          );
        })}
        <button onClick={this.createCategory}>Create</button>
      </div>
    );
  }
}

export default NewCategory;

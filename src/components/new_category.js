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
    const newArray = this.state.selectedLinks;
    newArray.push(selected);
    this.setState({ selectedLinks: newArray });
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
      <div>
        <div>New Category</div>
        <div>Title: <input onChange={this.onInputChange} value={this.state.title} /></div>
        {this.state.links.map((link) => {
          console.log(link);
          return (
            <div>
              <div>{link}<button onClick={clicked => this.onButtonClick(link)}>Add</button></div>
            </div>
          );
        })}
        <button onClick={this.createCategory}>Create</button>
      </div>
    );
  }
}

export default NewCategory;

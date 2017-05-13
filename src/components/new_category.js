import React, { Component } from 'react';


class NewCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      links: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
    // this.onButtonClick = this.onButtonClick.bind(this);
  }

  onInputChange(event) {
    this.setState({ title: event.target.value });
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
        {this.props.links.map((link) => {
          console.log(link);
          return (
            <div>{link}<button onClick={this.onButtonClick}>Add</button></div>
          );
        })}
      </div>
    );
  }
}

export default NewCategory;

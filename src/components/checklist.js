import React, { Component } from 'react';

class Checklist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      to_do: [
        'Check in, Spring 2017',
        'Fall Room Draw',
        'Course Registration',
      ],
      isAdding: false,
      newAdding: '',
    };

    this.showInput = this.showInput.bind(this);
    this.updateAdding = this.updateAdding.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  showToDo() {
    return (
    this.state.to_do.map((item) => {
      return (
        <div className="checkListItem">
          {item}
          <i className="fa fa-check" aria-hidden="true" onClick={i => this.removeItem(item)} />
        </div>
      );
    })
    );
  }
  showInput() {
    this.setState({
      isAdding: true,
    });
  }
  updateAdding(event) {
    this.setState({
      newItem: event.target.value,
    });
  }
  addItem() {
    const newList = this.state.to_do;
    newList.push(this.state.newItem);
    this.setState({
      to_do: newList,
      newItem: '',
      isAdding: false,
    });
  }
  removeItem(item) {
    const newList = [];

    for (let i = 0; i < this.state.to_do.length; i += 1) {
      if (this.state.to_do[i] !== item) {
        newList.push(this.state.to_do[i]);
      }
    }

    this.setState({
      to_do: newList,
    });
  }
  showAdd() {
    if (this.state.isAdding) {
      return (
        <div>
          <input onChange={this.updateAdding} />
          <button className="checkListButton" onClick={this.addItem}>Finish</button>
        </div>
      );
    } else {
      return (
        <button className="checkListButton" onClick={this.showInput}>+ Add an item</button>
      );
    }
  }

  render() {
    return (
      <div id="checklist">
        <div>MY CHECKLIST</div>
        {this.showToDo()}
        {this.showAdd()}
      </div>
    );
  }
}


export default Checklist;

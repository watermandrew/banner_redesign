import React, { Component } from 'react';

class Category extends Component {
  constructor(props) {
    super(props);
    //
    this.state = {
      title: this.props.cat.title,
      links: this.props.cat.catLinks,
    };

    this.startEditing = this.startEditing.bind(this);
    this.stopEditing = this.stopEditing.bind(this);
    this.removeLink = this.removeLink.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.deleteCat = this.deleteCat.bind(this);
  }
  componentDidMount() {
    // console.log(this.props.cat);
  }
  startEditing() {
    this.setState({ isEditing: true });
  }
  stopEditing() {
    // send edits to firebase
    this.setState({ isEditing: false });
  }
  deleteCat() {
    console.log(`key is ${this.props.id}`);
    // send delete request to firebase
  }
  updateTitle(event) {
    this.setState({ title: event.target.value });
  }
  removeLink(selectedLink) {
    const newLinks = [];
    for (let i = 0; i < this.state.links.length; i += 1) {
      if (this.state.links[i] !== selectedLink.link) {
        newLinks.push(this.state.links[i]);
      }
    }

    this.setState({ links: newLinks });
  }
  showLinks() {
    if (this.state.links) {
      if (this.state.isEditing) {
        return (
          <div>
            <h2><input className="inputs" type="text" onChange={this.updateTitle} value={this.state.title} /></h2>
            <hr />
            <ul className="linkList">
              {
        this.state.links.map((link) => {
          return (

            <li>
              <a id="list-list" href="#">{link} </a>
              <i className="fa fa-times fa-2x " aria-hidden="true" color="red" onClick={li => this.removeLink({ link })} />
            </li>

          );
        })
      }
            </ul>
            <button id="modal-button"onClick={this.stopEditing}>Done</button>
            <button id="modal-button" onClick={this.deleteCat}>Delete</button>
          </div>
        );
      } else {
        return (
          <div>
            <h2><div id="inputs-static">{this.state.title}</div></h2>
            <hr />
            <ul className="linkList">
              {
        this.state.links.map((link) => {
          return (
            <li>
              <a id="list-list"href="#">{link}</a>
            </li>
          );
        })
      }
            </ul>
            <div id="edit-button">
              <i className="fa fa-pencil-square-o fa-2x" aria-hidden="true" onClick={() => this.startEditing()}> Edit</i>
            </div>

          </div>
        );
      }
    }
  }

  render() {
    return (
      <div>
        {this.showLinks()}
      </div>
    );
  }
}

export default Category;

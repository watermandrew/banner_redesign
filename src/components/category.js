import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import * as firebasedb from '../firebasedb';

class Category extends Component {
  constructor(props) {
    super(props);
    //
    this.state = {
      title: this.props.cat.title,
      links: this.props.cat.catLinks,
      addLinks: [],
    };

    this.startEditing = this.startEditing.bind(this);
    this.stopEditing = this.stopEditing.bind(this);
    this.addLink = this.addLink.bind(this);
    this.removeLink = this.removeLink.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.deleteCat = this.deleteCat.bind(this);
  }
  componentDidMount() {
    firebasedb.fetchAllLinks((links) => {
      const links_for_adding = [];
      for (const i in links) {
        let inList = false;
        for (const j in this.state.links) {
          if (links[i].name === this.state.links[j].name) {
            inList = true;
            break;
          }
        }
        if (!inList) {
          links_for_adding.push(links[i]);
        }
      }

      this.setState({ addLinks: links_for_adding });
    });
  }
  startEditing() {
    this.setState({ isEditing: true });
  }
  stopEditing() {
    // send edits to firebase
    this.props.updateTitle(this.props.id, this.state.title);
    this.props.updateLinks(this.props.id, this.state.links);
    this.setState({ isEditing: false });
  }
  deleteCat() {
    this.props.deleteCat(this.props.id);
  }
  updateTitle(event) {
    this.setState({ title: event.target.value });
  }
  addLink(selectedLink) {
    let newLinks = [];
    if (this.state.links) {
      newLinks = this.state.links;
    }
    newLinks.push(selectedLink);

    const newAddLinks = [];

    for (let i = 0; i < this.state.addLinks.length; i += 1) {
      if (this.state.addLinks[i] !== selectedLink) {
        newAddLinks.push(this.state.addLinks[i]);
      }
    }

    this.setState({
      links: newLinks,
      addLinks: newAddLinks,
    });
  }
  removeLink(selectedLink) {
    const newLinks = [];
    for (let i = 0; i < this.state.links.length; i += 1) {
      if (this.state.links[i].name !== selectedLink.name) {
        newLinks.push(this.state.links[i]);
      }
    }

    // need to add removed link back to the "addLinks" in case user wants to add it again
    const addLinks = this.state.addLinks;
    addLinks.push(selectedLink);

    this.setState({
      links: newLinks,
      addLinks,
    });
  }
  showLinks() {
    if (this.state.isEditing && !this.state.links) {
      return (
        <div>
          <h2><input className="inputs" type="text" onChange={this.updateTitle} value={this.state.title} /></h2>
          <hr />
          <ul className="linkList">
            {
    this.state.addLinks.map((item) => {
      return (
        <li>
          <a id="list-list">{item.name}</a>
          <button onClick={li => this.addLink(item)}>+</button>
        </li>

      );
    })
  }

          </ul>
          <button id="modal-button"onClick={this.stopEditing}>Done</button>
          <button id="modal-button" onClick={this.deleteCat}>Delete</button>
        </div>);
    } else if (this.state.isEditing) {
      return (
        <div>
          <h2><input className="inputs" type="text" onChange={this.updateTitle} value={this.state.title} /></h2>
          <hr />
          <ul className="linkList">
            {
        this.state.links.map((item) => {
          return (
            <li>
              <a id="list-list">{item.name} </a>
              <i className="fa fa-times fa-2x " aria-hidden="true" color="red" onClick={li => this.removeLink(item)} />
            </li>
          );
        })
      }
            {
        this.state.addLinks.map((item) => {
          return (
            <li>
              <a id="list-list">{item.name}</a>
              <button onClick={li => this.addLink(item)}>+</button>
            </li>

          );
        })
      }

          </ul>
          <button id="modal-button"onClick={this.stopEditing}>Done</button>
          <button id="modal-button" onClick={this.deleteCat}>Delete</button>
        </div>
      );
    } else if (this.state.links) {
      return (
        <div>
          <h2><div id="inputs-static">{this.state.title}</div></h2>
          <hr />
          <ul className="linkList">
            {
        this.state.links.map((item) => {
          return (
            <li>
              <Link to={`/${item.link}`}>{item.name}</Link>
            </li>
          );
        })
      }
          </ul>
        </div>
      );
    }
  }
  canEditOrNah() {
    if (!this.props.isAllLinks) {
      return (
        <div id="edit-button">
          <i className="fa fa-pencil-square-o fa-2x" aria-hidden="true" onClick={() => this.startEditing()}> Edit</i>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <div>
          {this.showLinks()}
        </div>
        <div className="container">
          <button id="close-modal" onClick={this.props.onClose}>Close</button>
        </div>
        {this.canEditOrNah()}
      </div>
    );
  }
}

// export default Category;
export default withRouter(Category);

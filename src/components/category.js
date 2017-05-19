import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import * as firebasedb from '../firebasedb';
import DeleteSure from './delete-sure';

class Category extends Component {
  constructor(props) {
    super(props);
    //
    this.state = {
      title: this.props.cat.title,
      links: this.props.cat.catLinks,
      addLinks: [],
      isOpenDelSure: false,
    };

    this.showDelSure = this.showDelSure.bind(this);
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

  showDelSure() {
    this.setState({
      isOpenDelSure: !this.state.isOpenDelSure,
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
        <div id="h2">
          <h2><input className="inputs" type="text" onChange={this.updateTitle} value={this.state.title} /></h2>
          <hr />
          <b><i id="curr-links">Current links:</i></b>
          <ul className="linkList">
            {
        this.state.links.map((item) => {
          return (
            <div>
              <div className="modal-links">
                <li>{item.name} </li>
                <div role="button" className="add-button" onClick={li => this.removeLink(item)}>-</div>
              </div>
            </div>

          );
        })
      }
            <b><i>------------------------------Links to Add------------------------------ </i></b>
            {
        this.state.addLinks.map((item) => {
          return (
            <div>
              <div className="modal-links">
                <li>{item.name}</li>
                <div role="button" className="ADD-button"onClick={li => this.addLink(item)}>+</div>
              </div>
            </div>

          );
        })
      }

          </ul>
          <div className="categs">
            <button id="modal-button-delete" onClick={this.showDelSure}>Delete Category</button>
            <DeleteSure show={this.state.isOpenDelSure}
              onClose={this.showDelSure}
            >
              <div id="dialog-content">
                <div><i className="fa fa-exclamation-circle fa-4x " aria-hidden="true" />
                </div>
                <div id="diag-text">Are you sure you want to delete this category? This action cannot be undone.</div>
              </div>
              <button id="pay-button-yes-del" onClick={this.deleteCat}>Yes, I want to delete.</button>
            </DeleteSure>
            <button id="modal-button"onClick={this.stopEditing}>Finish Editing</button>
          </div>
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
    } else {
      return (
        <div>
          <h2><div id="inputs-static">{this.state.title}</div></h2>
          <hr />
        </div>
      );
    }
  }
  canEditOrNah() {
    if (!this.state.isEditing) {
      return (
        <div id="creat-button">
          <div role="button" onClick={() => this.startEditing()}> Edit</div>
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
          {this.canEditOrNah()}
        </div>
      </div>
    );
  }
}

// export default Category;
export default withRouter(Category);

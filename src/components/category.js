import React, { Component } from 'react';

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
          if (links[i] === this.state.links[j]) {
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
    console.log(`key is ${this.props.id}`);
    // send delete request to firebase
  }
  updateTitle(event) {
    this.setState({ title: event.target.value });
  }
  addLink(selectedLink) {
    const newLinks = this.state.links;
    newLinks.push(selectedLink.link);

    const newAddLinks = [];

    for (let i = 0; i < this.state.addLinks.length; i += 1) {
      if (this.state.addLinks[i] !== selectedLink.link) {
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
            <input className="inputs" type="text" onChange={this.updateTitle} value={this.state.title} />
            <hr />
            <ul className="linkList">
              {
        this.state.links.map((link) => {
          return (

            <li>
              <a id="list-list" href="#">{link}</a>
              <button onClick={li => this.removeLink({ link })}>-</button>
            </li>

          );
        })
      }
              {
        this.state.addLinks.map((link) => {
          return (

            <li>
              <a id="list-list" href="#">{link}</a>
              <button onClick={li => this.addLink({ link })}>+</button>
            </li>

          );
        })
      }
            </ul>
            <button onClick={this.stopEditing}>Done</button>
            <button onClick={this.deleteCat}>Delete</button>
          </div>
        );
      } else {
        return (
          <div>
            <div id="inputs-static">{this.state.title}</div>
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
            <button onClick={() => this.startEditing()}>Edit</button>
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

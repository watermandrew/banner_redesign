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
  }
  componentDidMount() {
    console.log(this.props.cat);
  }
  startEditing() {
    this.setState({ isEditing: true });
  }
  stopEditing() {
    this.setState({ isEditing: false });
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
            <input onChange={this.updateTitle} value={this.state.title} />
            <ul className="linkList">
              {
        this.state.links.map((link) => {
          return (

            <li>
              <a href="#">{link}</a>
              <button onClick={li => this.removeLink({ link })}>-</button>
            </li>

          );
        })
      }
            </ul>
            <button onClick={this.stopEditing}>Done</button>
          </div>
        );
      } else {
        return (
          <div>
            <div>{this.state.title}</div>
            <ul className="linkList">
              {
        this.state.links.map((link) => {
          return (
            <li>
              <a href="#">{link}</a>
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

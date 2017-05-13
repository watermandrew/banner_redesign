import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss';

const NavBar = () => {
  return (
    <nav>
      <div>Welcome to Banner!</div>
    </nav>
  );
};


const App = () => {
  return (
    <div>
      <NavBar />
      <div className="test">Banner Home</div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('main'));

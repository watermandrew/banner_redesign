import React from 'react';
import ReactDOM from 'react-dom';
import Category from './components/category';

import './style.scss';

const App = () => {
  return (
    <div>
      <Category />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('main'));

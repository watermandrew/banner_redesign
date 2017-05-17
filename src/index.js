import React from 'react';
import ReactDOM from 'react-dom';
// import Immutable from 'immutable';
// import Category from './components/category';
// import Modal from './Modal';
// import Profile from './components/profile';
// import * as firebasedb from './firebasedb';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './style.scss';
// import { NewCategory } from './components/new_category';
// import NewModal from './components/new_category_modal';
// import CategoryModal from './components/category_modal';
// import NavBar from './components/nav';
// import Payment from './components/payment';
// import Checklist from './components/checklist';
// import Button from './components/cat_button';
import NewApp from './components/newapp';
import Payment from './components/payment';
import SignIn from './components/signin';


// basics for this were taken from https://www.npmjs.com/package/react-modal website

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};


const App = (props) => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/home" component={NewApp} />
          <Route path="/payment" component={Payment} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>

  );
};


ReactDOM.render(<App />, document.getElementById('main'));

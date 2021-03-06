import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfAlt as fasStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

import homes from './_data/airbnbs.json';
import HomeList from './HomeList';
import ShoppingCart from './ShoppingCart';

library.add(fasStar, farStar, fasStarHalfAlt);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedHomes: []
    };
  }

  addToCart = (home) => {
    if(this.state.selectedHomes.includes(home)) {
      alert('You already selected that home');
      return;
    }

    this.setState((prevState) => ({
        selectedHomes: [...prevState.selectedHomes, home]
    }));
  }

  removeCartItem = (idx) => {
    this.setState((prevState) => {
      const selectedHomes = [...prevState.selectedHomes];
      selectedHomes.splice(idx,1);

      return { selectedHomes: selectedHomes };
    });
  }

  render() {
    return (
      <div className="App">
        <ShoppingCart selectedHomes={this.state.selectedHomes} onRemoveItem={this.removeCartItem} />
        <HomeList homes={homes} selectedHomes={this.state.selectedHomes} onAddToCart={this.addToCart} />
      </div>
    );
  }
}

export default App;

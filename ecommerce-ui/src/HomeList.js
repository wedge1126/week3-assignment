import React from 'react';
import PropTypes from 'prop-types';

import HomeCard from './HomeCard';

export default class HomeList extends React.Component {
  render() {
      const cards = this.props.homes.map((home, i) => <HomeCard home={home} onAddToCart={this.props.onAddToCart} key={i} />);
      return <div>
        <h3>Available Homes</h3>
        <div className="flex-container">
            {cards}
        </div>
      </div>
  }
}

HomeList.propTypes = {
    homes: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        houseType: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        location: PropTypes.shape({
            city: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired
        }).isRequired,
        payment: PropTypes.shape({
            cost: PropTypes.number.isRequired,
            description: PropTypes.string.isRequired
        }).isRequired,
        host: PropTypes.shape({
            name: PropTypes.string.isRequired,
            isSuperhost: PropTypes.bool.isRequired
        }).isRequired,
        rating: PropTypes.shape({
            stars: PropTypes.number.isRequired,
            reviews: PropTypes.number.isRequired
        })
    })),
    onAddToCart: PropTypes.func.isRequired
}
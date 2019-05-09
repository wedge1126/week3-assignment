import React from 'react';
import PropTypes from 'prop-types';

import CartItem from './CartItem';

export default class ShoppingCart extends React.Component {
  render() {
    const cards = this.props.selectedHomes.map((home, i) => <CartItem home={home} onRemoveItem={this.props.onRemoveItem} idx={i} key={i} />);
    return <div className="flex-container-vertical">
        {cards}
    </div>
  }
}

ShoppingCart.propTypes = {
    selectedHomes: PropTypes.arrayOf(PropTypes.shape({
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
    })).isRequired
}
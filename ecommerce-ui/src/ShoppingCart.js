import React from 'react';
import PropTypes from 'prop-types';

import CartItem from './CartItem';

export default class ShoppingCart extends React.Component {
  render() {
    const { selectedHomes, onRemoveItem } = this.props;
    const cards = selectedHomes.map((home, i) => <CartItem home={home} onRemoveItem={onRemoveItem} idx={i} key={i} />);
    const total = selectedHomes.reduce((total, home) => total + home.payment.cost, 0);
    const currencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    return <div className={cards.length > 0 ? '' : 'hidden'}>
        <h3>Shopping Cart</h3>
        <div className="flex-container-vertical">
            {cards}
        </div>
        <div className="shopping-cart-total">
            <div>Total</div>
            <div>{currencyFormat.format(total)}</div>
        </div>
        <hr />
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
    })).isRequired,
    onRemoveItem: PropTypes.func.isRequired
}
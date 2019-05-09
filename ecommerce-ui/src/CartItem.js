import React from 'react';
import PropTypes from 'prop-types';

export default class CartItem extends React.Component {
  render() {
    const { home, onRemoveItem, idx } = this.props;
    const currencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });

    return <div className="cart-item">
        <div className="cart-item-body">
            <div className="cart-item-type">
                <span>{home.houseType}</span> &#8226; <span>{home.location.city}, {home.location.country}</span>
            </div>
            <div className="cart-item-cost">
                {currencyFormat.format(home.payment.cost)}/night
            </div>
            <div>
                <span className="cart-item-title">{home.title}</span>
                <button className="cart-item-button" onClick={() => onRemoveItem(idx)} >Remove</button>
            </div>
        </div>
    </div>
  }
}

CartItem.propTypes = {
    home: PropTypes.shape({
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
    }).isRequired,
    onRemoveItem: PropTypes.func.isRequired,
    idx: PropTypes.number.isRequired
}
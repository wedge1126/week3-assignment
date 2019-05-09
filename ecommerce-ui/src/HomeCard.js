import React from 'react';
import PropTypes from 'prop-types';

import Rating from './Rating';

export default class HomeCard extends React.Component {
  render() {
    const { home, active, onAddToCart } = this.props;
    const currencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });

    return <div className="home-card">
        <img className="home-card-image" src={home.image} alt={home.title} />
        <div className="home-card-body">
            <div className="home-card-type">
                <span>{home.houseType}</span> &#8226; <span>{home.location.city}, {home.location.country}</span>
            </div>
            <div className="home-card-title">{home.title}</div>
            <div>
                <span className="home-card-cost">{currencyFormat.format(home.payment.cost)}/night</span>
                <span>{home.payment.description}</span>
            </div>
            <Rating value={home.rating} />
            <div>
                <span className="host-name">{home.host.name}</span>
                <span className="superhost">{home.host.isSuperhost ? 'Superhost' : ''}</span>
            </div>
            <div>
                <button className="home-card-button" disabled={!active} onClick={() => onAddToCart(home)} >Book</button>
            </div>
        </div>
    </div>
  }
}

HomeCard.propTypes = {
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
    active: PropTypes.bool.isRequired,
    onAddToCart: PropTypes.func.isRequired
}
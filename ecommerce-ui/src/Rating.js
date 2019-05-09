import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

export default class HomeCard extends React.Component {
  render() {
      const stars = this.props.value.stars;
      const reviews = this.props.value.reviews;
      let starIcons = [];
      let key = 0;
      for(let i = 0; i < Math.floor(stars); ++i) {
        starIcons.push(<FontAwesomeIcon className="checked" icon={['fas', 'star']} key={++key} />)
      }
      if(Math.floor(stars) !== Math.ceil(stars)) {
        starIcons.push(<FontAwesomeIcon className="checked" icon={['fas', 'star-half-alt']} key={++key} />)
      }
      for(let i = 0; i < 5 - Math.ceil(stars); ++i) {
        starIcons.push(<FontAwesomeIcon className="checked" icon={['far', 'star']} key={++key} />)
      }

      return <div className="rating">
        <span className="rating-stars">{starIcons}</span>
        <span className="rating-reviews">{reviews}</span>
      </div>
  }
}

HomeCard.propTypes = {
    value: PropTypes.shape({
        stars: PropTypes.number.isRequired,
        reviews: PropTypes.number.isRequired
    }).isRequired
}
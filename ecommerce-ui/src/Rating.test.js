import React from 'react';
import { shallow } from 'enzyme';

import Rating from './Rating';

describe('Rating', () => {
    it('should render 5 stars correctly', () => {
        const rating = { stars: 5, reviews: 1 };
        const component = shallow(<Rating value={rating} />);
        
        expect(component).toMatchSnapshot();
    });

    it('should render 2.3 stars correctly', () => {
        const rating = { stars: 2.3, reviews: 1 };
        const component = shallow(<Rating value={rating} />);
        
        expect(component).toMatchSnapshot();
    });

    it('should render 1 star correctly', () => {
        const rating = { stars: 1, reviews: 1 };
        const component = shallow(<Rating value={rating} />);
        
        expect(component).toMatchSnapshot();
    });

    it('should render 0 stars correctly', () => {
        const rating = { stars: 0, reviews: 1 };
        const component = shallow(<Rating value={rating} />);
        
        expect(component).toMatchSnapshot();
    });
});
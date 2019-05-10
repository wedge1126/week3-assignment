import React from 'react';
import { shallow, mount } from 'enzyme';

import HomeCard from './HomeCard';

const testHome = {
    "title": "Quaint 31,400 km³ home above lovely forest",
    "houseType": "Entire Space Station",
    "image": "http://www.islandbreath.org/2015Year/02/150205deathstar.jpg",
    "location": {
        "city": "Endor",
        "country": "Endor System"
    },
    "payment": {
        "cost": 3200000000,
        "description": ""
    },
    "host": {
        "name": "Sheev",
        "isSuperhost": true
    },
    "rating": {
        "stars": 3.2,
        "reviews": 501
    }
};

describe('HomeCard', () => {
    it('should render the test data correctly', () => {
        const active = true;
        const onAddToCart = jest.fn();
        const component = shallow(<HomeCard home={testHome} active={active} onAddToCart={onAddToCart} />);
        
        expect(component).toMatchSnapshot();
    });

    it('should call onAddToCart when button is clicked', () => {
        const active = true;
        const onAddToCart = jest.fn();
        const component = mount(<HomeCard home={testHome} active={active} onAddToCart={onAddToCart} />);
        
        component.find('button.home-card-button').simulate('click');

        expect(onAddToCart).toHaveBeenCalled();

        component.unmount();
    });

    it('should not call onAddToCart when button is disabled', () => {
        const active = false;
        const onAddToCart = jest.fn();
        const component = mount(<HomeCard home={testHome} active={active} onAddToCart={onAddToCart} />);
        
        component.find('button.home-card-button').simulate('click');

        expect(onAddToCart).not.toHaveBeenCalled();
        component.unmount();
    });
});
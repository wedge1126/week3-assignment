import React from 'react';
import { shallow, mount } from 'enzyme';

import CartItem from './CartItem';

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

describe('CartItem', () => {
    it('should render the test data correctly', () => {
        const onRemoveItem = jest.fn();
        const idx = 1;
        const component = shallow(<CartItem home={testHome} onRemoveItem={onRemoveItem} idx={idx} />);
        
        expect(component).toMatchSnapshot();
    });

    it('should call onAddToCart when button is clicked', () => {
        const onRemoveItem = jest.fn();
        const idx = 1;
        const component = mount(<CartItem home={testHome} onRemoveItem={onRemoveItem} idx={idx} />);
        
        component.find('button.cart-item-button').simulate('click');

        expect(onRemoveItem).toHaveBeenCalled();

        component.unmount();
    });
});
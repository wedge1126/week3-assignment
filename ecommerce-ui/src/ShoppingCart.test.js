import React from 'react';
import { shallow } from 'enzyme';

import ShoppingCart from './ShoppingCart';

import testData from './_data/testData.json';

describe('ShoppingCart', () => {
    it('should render the test data correctly', () => {
        const onRemoveItem = jest.fn();
        const component = shallow(
            <ShoppingCart selectedHomes={testData} onRemoveItem={onRemoveItem} />);
        
        expect(component).toMatchSnapshot();
    });
});
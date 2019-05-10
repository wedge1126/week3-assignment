import React from 'react';
import { shallow } from 'enzyme';

import HomeList from './HomeList';

import testData from './_data/testData.json';

describe('HomeList', () => {
    it('should render the test data correctly', () => {
        const selected = [];
        const onAddToCart = jest.fn();
        const component = shallow(
            <HomeList homes={testData} selectedHomes={selected} onAddToCart={onAddToCart} />);
        
        expect(component).toMatchSnapshot();
    });
});
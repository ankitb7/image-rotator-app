import React from 'react';
import Number from './Number';
import {shallow} from 'enzyme/build';
import {expect} from 'chai';

describe('Number', () => {
    it('Number should render correctly', () => {
        const wrapper = shallow(<Number />);
        expect(wrapper.find('input')).to.have.length(1);
    });
});

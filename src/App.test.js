import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import App from './App';

describe('App', () => {
    it('App should render ImageEditor', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('ImageEditor')).to.have.length(1);
    });
});
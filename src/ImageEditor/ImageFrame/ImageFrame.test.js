import React from 'react';
import ImageFrame from './ImageFrame';
import {shallow} from 'enzyme/build';
import {expect} from 'chai';

describe('ImageFrame', () => {
    it('ImageFrame should render correctly when no images are provided', () => {
        const wrapper = shallow(<ImageFrame image={null} rotatedImage={null}/>);
        expect(wrapper.find('.image-frame')).to.have.length(1);
        expect(wrapper.find('.placeholder-text')).to.have.length(1);
    });

    it('ImageFrame should render correctly when images are provided', () => {
        const wrapper = shallow(<ImageFrame image={<img/>} rotatedImage={null}/>);
        expect(wrapper.find('.image-frame')).to.have.length(1);
        expect(wrapper.find('img')).to.have.length(1);
    });
});

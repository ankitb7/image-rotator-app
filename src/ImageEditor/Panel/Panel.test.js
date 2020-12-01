import React from 'react';
import Panel from './Panel';
import {shallow} from 'enzyme/build';
import {expect} from 'chai';

const props = {
    setImage : () => {},
    image: new Image(),
    rotatedImage: new Image(),
    imageDimensions: {width: 0, height: 0},
    renderTime: 0,
    rotateImage: () => {}
};

describe('Panel', () => {
    it('Panel should render correctly when image is provided', () => {
        const wrapper = shallow(<Panel {...props}/>);
        expect(wrapper.find('.action-panel')).to.have.length(1);
        expect(wrapper.find('.panel-header')).to.have.length(1);
        expect(wrapper.find('.file-input')).to.have.length(1);
        expect(wrapper.find('.rotate-panel')).to.have.length(1);
        expect(wrapper.find('.info')).to.have.length(2);
        expect(wrapper.find('Number')).to.have.length(1);
        expect(wrapper.find('button')).to.have.length(1);
    });

    it('Panel should render correctly when image is not provided', () => {
        const wrapper = shallow(<Panel {...props} image={null}/>);
        expect(wrapper.find('.action-panel')).to.have.length(1);
        expect(wrapper.find('.panel-header')).to.have.length(1);
        expect(wrapper.find('.file-input')).to.have.length(1);
        expect(wrapper.exists('.rotate-panel')).to.equal(false);
        expect(wrapper.exists('.info')).to.equal(false);
        expect(wrapper.exists('Number')).to.equal(false);
        expect(wrapper.exists('button')).to.equal(false);
    });
});

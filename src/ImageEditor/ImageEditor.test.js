import React from 'react';
import ImageEditor from './ImageEditor';
import {shallow} from 'enzyme/build';
import {expect} from 'chai';
import {expect as jestExpect} from '@jest/globals';
import {calculateNewDimensions, transform, rotate} from './ImageEditor.utils';

describe('ImageEditor', () => {
    it('ImageEditor should render correctly', () => {
        const wrapper = shallow(<ImageEditor />);
        expect(wrapper.find('Panel')).to.have.length(1);
        expect(wrapper.find('ImageFrame')).to.have.length(1);
        expect(wrapper.find('.page-header')).to.have.length(1);
        expect(wrapper.find('.page-content')).to.have.length(1);
        expect(wrapper.find('.sidebar-left')).to.have.length(1);
        expect(wrapper.find('.content-container')).to.have.length(1);
    });

    it('calculateNewDimensions should work correctly', () => {
        const result = calculateNewDimensions(756, 258, Math.sin(45), Math.cos(45));
        expect(result).to.eql({'newHeight': 617, 'newWidth': 779});
    });

    it('transform should work correctly', () => {
        const radians = 45 * (Math.PI / 180);
        const result = transform(90, 90, 10, 10, Math.sin(radians), Math.cos(radians), Math.tan(radians/2));
        expect(result).to.eql({'x': 10, 'y': 137});
    });

    it('rotate should work correctly', () => {
       const result = rotate({originalImageData: [0, 1, 2, 3, 4, 5, 6, 7], height: 2, width: 2}, 45);
       const newImageData = new Uint8ClampedArray([0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 5, 6, 7]);
       expect(result).to.eql({
            'newHeight': 3,
            'newWidth': 3,
            'newImageData': newImageData
        });
    });

    it('rotateImage and getImageCanvasAndContext should work correctly', () => {
        const wrapper = shallow(<ImageEditor />);
        const spy = jest
            .spyOn(global, 'ImageData')
            .mockImplementation(() => {return new Image()});

        HTMLCanvasElement.prototype.getContext = () => {
            return {putImageData: () => {}};
        };

        wrapper.find('Panel').props().rotateImage(45);

        jestExpect(spy).toHaveBeenCalled();
        spy.mockRestore();
    });
});

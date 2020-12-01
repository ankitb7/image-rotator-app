import React from 'react';
import PropTypes from 'prop-types';
import './ImageFrame.css';

const ImageFrame = ({image, rotatedImage}) => {
    const finalImage = rotatedImage ? rotatedImage : image;
    return (
        <div className='image-frame'>
            {finalImage ? finalImage : <div className='placeholder-text'>Please select an image</div>}
        </div>
    );
};

ImageFrame.propTypes = {
    image: PropTypes.any,
    rotatedImage: PropTypes.any
};

ImageFrame.defaultProps = {
    image: null,
    rotatedImage: null
};

export default ImageFrame;
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Number from './components/Number';
import './Panel.css';

const Panel = ({setImage, image, rotatedImage, imageDimensions, renderTime, rotateImage}) => {
    const [angle, setAngle] = useState(0);

    return (
        <div className='action-panel'>
            <div className='panel-header'>Editor Panel</div>
            <input className='file-input' type='file'
                   accept='image/*' onChange={setImage}/>
            {image && <div className='rotate-panel'>
                <div className='info'>
                    {`Original Image Dimensions: ${imageDimensions.width}px width x ${imageDimensions.height}px height`}
                </div>
                {rotatedImage && <div className='info'>
                    {`Render Time: ${renderTime?.toFixed(2)}ms`}
                </div>}
                <p>
                    <Number setAngle={setAngle}/>
                    <button onClick={() => rotateImage(angle)}>Apply</button>
                </p>
            </div>}
        </div>
    );
};

Panel.propTypes = {
    setImage: PropTypes.func,
    image: PropTypes.any,
    imageDimensions: PropTypes.shape({}),
    rotatedImage: PropTypes.any,
    renderTime: PropTypes.number,
    onChange1: PropTypes.func,
};

Panel.defaultProps = {
    setImage: () => {},
    image: null,
    rotatedImage: null,
    imageDimensions: {width: 0, height: 0},
    renderTime: 0,
    rotateImage: null
};

export default Panel;
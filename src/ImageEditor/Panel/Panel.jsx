import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './Panel.css';

const Panel = ({setImage, image, rotatedImage, imageDimensions, renderTime, rotateImage}) => {
    const [angle, setAngle] = useState(0);

    const onAngleChange = e => {
        if(e.target.value || e.target.value === 0) {
            const angle = window.Number(e.target.value);
            setAngle(angle);
        }
    };

    return (
        <div className='action-panel'>
            <input className="fileInput"
                   type="file"
                   onChange={setImage}/>
            {image && <div className='rotate-panel'>
                <div className='info'>
                    {`Original Image Dimensions: ${imageDimensions.width}px width x ${imageDimensions.height}px height`}
                </div>
                {rotatedImage && <div className='info'>
                    {`Render Time: ${renderTime?.toFixed(2)}ms`}
                </div>}
                <p>
                    <input type='text' placeholder='Degrees' onChange={onAngleChange}/>
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
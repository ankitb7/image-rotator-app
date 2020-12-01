import React, {useState, useCallback} from 'react';
import {getImageCanvasAndContext, rotate} from './ImageEditor.utils';
import ImageFrame from './ImageFrame/ImageFrame';
import Panel from './Panel/Panel';
import './ImageEditor.css';

const ImageEditor = () => {
    const [file, setFile] = useState(null);
    const [image, setImage] = useState(null);
    const [rotatedImage, setRotatedImage] = useState(null);
    const [imageDimensions, setImageDimensions] = useState({width: 0, height: 0});
    const [renderTime, setRenderTime] = useState(0);

    const changeImage = e => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        //Clear out the rotated image each time a new image is set
        setRotatedImage(null);

        reader.onloadend = () => {
            if (reader.result) {
                setImage(<img src={reader.result} alt='Original Document'/>);
            }

            let img = new Image();
            img.onload = function() {
                setImageDimensions({width: this.width, height: this.height});

                const {context} = getImageCanvasAndContext(img);
                context.drawImage(img, 0, 0 );
                const imageData = context.getImageData(0, 0, img.width, img.height);

                setFile(imageData.data);
            };
            img.src = reader.result;
        };
        reader.readAsDataURL(file);
    };

    const rotateImage = useCallback((angle) => {
        const startTime = performance.now();

        const rotatedImageData = rotate({originalImageData: file, height: imageDimensions.height, width: imageDimensions.width}, angle);

        const {canvas, context} = getImageCanvasAndContext(rotatedImageData);
        context.putImageData(rotatedImageData, 0, 0);

        let rotatedImage = new Image();
        rotatedImage.src = canvas.toDataURL();

        setRotatedImage(<img src={canvas.toDataURL()} alt='Rotated Document'/>);

        const endTime = performance.now();
        setRenderTime(endTime - startTime);
    }, [file, imageDimensions]);

    return (
        <div className='main-container'>
            <header className='page-header'>
                Image Rotator Application
            </header>
            <div className='page-content'>
                <div className='sidebar-left'>
                    <Panel setImage={changeImage} image={image}
                           imageDimensions={imageDimensions} rotatedImage={rotatedImage}
                           renderTime={renderTime} rotateImage={rotateImage}/>
                </div>
                <div className='content-container'>
                    <ImageFrame image={image} rotatedImage={rotatedImage}/>
                </div>
            </div>
        </div>
    );
};

export default ImageEditor;
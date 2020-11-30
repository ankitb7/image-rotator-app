const calculateNewDimensions = (height, width, sin, cos) => {
    const newHeight  = Math.round(Math.abs(height * cos) + Math.abs(width * sin));
    const newWidth  = Math.round(Math.abs(width * cos) + Math.abs(height * sin));

    return {newWidth, newHeight};
};

const transform = (newX, newY, centerX, centerY, sin, cos) => {
    //Rotate x,y co-ordinates by provided angle on the center
    const rotatedX = (newX * cos) - (newY * sin);
    const rotatedY = (newX * sin) + (newY * cos);

    //Add center co-ordinates to get actual x,y co-ordinates
    return {x: Math.round(rotatedX + centerX), y: Math.round(rotatedY + centerY)};
};

const getImageCenter = (height, width) => ({centerHeight: Math.trunc(height/2), centerWidth: Math.trunc(width/2)});

const isRotatedPointInBounds = (newHeight, newWidth, newX, newY) => newX >= 0 && newX < newWidth && newY >= 0 && newY < newHeight;

export const getImageCanvasAndContext = (image) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = image.width;
    canvas.height = image.height;
    return {canvas, context};
};

export const rotate = (originalImageData, height, width, angle) => {
    const sin = Math.sin(angle);
    const cos = Math.cos(angle);
    const {centerHeight, centerWidth} = getImageCenter(height, width);
    const {newHeight, newWidth} = calculateNewDimensions(width, height, sin, cos);

    const newImageData = new Uint8ClampedArray((newWidth * 4) * newHeight);

    const rgbaPixelWidth = width * 4;

    let y = 0;

    for (let i = 0; i < rgbaPixelWidth * height; i = i + 4) {
        const x = Math.round((i % rgbaPixelWidth) / 4);

        //Get x, y co-ordinates with respect to original image center
        let adjustedX = x - centerWidth;
        let adjustedY = y - centerHeight;

        //Apply transformations to the co-ordinates to rotate them by given angle
        const transformedPosition = transform(adjustedX, adjustedY, centerWidth, centerHeight, sin, cos);

        //Adjust co-ordinates according to new width, height (new center)
        transformedPosition.x += Math.round((newWidth - width) / 2.0);
        transformedPosition.y += Math.round((newHeight - height) / 2.0);

        //If the rotated co-ordinates lie within new image dimensions store them in new image data
        if (isRotatedPointInBounds(newHeight, newWidth, transformedPosition.x, transformedPosition.y)) {
            const finalPosition = (transformedPosition.x * 4) + (transformedPosition.y * (newWidth * 4));
            for(let j = 0; j < 4; j++) {
                newImageData[finalPosition + j] = originalImageData[i + j];
            }
        }

        if (i % rgbaPixelWidth === 0) {
            y++;
        }
    }
    return new ImageData(Uint8ClampedArray.from(newImageData), newWidth, newHeight);
};
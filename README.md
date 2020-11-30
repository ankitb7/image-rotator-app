# Image Rotation Application

This project rotates an image by specified degrees.

Try it out here: https://ankitb7.github.io/image-rotator-app/

## Algorithm

The approach used to rotate the image is applying a translation matrix to rotate image co-ordinates.

Following are the steps followed in the algorithm:

1. Create an empty rotated image data array with all co-ordinates set to zero.
2. Loop over each co-ordinate in the original image.
3. Adjust the co-ordinates with respect to the original image center.
4. Apply transformation matrix to the co-ordinates to rotate them by the specified angle.
5. Adjust the rotated co-ordinates according to the new image center.
6. Check if co-ordinates lie within the rotated image dimensions and store them in rotated array data.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


const imagemin = require('imagemin') ;   // The imagemin module.
const webp = require('imagemin-webp');   // imagemin's WebP plugin.
const imageminJpegRecompress = require('imagemin-jpeg-recompress');

const outputFolder = './static/images';      // Output folder
const PNGImages = './static/images/*.png';        // PNG images
const JPEGImages = './static/images/source/*.jpg';       // JPEG images

imagemin([JPEGImages], outputFolder, {
  plugins: [
    imageminJpegRecompress()
  ]
});

imagemin([PNGImages], outputFolder, {
  plugins: [webp({
    lossless: true // Losslessly encode images
  })]
});

imagemin([JPEGImages], outputFolder, {
  plugins: [webp({
    quality: 70 // Quality setting from 0 to 100
  })]
});

# Image Slider (day 13)

Files:
- `index.html` — demo page you can open in a browser
- `styles.css` — basic slider styles
- `app.js` — slider implementation and example initialization

How to use:
1. Open `day 13/index.html` in your browser. The slider uses placeholder images from picsum.photos by default.
2. To use your own images, edit the `images` array in `app.js` (the DOMContentLoaded handler) or open the dev tools console and call:

   window._imageSlider.setImages([ 'img1.jpg', 'img2.jpg' ])

Notes:
- For local images, provide either relative paths (e.g. `images/pic1.jpg`) or absolute file URLs. If using local files in some browsers you may need to serve the folder (e.g. with a simple static server) rather than opening the file directly.
- Keyboard: left/right arrow keys navigate slides. Hovering the slider pauses autoplay.

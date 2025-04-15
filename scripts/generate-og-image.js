/**
 * Generate Open Graph Image
 *
 * This script provides instructions for creating the OG image for Practice Hero.
 * You'll need to manually create this image using a design tool like Figma, Photoshop, or Canva.
 *
 * Specifications:
 * - Dimensions: 1200 x 630 pixels
 * - Format: JPG or PNG (JPG preferred for smaller file size)
 * - File name: og-image.jpg
 * - File location: /public/og-image.jpg
 *
 * Design Guidelines:
 * - Include the Practice Hero logo and text
 * - Use the brand blue color (#2563eb) as an accent
 * - Include a visual representation of the product (screenshot of the app)
 * - Keep text minimal and legible at small sizes
 * - Include the tagline: "AI-powered EHR summarization for GPs"
 *
 * Sample command to convert an existing image to the right dimensions:
 *
 * Using ImageMagick:
 * convert source-image.png -resize 1200x630 -background white -gravity center -extent 1200x630 public/og-image.jpg
 *
 * Using sharp (Node.js):
 *
 * npm install sharp
 *
 * // add this to a Node.js script:
 * const sharp = require('sharp');
 *
 * sharp('source-image.png')
 *   .resize({
 *     width: 1200,
 *     height: 630,
 *     fit: 'contain',
 *     background: { r: 255, g: 255, b: 255 }
 *   })
 *   .toFile('public/og-image.jpg')
 *   .then(() => console.log('OG image created successfully!'))
 *   .catch(err => console.error('Error creating OG image:', err));
 */

console.log('This is a helper script with instructions for creating the OG image.');
console.log('Please read the comments at the top of this file for guidance.');

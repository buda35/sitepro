const fs = require('fs');
const path = require('path');

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, '../public/uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Create placeholder SVG content
const createPlaceholderSVG = (width, height, text) => `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#231F20"/>
  <text x="50%" y="50%" font-family="Arial" font-size="24" fill="#FDB912" text-anchor="middle" dominant-baseline="middle">
    ${text}
  </text>
</svg>
`;

// Generate placeholder images
const images = [
  { name: 'hero1.jpg', width: 1920, height: 1080, text: 'Hero 1' },
  { name: 'hero2.jpg', width: 1920, height: 1080, text: 'Hero 2' },
  { name: 'hero3.jpg', width: 1920, height: 1080, text: 'Hero 3' },
  { name: 'story.jpg', width: 800, height: 600, text: 'Story Image' },
];

images.forEach(image => {
  const svgContent = createPlaceholderSVG(image.width, image.height, image.text);
  fs.writeFileSync(path.join(uploadsDir, image.name.replace('.jpg', '.svg')), svgContent);
}); 
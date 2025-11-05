// Build script for Pug templates
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const templatesDir = path.join(__dirname, 'src', 'frontend', 'Templates');
const distDir = path.join(__dirname, 'dist');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Get all .pug files
const pugFiles = fs.readdirSync(templatesDir)
  .filter(file => file.endsWith('.pug'))
  .map(file => path.join(templatesDir, file));

if (pugFiles.length === 0) {
  console.error('No .pug files found in', templatesDir);
  process.exit(1);
}

// Compile each pug file
pugFiles.forEach(file => {
  try {
    execSync(`pug "${file}" -o "${distDir}"`, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Error compiling ${file}:`, error.message);
    process.exit(1);
  }
});

console.log(`Successfully compiled ${pugFiles.length} pug file(s)`);

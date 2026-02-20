import { copyFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distPath = join(__dirname, '..', 'dist');
copyFileSync(join(distPath, 'index.html'), join(distPath, '404.html'));
console.log('Created 404.html for GitHub Pages SPA routing');

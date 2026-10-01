#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '_src');
const outputDir = path.join(__dirname, 'preview-apf-7c9e4b2d');
const templatesDir = path.join(__dirname, '_templates');

// Read templates
const headerTemplate = fs.readFileSync(path.join(templatesDir, '_header.html'), 'utf-8');
const footerTemplate = fs.readFileSync(path.join(templatesDir, '_footer.html'), 'utf-8');

// Get all HTML files from _src
const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const srcPath = path.join(srcDir, file);
  const outputPath = path.join(outputDir, file);
  
  // Read source file
  let content = fs.readFileSync(srcPath, 'utf-8');
  
  // Replace placeholders
  content = content.replace('<!-- @include _header -->', headerTemplate);
  content = content.replace('<!-- @include _footer -->', footerTemplate);
  
  // Handle aria-current for navigation links
  // Extract current page from filename
  const currentPage = file.replace('.html', '');
  
  // Map filenames to nav link hrefs
  const navMap = {
    'sobre': 'sobre.html',
    'fazemos': 'fazemos.html',
    'noticias-eventos': 'noticias-eventos.html',
    'contactos': 'contactos.html',
    'associe-se': 'associe-se.html'
  };
  
  // Add aria-current to the appropriate nav link
  if (navMap[currentPage]) {
    const navHref = navMap[currentPage];
    // Match the nav link without aria-current and add it
    content = content.replace(
      new RegExp(`<a href="${navHref}">`, 'g'),
      `<a aria-current="page" href="${navHref}">`
    );
    // Also handle button variant for associe-se
    if (currentPage === 'associe-se') {
      content = content.replace(
        /<a class="btn btn-primary" href="associe-se\.html">Associe-se<\/a>/,
        '<a aria-current="page" class="btn btn-primary" href="associe-se.html">Associe-se</a>'
      );
    }
  }
  
  // Write output file
  fs.writeFileSync(outputPath, content, 'utf-8');
  console.log(`✓ Built ${file}`);
});

console.log(`\n✓ Build complete. ${files.length} files processed.`);

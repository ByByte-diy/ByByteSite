#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const prerenderRoutesFile = path.join(__dirname, '../prerendered-routes.txt');
const sitemapFile = path.join(__dirname, '../dist/ByByteSite/browser/sitemap.xml');

// Site URL - should match environment.siteUrl for production
const siteUrl = 'https://bybyte-diy.github.io/ByByteSite';

// Supported languages
const supportedLangs = ['en', 'uk', 'ru'];
const defaultLang = 'en';

/**
 * Get priority for a route based on its path
 */
function getPriority(route) {
  // Root route has highest priority
  if (route === '/' || route === '') {
    return '1.0';
  }
  
  // Language root routes (e.g., /en, /uk, /ru)
  if (supportedLangs.some(lang => route === `/${lang}` || route === `/${lang}/`)) {
    return '0.9';
  }
  
  // Main pages (build, learn, docs, etc.)
  const mainPages = ['/build', '/learn', '/docs', '/blog', '/community', '/products'];
  if (mainPages.some(page => route.includes(page) && !route.match(/\/learn\/[^/]+\/[^/]+\/[^/]+/))) {
    return '0.8';
  }
  
  // Lesson pages have lower priority
  if (route.includes('/learn/')) {
    return '0.6';
  }
  
  // Default priority
  return '0.7';
}

/**
 * Get change frequency for a route
 */
function getChangeFreq(route) {
  // Root and language roots change frequently
  if (route === '/' || supportedLangs.some(lang => route === `/${lang}` || route === `/${lang}/`)) {
    return 'weekly';
  }
  
  // Main pages change monthly
  const mainPages = ['/build', '/learn', '/docs', '/blog', '/community', '/products'];
  if (mainPages.some(page => route.includes(page))) {
    return 'monthly';
  }
  
  // Lesson pages change less frequently
  if (route.includes('/learn/')) {
    return 'monthly';
  }
  
  return 'monthly';
}

/**
 * Generate sitemap.xml from prerendered routes
 */
function generateSitemap() {
  console.log('Generating sitemap.xml...');

  // Check if prerendered routes file exists
  if (!fs.existsSync(prerenderRoutesFile)) {
    console.error(`Prerendered routes file not found: ${prerenderRoutesFile}`);
    console.error('Please run "npm run generate-prerender-routes" first');
    process.exit(1);
  }

  // Read prerendered routes
  const routesText = fs.readFileSync(prerenderRoutesFile, 'utf8');
  const routes = routesText
    .split('\n')
    .map(line => line.trim())
    .filter(line => line && !line.startsWith('#'));

  if (routes.length === 0) {
    console.error('No routes found in prerendered-routes.txt');
    process.exit(1);
  }

  // Get current date in ISO format
  const lastmod = new Date().toISOString().split('T')[0];

  // Generate sitemap XML
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

  // Add each route to sitemap
  routes.forEach(route => {
    // Normalize route (ensure it starts with /)
    let normalizedRoute = route.startsWith('/') ? route : `/${route}`;
    
    // Remove baseHref from route if present (routes in prerendered-routes.txt might include it)
    const baseHref = '/ByByteSite/';
    if (normalizedRoute.startsWith(baseHref)) {
      normalizedRoute = normalizedRoute.substring(baseHref.length - 1); // -1 to keep leading /
    }
    
    // Build full URL (baseHref is already in siteUrl)
    const fullUrl = `${siteUrl}${normalizedRoute}`;
    
    // Get priority and change frequency
    const priority = getPriority(normalizedRoute);
    const changefreq = getChangeFreq(normalizedRoute);
    
    // Check if this is a language-specific route
    const langMatch = normalizedRoute.match(/^\/(en|uk|ru)(\/|$)/);
    
    if (langMatch) {
      // Language-specific route - add alternate language links
      const currentLang = langMatch[1];
      const routeWithoutLang = normalizedRoute.replace(/^\/(en|uk|ru)/, '') || '/';
      
      sitemap += `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>`;
      
      // Add alternate language links
      supportedLangs.forEach(lang => {
        const altUrl = `${siteUrl}/${lang}${routeWithoutLang === '/' ? '' : routeWithoutLang}`;
        sitemap += `
    <xhtml:link rel="alternate" hreflang="${lang}" href="${altUrl}"/>`;
      });
      
      // Add x-default (usually default language)
      const defaultUrl = `${siteUrl}/${defaultLang}${routeWithoutLang === '/' ? '' : routeWithoutLang}`;
      sitemap += `
    <xhtml:link rel="alternate" hreflang="x-default" href="${defaultUrl}"/>`;
      
      sitemap += `
  </url>
`;
    } else {
      // Root route or route without language prefix
      sitemap += `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>`;
      
      // For root route, add alternate language links
      if (normalizedRoute === '/') {
        supportedLangs.forEach(lang => {
          const altUrl = `${siteUrl}/${lang}`;
          sitemap += `
    <xhtml:link rel="alternate" hreflang="${lang}" href="${altUrl}"/>`;
        });
        sitemap += `
    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}/${defaultLang}"/>`;
      }
      
      sitemap += `
  </url>
`;
    }
  });

  sitemap += `</urlset>`;

  // Ensure dist directory exists
  const distDir = path.dirname(sitemapFile);
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  // Write sitemap.xml
  fs.writeFileSync(sitemapFile, sitemap, 'utf8');
  console.log(`✅ Sitemap.xml generated successfully at: ${sitemapFile}`);
  console.log(`   - Total URLs: ${routes.length}`);
  console.log(`   - Site URL: ${siteUrl}`);
}

// Run if called directly
if (require.main === module) {
  try {
    generateSitemap();
  } catch (error) {
    console.error('Error generating sitemap:', error.message);
    process.exit(1);
  }
}

module.exports = { generateSitemap };


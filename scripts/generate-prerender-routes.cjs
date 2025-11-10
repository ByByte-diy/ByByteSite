#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../src/assets/content/index.json');
const prerenderRoutesFile = path.join(__dirname, '../prerendered-routes.txt');

// Supported languages - should match environment.supportedLangs
const supportedLangs = ['en', 'uk', 'ru'];

/**
 * Generate localized routes for each language
 */
function generateLocalizedRoutes(baseRoutes, lang) {
  return baseRoutes.map(route => {
    if (route === '/') {
      return `/${lang}`;
    }
    return `/${lang}${route}`;
  });
}

function generatePrerenderRoutes() {
  console.log('Generating prerender routes with language support...');
  
  // Base routes (without language prefix) - only for generating localized routes
  // Note: We only prerender root '/' and routes with language prefixes
  const baseRoutes = [
    '/',
    '/build',
    '/community',
    '/products',
    '/docs',
    '/blog',
    '/learn'
  ];

  // Start with root route only
  const routes = ['/'];

  try {
    const indexContent = fs.readFileSync(indexPath, 'utf8');
    const index = JSON.parse(indexContent);

    // Get platforms, levels, and lessons for localized routes
    const platforms = index.platforms || [];
    const levels = index.levels || [];
    const lessons = index.lessons || [];

    // Generate localized routes for each language
    const localizedRoutes = [];
    supportedLangs.forEach(lang => {
      // Add base localized routes (home, build, community, etc.)
      const langBaseRoutes = generateLocalizedRoutes(baseRoutes, lang);
      localizedRoutes.push(...langBaseRoutes);
      
      // Add localized platform routes
      platforms.forEach(platform => {
        localizedRoutes.push(`/${lang}/learn/${platform}`);
      });
      
      // Add localized level routes
      platforms.forEach(platform => {
        levels.forEach(level => {
          localizedRoutes.push(`/${lang}/learn/${platform}/${level}`);
        });
      });
      
      // Add localized lesson routes
      lessons.forEach(lesson => {
        if (lesson.platforms && lesson.platforms.length > 0 && lesson.level && lesson.slug) {
          const platform = lesson.platforms[0];
          localizedRoutes.push(`/${lang}/learn/${platform}/${lesson.level}/${lesson.slug}`);
        }
      });
    });

    // Combine root route and localized routes (no base routes without language prefix)
    const allRoutes = [...routes, ...localizedRoutes];

    // Remove duplicates
    const uniqueRoutes = [...new Set(allRoutes)];

    console.log(`Generated ${uniqueRoutes.length} prerender routes`);
    console.log(`- Root route: 1`);
    console.log(`- Localized routes: ${localizedRoutes.length}`);
    console.log(`- Total unique routes: ${uniqueRoutes.length}`);
    
    // Save routes in text format (one route per line)
    const routesText = uniqueRoutes.join('\n') + '\n';
    fs.writeFileSync(prerenderRoutesFile, routesText, 'utf8');
    console.log(`Prerender routes saved to: ${prerenderRoutesFile}`);
    
    return uniqueRoutes;
  } catch (error) {
    console.error('Error generating prerender routes:', error.message);
    
    // Fallback: generate at least root and basic localized routes
    const fallbackRoutes = ['/'];
    supportedLangs.forEach(lang => {
      fallbackRoutes.push(...generateLocalizedRoutes(baseRoutes, lang));
    });
    
    const uniqueRoutes = [...new Set(fallbackRoutes)];
    const routesText = uniqueRoutes.join('\n') + '\n';
    fs.writeFileSync(prerenderRoutesFile, routesText, 'utf8');
    console.log(`Saved fallback routes: ${uniqueRoutes.length} routes`);
    
    return uniqueRoutes;
  }
}

generatePrerenderRoutes();

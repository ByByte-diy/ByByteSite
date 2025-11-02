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
  
  // Base routes (without language prefix)
  const baseRoutes = [
    '/',
    '/build',
    '/community',
    '/products',
    '/docs',
    '/blog',
    '/learn'
  ];

  // Start with base routes (for backwards compatibility)
  let routes = [...baseRoutes];

  try {
    const indexContent = fs.readFileSync(indexPath, 'utf8');
    const index = JSON.parse(indexContent);

    // Add routes for platforms
    const platforms = index.platforms || [];
    platforms.forEach(platform => {
      routes.push(`/learn/${platform}`);
    });

    // Add routes for levels
    const levels = index.levels || [];
    platforms.forEach(platform => {
      levels.forEach(level => {
        routes.push(`/learn/${platform}/${level}`);
      });
    });

    // Add routes for specific lessons
    const lessons = index.lessons || [];
    lessons.forEach(lesson => {
      if (lesson.platforms && lesson.platforms.length > 0 && lesson.level && lesson.slug) {
        // Use first platform for route
        const platform = lesson.platforms[0];
        routes.push(`/learn/${platform}/${lesson.level}/${lesson.slug}`);
      }
    });

    // Generate localized routes for each language
    const localizedRoutes = [];
    supportedLangs.forEach(lang => {
      // Add base localized routes
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

    // Combine base routes and localized routes
    const allRoutes = [...routes, ...localizedRoutes];

    // Remove duplicates
    const uniqueRoutes = [...new Set(allRoutes)];

    console.log(`Generated ${uniqueRoutes.length} prerender routes`);
    console.log(`- Base routes: ${routes.length}`);
    console.log(`- Localized routes: ${localizedRoutes.length}`);
    console.log(`- Total unique routes: ${uniqueRoutes.length}`);
    
    // Save routes in text format (one route per line)
    const routesText = uniqueRoutes.join('\n') + '\n';
    fs.writeFileSync(prerenderRoutesFile, routesText, 'utf8');
    console.log(`Prerender routes saved to: ${prerenderRoutesFile}`);
    
    return uniqueRoutes;
  } catch (error) {
    console.error('Error generating prerender routes:', error.message);
    
    // Fallback: generate at least base localized routes
    const fallbackRoutes = [...routes];
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

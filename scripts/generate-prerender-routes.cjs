const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../src/assets/content/index.json');
const prerenderRoutesFile = path.join(__dirname, '../prerendered-routes.txt');

function generatePrerenderRoutes() {
  console.log('Generating prerender routes...');
  
  // Base routes
  let routes = [
    '/',
    '/build',
    '/community',
    '/products',
    '/docs',
    '/blog',
    '/learn'
  ];

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

    // Remove duplicates
    const uniqueRoutes = [...new Set(routes)];

    console.log(`Generated ${uniqueRoutes.length} prerender routes`);
    console.log('Routes:', uniqueRoutes);
    
    // Save routes in text format (one route per line)
    const routesText = uniqueRoutes.join('\n') + '\n';
    fs.writeFileSync(prerenderRoutesFile, routesText, 'utf8');
    console.log(`Prerender routes saved to: ${prerenderRoutesFile}`);
    
    return uniqueRoutes;
  } catch (error) {
    console.error('Error generating prerender routes:', error.message);
    return routes;
  }
}

generatePrerenderRoutes();

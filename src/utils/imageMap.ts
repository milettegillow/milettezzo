/**
 * Image mapping utilities for Astro Image component
 * 
 * Uses import.meta.glob() to dynamically import images and create a path-to-image mapping
 */

// Import all performance images
const performanceImages = import.meta.glob('../images/performances/*.{jpg,jpeg,png}', { 
  eager: true,
  import: 'default'
});

// Import all BTS images
const btsImages = import.meta.glob('../images/bts/*.{jpg,jpeg,png}', { 
  eager: true,
  import: 'default'
});

// Import all digital images  
const digitalImages = import.meta.glob('../images/digital/*.{jpg,jpeg,png}', { 
  eager: true,
  import: 'default'
});

/**
 * Create a mapping from public path to imported image
 * Example: "/images/performances/carmen.jpg" -> imported image module
 */
function createImageMap(images: Record<string, any>, basePath: string): Map<string, any> {
  const map = new Map();
  for (const [importPath, image] of Object.entries(images)) {
    // Extract filename from import path (e.g., "../images/performances/carmen.jpg" -> "carmen.jpg")
    const filename = importPath.split('/').pop() || '';
    // Map the public path
    const publicPath = `${basePath}/${filename}`;
    map.set(publicPath, image);
    // Also map by filename for flexibility
    map.set(filename, image);
  }
  return map;
}

// Create mappings
const performanceImageMap = createImageMap(performanceImages, '/images/performances');
const btsImageMap = createImageMap(btsImages, '/images/bts');
const digitalImageMap = createImageMap(digitalImages, '/images/digital');

/**
 * Get imported image for a given public path
 * @param imagePath - Public path like "/images/performances/carmen.jpg"
 * @returns Imported image module or null if not found
 */
export function getImageForPath(imagePath: string): any {
  // Try exact match first
  if (performanceImageMap.has(imagePath)) {
    return performanceImageMap.get(imagePath);
  }
  if (btsImageMap.has(imagePath)) {
    return btsImageMap.get(imagePath);
  }
  if (digitalImageMap.has(imagePath)) {
    return digitalImageMap.get(imagePath);
  }
  
  // Try extracting filename and matching
  const filename = imagePath.split('/').pop() || '';
  if (performanceImageMap.has(filename)) {
    return performanceImageMap.get(filename);
  }
  if (btsImageMap.has(filename)) {
    return btsImageMap.get(filename);
  }
  if (digitalImageMap.has(filename)) {
    return digitalImageMap.get(filename);
  }
  
  return null;
}


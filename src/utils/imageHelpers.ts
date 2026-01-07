/**
 * Image helper utilities for Astro Image component
 * 
 * For carousel images, we can use getImage() with paths from public/
 * This provides some optimization, though importing images directly is better.
 * 
 * To fully optimize carousel images:
 * 1. Copy images from public/images/ to src/images/
 * 2. Use import.meta.glob() to import them dynamically
 * 3. Update carousel components to use the imported images
 */

import { getImage } from "astro:assets";

/**
 * Get optimized image URL from a public path
 * This works but is less optimal than importing images directly
 * 
 * @param imagePath - Path from public/ directory (e.g., "/images/digital/spiderpig.jpg")
 * @param width - Target width for optimization
 * @param height - Target height for optimization
 * @returns Optimized image URL
 */
export async function getOptimizedImageUrl(
  imagePath: string,
  width: number = 400,
  height: number = 600
): Promise<string> {
  // For now, return the original path
  // To fully optimize, import images and use getImage()
  // This is a placeholder for future optimization
  return imagePath;
}

/**
 * Example: Using import.meta.glob() for carousel images
 * 
 * In your component:
 * ```ts
 * const imageModules = import.meta.glob('../images/digital/*.{jpg,jpeg,png}', { eager: true });
 * const imageMap = Object.fromEntries(
 *   Object.entries(imageModules).map(([path, module]) => [
 *     path.split('/').pop()?.replace(/\.(jpg|jpeg|png)$/, ''),
 *     module.default
 *   ])
 * );
 * ```
 */


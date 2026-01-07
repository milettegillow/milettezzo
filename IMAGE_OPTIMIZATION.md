# Image Optimization Guide

## Current Optimizations Applied

✅ **Astro Image Component** - Critical images (hero, portrait, bio) now use Astro's optimized Image component
✅ **Preloading critical images** - Hero images are preloaded for faster initial render
✅ **Fetchpriority** - Above-the-fold images use `fetchpriority="high"`
✅ **Lazy loading** - Below-the-fold images use `loading="lazy"`
✅ **Async decoding** - All images use `decoding="async"` for non-blocking rendering
✅ **Width/Height attributes** - Added to prevent layout shift (where dimensions are known)
✅ **Automatic optimization** - Astro automatically generates WebP/AVIF versions and responsive sizes

## Migrated Images

The following critical images have been migrated to use Astro's Image component:
- `/src/images/hero.jpg` - Home page hero background
- `/src/images/portrait.jpg` - Home page portrait
- `/src/images/bio.jpg` - Biography page portrait
- `/src/images/digital/hgo-vixen.jpg` - Digital page hero background

These images are now automatically optimized with:
- Multiple responsive sizes
- Modern format conversion (WebP, AVIF)
- Proper width/height attributes
- Optimized file sizes

## Further Optimization Options

### Option 1: Use Astro's Built-in Image Component (Recommended)

Astro's `Image` component automatically:
- Generates multiple image sizes (responsive images)
- Converts to modern formats (WebP, AVIF) with fallbacks
- Optimizes file sizes
- Adds proper width/height attributes

**Example migration:**

```astro
---
import { Image } from 'astro:assets';
import heroImage from '../images/hero.jpg';
---

<Image 
  src={heroImage} 
  alt="Hero image"
  loading="eager"
  fetchpriority="high"
/>
```

**Note:** This requires importing images as modules, which means moving images from `public/` to `src/images/` or using `import.meta.glob()`.

### Option 2: Use a CDN with Image Optimization

Services like Cloudinary, Imgix, or Cloudflare Images can:
- Automatically optimize images
- Generate responsive sizes
- Convert formats
- Cache globally

### Option 3: Manual Image Optimization

Before uploading images:
1. **Compress images** using tools like:
   - Squoosh (https://squoosh.app)
   - ImageOptim (Mac)
   - TinyPNG (online)

2. **Use appropriate formats:**
   - WebP for photos (better compression than JPEG)
   - AVIF for modern browsers (even better compression)
   - Keep JPEG as fallback

3. **Resize images** to the maximum size they'll be displayed:
   - Hero images: ~1920px wide max
   - Portrait images: ~800px wide max
   - Carousel tiles: ~400px wide max

### Quick Wins

1. **Compress existing images:**
   ```bash
   # Using ImageMagick (if installed)
   find public/images -name "*.jpg" -exec mogrify -quality 85 -strip {} \;
   ```

2. **Check image sizes:**
   - Aim for < 200KB per image
   - Hero images can be larger (~500KB) but should be optimized

3. **Consider using `<picture>` element** for format fallbacks:
   ```html
   <picture>
     <source srcset="image.avif" type="image/avif">
     <source srcset="image.webp" type="image/webp">
     <img src="image.jpg" alt="Description">
   </picture>
   ```

## Monitoring Performance

Use browser DevTools:
1. Open Network tab
2. Filter by "Img"
3. Check:
   - Total image size
   - Load time
   - Which images are blocking render

Use Lighthouse:
- Run Lighthouse audit
- Check "Efficiently encode images" recommendations
- Aim for score > 90


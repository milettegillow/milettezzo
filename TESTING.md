# Testing Astro Image Component Migration

## What Was Changed

✅ **Home Page** (`src/pages/index.astro`)
- Hero background image now uses Astro's optimized Image component
- Portrait image uses Astro's Image component
- Images imported from `src/images/hero.jpg` and `src/images/portrait.jpg`

✅ **Biography Page** (`src/pages/biography.astro`)
- Portrait image uses Astro's Image component
- Image imported from `src/images/bio.jpg`

✅ **Digital Page** (`src/pages/digital.astro`)
- Hero background image uses Astro's optimized Image component
- Image imported from `src/images/digital/hgo-vixen.jpg`

## How to Test

1. **Start the dev server:**
   ```bash
   npm run dev
   ```

2. **Check each page:**
   - **Home page** (`/`): Verify hero image and portrait load correctly
   - **Biography page** (`/biography`): Verify portrait image loads correctly
   - **Digital page** (`/digital`): Verify hero background image loads correctly

3. **Check browser DevTools:**
   - Open Network tab
   - Filter by "Img"
   - Look for:
     - Images should have optimized formats (WebP/AVIF)
     - Responsive `srcset` attributes
     - Proper width/height attributes
     - Faster load times

4. **Check the build:**
   ```bash
   npm run build
   ```
   - Should generate optimized images in `dist/_astro/`
   - Check file sizes - should be smaller than originals

5. **Visual verification:**
   - Images should look identical to before
   - No layout shifts (images should have proper dimensions)
   - No broken images

## Expected Benefits

- ✅ Smaller file sizes (WebP/AVIF formats)
- ✅ Responsive images (multiple sizes)
- ✅ Faster loading
- ✅ Better Core Web Vitals scores

## Troubleshooting

If images don't load:
1. Check that images exist in `src/images/`
2. Check browser console for errors
3. Verify import paths are correct
4. Check that Astro version supports Image component (v2.1+)

If build fails:
1. Check that all image imports are valid
2. Verify image files exist
3. Check for TypeScript errors


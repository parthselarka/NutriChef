# Nutrichef Logo Setup

## Current Logo
- `nutrichef-ai-high-resolution-logo-transparent.png` - Main logo used across the website

## Logo Usage in Components

### Header Component
- Logo displays at 32px height (responsive)
- Located in top navigation bar
- Links to home page (can be added)

### Footer Component  
- Logo displays at 40px height
- Used in brand section
- No background/container needed due to transparent PNG

## Favicon Setup

To set up your logo as the browser icon (favicon):

### Method 1: Next.js App Directory (Recommended)
1. Copy your `nutrichef-ai-high-resolution-logo-transparent.png`
2. Rename it to `icon.png` 
3. Place it in `/src/app/icon.png`
4. Next.js will automatically generate all favicon sizes

### Method 2: Manual Conversion
1. **Use online converter**
   - Go to https://favicon.io/favicon-converter/
   - Upload your `nutrichef-ai-high-resolution-logo-transparent.png`
   - Download the generated `favicon.ico`
   - Replace `/src/app/favicon.ico` with the new file

2. **Use your design tool**
   - Create a 32x32px version of your logo
   - Export as `.ico` format
   - Replace `/src/app/favicon.ico`

### Current Setup
- ✅ Metadata configured to use your logo as favicon
- ✅ Icons configured for multiple sizes (16x16, 32x32, 180x180)
- ✅ Apple touch icon configured
- ✅ Open Graph and Twitter card images set

## Logo Guidelines

- **Format**: PNG with transparency
- **Header size**: 120x40px (auto-scaled to h-8)
- **Footer size**: 120x40px (auto-scaled to h-10)
- **Favicon size**: 32x32px or 16x16px

## File Structure
```
public/
  logos/
    nutrichef-ai-high-resolution-logo-transparent.png
src/
  app/
    favicon.ico (replace this with your icon)
```

## Components Updated
- ✅ Header.js - Uses your logo
- ✅ Footer.js - Uses your logo  
- ✅ Layout.js - Favicon and metadata configured
- ⏳ Icon file - Copy logo as `/src/app/icon.png`

## Next Steps
1. Add your logo file to `/public/logos/`
2. **Copy your logo to `/src/app/icon.png` for favicon**
3. Test the website to ensure logos and favicon display correctly

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Nuxt.js 2, Vue.js, and Three.js. The portfolio features an interactive 3D animated sphere on the landing page created with custom GLSL shaders, and a comprehensive about page showcasing projects and skills.

**Key Technologies:**
- Nuxt.js 2.15.7 (Vue.js framework with static site generation)
- Three.js for WebGL/3D graphics
- GSAP for animations
- Tailwind CSS for styling
- Google Fonts (Raleway)
- Vue-gtag for Google Analytics

## Architecture

### Page Structure
- `pages/index.vue` - Landing page with 3D animated sphere and hero text
- `pages/about.vue` - Main content page with navigation, projects, and contact sections

### Key Components
- **3D Landing Scene**: Complex Three.js setup with custom vertex/fragment shaders for animated icosahedron
- **Navigation**: Fixed header with smooth scroll to sections using hash routing
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints

### Configuration Files
- `nuxt.config.js` - Nuxt configuration with static site generation, Google Fonts, and scroll behavior
- `tailwind.config.js` - Custom color palette (dove-gray, mariner, iron) and grid configurations
- `plugins/gtag.js` - Google Analytics integration

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production (static generation)
npm run build

# Start production server
npm run start

# Generate static files for deployment
npm run generate

# Deploy to GitHub Pages
npm run deploy
```

## Deployment

The site is configured for static site generation (`target: "static"` in nuxt.config.js) and deploys to Netlify at https://cotsao.netlify.app. The `deploy` script uses gh-pages to deploy the generated `dist/` folder.

## Custom Styling

- Uses Raleway font family loaded via @nuxtjs/google-fonts
- Custom Tailwind color palette with semantic color names
- Mobile-responsive typography with viewport-relative font sizes
- Custom grid templates for card layouts and skill displays

## 3D Graphics Implementation

The landing page features a complex Three.js scene with:
- Icosahedron geometry with 64 subdivisions
- Custom GLSL shaders with Perlin noise distortion
- Orbital controls with auto-rotation
- 1500 procedurally placed star meshes
- Smooth camera transitions using GSAP

## Navigation Behavior

Custom scroll behavior implementation in nuxt.config.js provides smooth scrolling to hash anchors with a fallback mechanism for dynamically loaded content.
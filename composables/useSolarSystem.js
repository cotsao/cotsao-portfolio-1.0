export function useSolarSystem() {
  // Solar system data with accurate relative sizes and distances
  const planets = [
    {
      name: 'Mercury',
      type: 'rocky',       // Rocky planet - use texture
      radius: 0.38,        // Relative to Earth (0.38x Earth's radius)
      distance: 0.39,      // AU from Sun (39% of Earth's distance)
      colorPalette: {      // Gray rocky surface colors
        brightness: [0.6, 0.5, 0.4],
        contrast: [0.7, 0.6, 0.5], 
        oscilation: [1.5, 1.3, 1.0],
        phase: [0.0, 0.2, 0.4]
      },
      textureColor: 0x8c7853, // Fallback color for texture
      speed: 4.15,         // Relative orbital speed (faster = closer to sun)
      angle: 0
    },
    {
      name: 'Venus', 
      type: 'rocky',       // Rocky planet - use texture
      radius: 0.95,        // Almost Earth size
      distance: 0.72,      // 72% of Earth's distance
      colorPalette: {      // Creamy yellow sulfuric atmosphere
        brightness: [1.0, 0.9, 0.7],
        contrast: [0.6, 0.7, 0.8],
        oscilation: [1.4, 1.2, 0.8],
        phase: [0.0, 0.2, 0.4]
      },
      textureColor: 0xffc649, // Fallback color for texture
      speed: 1.62,
      angle: 0
    },
    {
      name: 'Earth',
      type: 'rocky',       // Rocky planet - use texture
      radius: 1.0,         // Reference size
      distance: 1.0,       // 1 AU (reference distance)
      colorPalette: {      // Blue oceans, green continents, white clouds
        brightness: [0.3, 0.6, 0.9],
        contrast: [0.8, 0.9, 0.7],
        oscilation: [1.6, 1.2, 1.4],
        phase: [0.4, 0.6, 0.2]
      },
      textureColor: 0x6b93d6, // Fallback color for texture
      speed: 1.0,          // Reference speed
      angle: 0
    },
    {
      name: 'Mars',
      type: 'rocky',       // Rocky planet - use texture
      radius: 0.53,        // About half Earth size
      distance: 1.52,      // 152% of Earth's distance  
      colorPalette: {      // Rusty red iron oxide surface
        brightness: [0.9, 0.5, 0.3],
        contrast: [0.8, 0.7, 0.6],
        oscilation: [1.3, 1.5, 1.1],
        phase: [0.0, 0.3, 0.5]
      },
      textureColor: 0xc1440e, // Fallback color for texture
      speed: 0.53,
      angle: 0
    },
    {
      name: 'Jupiter',
      type: 'gas',         // Gas giant - use texture
      radius: 11.0,        // 11x Earth's size
      distance: 5.2,       // 5.2 AU
      colorPalette: {      // Warm browns, oranges, creams (current Jupiter colors)
        brightness: [0.8, 0.7, 0.5],
        contrast: [0.7, 0.6, 0.5],
        oscilation: [1.3, 1.1, 0.9],
        phase: [0.0, 0.2, 0.4]
      },
      textureColor: 0xd8ca9d, // Fallback color for texture
      speed: 0.084,
      angle: 0
    },
    {
      name: 'Saturn',
      type: 'gas',         // Gas giant - use texture
      radius: 9.0,         // 9x Earth's size
      distance: 9.5,       // 9.5 AU
      colorPalette: {      // Pale golden yellow
        brightness: [0.9, 0.8, 0.6],
        contrast: [0.6, 0.7, 0.8],
        oscilation: [1.2, 1.1, 0.9],
        phase: [0.2, 0.0, 0.3]
      },
      textureColor: 0xfad5a5, // Fallback color for texture
      speed: 0.034,
      angle: 0
    },
    {
      name: 'Uranus',
      type: 'gas',         // Gas giant - use texture
      radius: 4.0,         // 4x Earth's size
      distance: 19.2,      // 19.2 AU
      colorPalette: {      // Pale cyan-blue methane atmosphere
        brightness: [0.5, 0.8, 1.0],
        contrast: [0.6, 0.5, 0.7],
        oscilation: [1.1, 1.3, 1.5],
        phase: [0.5, 0.3, 0.0]
      },
      textureColor: 0x4fd0e7, // Fallback color for texture
      speed: 0.012,
      angle: 0
    },
    {
      name: 'Neptune',
      type: 'gas',         // Gas giant - use texture
      radius: 3.9,         // ~4x Earth's size
      distance: 30.0,      // 30 AU
      colorPalette: {      // Deep vibrant blue
        brightness: [0.3, 0.5, 1.0],
        contrast: [0.7, 0.8, 0.6],
        oscilation: [0.9, 1.1, 1.3],
        phase: [0.6, 0.4, 0.2]
      },
      textureColor: 0x4b70dd, // Fallback color for texture
      speed: 0.006,
      angle: 0
    }
  ];

  // Scale factors for visualization - fits within star field range (-250 to +250)
  // Neptune at 30 AU needs to fit within ~200 units, so scale = 200/30 = 6.7
  const distanceScale = 6.5;  // Scale distances to fit within star field
  const sizeScale = 0.3;      // Much smaller planets so you can see multiple planets at once
  const minSize = 0.2;        // Minimum size for smallest planets to remain visible

  const createPlanetShader = (colorPalette) => {
    const noise = `
// GLSL textureless classic 3D noise "cnoise",
// with an RSL-style periodic variant "pnoise".
// Author:  Stefan Gustavson (stefan.gustavson@liu.se)
// Version: 2011-10-11
//
// Many thanks to Ian McEwan of Ashima Arts for the
// ideas for permutation and gradient selection.
//
// Copyright (c) 2011 Stefan Gustavson. All rights reserved.
// Distributed under the MIT license. See LICENSE file.
// https://github.com/ashima/webgl-noise
//

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}
`;

    const rotation = `
mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);

  return mat3(
    c, 0.0, -s,
    0.0, 1.0, 0.0,
    s, 0.0, c
  );
}

vec3 rotateY(vec3 v, float angle) {
  return rotation3dY(angle) * v;
}  
`;

    const vertexShader = `  
varying vec2 vUv;
varying float vDistort;

uniform float uTime;
uniform float uSpeed;
uniform float uNoiseDensity;
uniform float uNoiseStrength;
uniform float uFrequency;
uniform float uAmplitude;

${noise}

${rotation}

void main() {
  vUv = uv;
  
  float t = uTime * uSpeed;
  float distortion = pnoise((normal + t) * uNoiseDensity, vec3(10.0)) * uNoiseStrength;

  vec3 pos = position + (normal * distortion);
  float angle = sin(uv.y * uFrequency + t) * uAmplitude;
  pos = rotateY(pos, angle);    
  
  vDistort = distortion;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}  
`;

    const fragmentShader = `
varying vec2 vUv;
varying float vDistort;

uniform float uTime;
uniform float uIntensity;
uniform vec3 uBrightness;
uniform vec3 uContrast;
uniform vec3 uOscilation;
uniform vec3 uPhase;

vec3 cosPalette(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
  return a + b * cos(6.28318 * (c * t + d));
}     

void main() {
  float distort = vDistort * uIntensity;
  
  vec3 color = cosPalette(distort, uBrightness, uContrast, uOscilation, uPhase);
  
  gl_FragColor = vec4(color, 1.0);
}  
`;

    return { vertexShader, fragmentShader };
  };

  const updateOrbits = (planetMeshes, deltaTime) => {
    planets.forEach((planet, index) => {
      if (planetMeshes[index]) {
        // Update orbital angle
        planet.angle += planet.speed * deltaTime * 0.01;
        
        // Calculate orbital position
        const distance = planet.distance * distanceScale;
        planetMeshes[index].position.x = Math.cos(planet.angle) * distance;
        planetMeshes[index].position.z = Math.sin(planet.angle) * distance;
        
        // Update shader uniforms for animation
        if (planetMeshes[index].material && planetMeshes[index].material.uniforms) {
          planetMeshes[index].material.uniforms.uTime.value = deltaTime * 0.001;
        }
      }
    });
  };

  const getScaledRadius = (planet) => {
    // Ensure minimum visibility while maintaining relative proportions
    return Math.max(planet.radius * sizeScale, minSize);
  };

  return {
    planets,
    distanceScale,
    sizeScale,
    minSize,
    createPlanetShader,
    updateOrbits,
    getScaledRadius
  };
}
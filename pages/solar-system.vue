<template>
  <div class="bg-black text-iron min-h-screen">
    <header>
      <Navigation />
    </header>
    
    <div class="fixed top-20 left-6 z-10 bg-black bg-opacity-50 p-4 rounded-lg">
      <h2 class="text-xl font-raleway mb-4">Solar System</h2>
      <div class="text-sm space-y-1">
        <div class="text-xs opacity-60">Controls:</div>
        <div>Mouse: Look around</div>
        <div>Scroll: Zoom in/out</div>
      </div>
    </div>
    
    <div class="fixed top-20 right-6 z-10 bg-black bg-opacity-50 p-4 rounded-lg max-w-xs">
      <h3 class="text-lg font-raleway mb-2">Planets</h3>
      <div class="text-xs space-y-1">
        <div class="flex justify-between"><span class="text-gray-400">Mercury</span><span>Closest • Gray</span></div>
        <div class="flex justify-between"><span class="text-yellow-300">Venus</span><span>Hottest • White-Yellow</span></div>
        <div class="flex justify-between"><span class="text-blue-400">Earth</span><span>Home • Blue Marble</span></div>
        <div class="flex justify-between"><span class="text-red-400">Mars</span><span>Red Planet</span></div>
        <div class="flex justify-between"><span class="text-yellow-600">Jupiter</span><span>Largest • Gas Giant</span></div>
        <div class="flex justify-between"><span class="text-yellow-400">Saturn</span><span>Ringed • Gas Giant</span></div>
        <div class="flex justify-between"><span class="text-cyan-400">Uranus</span><span>Ice Giant • Tilted</span></div>
        <div class="flex justify-between"><span class="text-blue-600">Neptune</span><span>Farthest • Windy</span></div>
      </div>
    </div>

    <div id="solar-system-scene" class="w-full h-screen"></div>
  </div>
</template>

<script>
import {
  Scene,
  PerspectiveCamera,
  Clock,
  WebGL1Renderer,
  SphereGeometry,
  ShaderMaterial,
  Mesh,
  PointLight,
  AmbientLight,
  Color,
  MeshPhongMaterial,
  MathUtils
} from "three";
import Navigation from "../components/Navigation.vue";
import { useSolarSystem } from "../composables/useSolarSystem.js";

export default {
  components: { Navigation },
  
  async mounted() {
    // Dynamic import to avoid SSR issues
    const { OrbitControls } = await import("three/examples/jsm/controls/OrbitControls");
    const { planets, distanceScale, sizeScale, createPlanetShader, updateOrbits, getScaledRadius } = useSolarSystem();

    /* -------------------------------------------------------------------------- */
    /*                               three.js setup                              */
    /* -------------------------------------------------------------------------- */
    const scene = new Scene();
    scene.background = new Color(0x000011); // Deep space black-blue
    
    const camera = new PerspectiveCamera(
      75,
      innerWidth / innerHeight,
      0.1,
      1000
    );
    // Position camera at Sun's location, but slightly pulled back to see planets
    camera.position.set(0, 2, 5);

    const clock = new Clock();
    const renderer = new WebGL1Renderer({ antialias: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
    renderer.setSize(innerWidth, innerHeight);

    const sceneContainer = document.querySelector("#solar-system-scene");
    sceneContainer.appendChild(renderer.domElement);
    
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 1;     // Allow closer zoom
    controls.maxDistance = 300;   // Allow farther zoom to see full solar system

    /* -------------------------------------------------------------------------- */
    /*                                create planets                              */
    /* -------------------------------------------------------------------------- */
    const planetMeshes = [];
    
    planets.forEach((planet) => {
      // Create geometry with appropriate size
      const radius = getScaledRadius(planet);
      const geometry = new SphereGeometry(radius, 64, 32); // Higher resolution for better quality
      
      // Create animated shader material with planet's color palette
      const { vertexShader, fragmentShader } = createPlanetShader(planet.colorPalette);
      const material = new ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          // Animation uniforms (same as original shader ball)
          uTime: { value: 0 },
          uSpeed: { value: 0.02 },
          uNoiseDensity: { value: 1.5 },
          uNoiseStrength: { value: 0.2 },
          uFrequency: { value: 3.0 },
          uAmplitude: { value: 6.0 },
          uIntensity: { value: 0.3 },
          
          // Planet-specific color palette uniforms
          uBrightness: { value: planet.colorPalette.brightness },
          uContrast: { value: planet.colorPalette.contrast },
          uOscilation: { value: planet.colorPalette.oscilation },
          uPhase: { value: planet.colorPalette.phase }
        }
      });
      
      const mesh = new Mesh(geometry, material);
      
      // Initial position
      const distance = planet.distance * distanceScale;
      mesh.position.x = distance;
      mesh.position.y = 0;
      mesh.position.z = 0;
      
      // Store reference to planet data
      mesh.userData = planet;
      
      scene.add(mesh);
      planetMeshes.push(mesh);
    });

    /* -------------------------------------------------------------------------- */
    /*                                 star field                                 */
    /* -------------------------------------------------------------------------- */
    function addStar() {
      const geometry = new SphereGeometry(0.25, 10, 10);
      const material = new MeshPhongMaterial({ color: 0xffffff });
      const star = new Mesh(geometry, material);
      const [x, y, z] = Array(3)
        .fill()
        .map(() => MathUtils.randFloatSpread(500));
      star.position.set(x, y, z);
      scene.add(star);
    }
    Array(1500)
      .fill()
      .forEach(addStar);

    /* -------------------------------------------------------------------------- */
    /*                                 lighting                                   */
    /* -------------------------------------------------------------------------- */
    // Ambient light for general illumination
    const ambientLight = new AmbientLight(0x404040, 0.3);
    scene.add(ambientLight);
    
    // Point light at center (Sun position) to illuminate planets
    const sunLight = new PointLight(0xffffff, 1, 0);
    sunLight.position.set(0, 0, 0);
    scene.add(sunLight);

    /* -------------------------------------------------------------------------- */
    /*                               animation loop                               */
    /* -------------------------------------------------------------------------- */
    function animate() {
      requestAnimationFrame(animate);
      
      const deltaTime = clock.getDelta();
      
      // Update planet orbits
      updateOrbits(planetMeshes, clock.getElapsedTime());
      
      // Update shader time uniforms for animations
      planetMeshes.forEach(mesh => {
        if (mesh.material.uniforms.uTime) {
          mesh.material.uniforms.uTime.value = clock.getElapsedTime();
        }
      });
      
      controls.update();
      renderer.render(scene, camera);
    }

    animate();

    /* -------------------------------------------------------------------------- */
    /*                               event listeners                              */
    /* -------------------------------------------------------------------------- */
    addEventListener("resize", () => {
      const width = innerWidth;
      const height = innerHeight;
      camera.aspect = width / height;
      renderer.setSize(width, height);
      camera.updateProjectionMatrix();
    });
  },
  
  head() {
    return {
      title: "Solar System - Cody Tsao Dev"
    };
  }
};
</script>

<style scoped>
/* Custom styles for solar system view */
</style>
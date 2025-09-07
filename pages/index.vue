<template>
  <div>
    <div id="app">
      <div
        id="container"
        class="absolute w-full text-center text-white "
        style="top:50%; transform: translate(-50%,-50%); left:50%; z-index: 5;"
      >
        <h1
          id="name"
          class="opacity-0 pointer-events-none select-none font-raleway"
        >
          Cody Tsao
        </h1>
        <p
          id="titles"
          class="opacity-0 pointer-events-none select-none font-raleway"
        >
          Developer | Engineer
        </p>
        <button
          id="button"
          class="px-8 py-4 mt-8 uppercase duration-300 border rounded-lg opacity-0 font-raleway hover:bg-white hover:text-gray-800 "
          style="transform: translateY(30px);"
        >
          About Me
        </button>
      </div>
    </div>
    <div id="scene" class="opacity-0"></div>
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
  MeshPhongMaterial,
  MathUtils,
  PointLight,
  AmbientLight,
  Color,
  DoubleSide,
  TextureLoader,
  LinearMipmapLinearFilter,
  LinearFilter
} from "three";
// OrbitControls will be imported dynamically in mounted hook
import { useAnimations } from "../composables/useAnimations.js";
import { useSolarSystem } from "../composables/useSolarSystem.js";

export default {
  async mounted() {
    const { landingPageAnimations, cameraTransition } = useAnimations();
    const { planets, distanceScale, sizeScale, createPlanetShader, updateOrbits, getScaledRadius } = useSolarSystem();
    
    // Dynamic import to avoid SSR issues
    const { OrbitControls } = await import("three/examples/jsm/controls/OrbitControls");
    const { GLTFLoader } = await import("three/examples/jsm/loaders/GLTFLoader");
    
    /* -------------------------------- settings -------------------------------- */
    const settings = {
      orbitSpeed: 0.02  // Double the orbit speed (was 0.01)
    };
    /* -------------------------------------------------------------------------- */
    /*                                 three stuff                                */
    /* -------------------------------------------------------------------------- */
    const scene = new Scene();
    scene.background = new Color(0x000011); // Deep space black-blue
    const camera = new PerspectiveCamera(
      75,
      innerWidth / innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 2, 8); // Normal camera position

    const clock = new Clock();
    const renderer = new WebGL1Renderer({ 
      antialias: true,
      powerPreference: "high-performance" // Use high-performance GPU if available
    });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2)); // Allow higher pixel ratio for sharper images
    renderer.setClearColor("black", 1);
    renderer.setSize(innerWidth, innerHeight);
    // Enable shadow maps for better lighting (optional performance trade-off)
    renderer.shadowMap.enabled = false; // Disable shadows for better performance

    renderer.domElement.setAttribute("id", "test");

    let test = document.querySelector("#scene");
    /* document.body. */
    test.appendChild(renderer.domElement);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.1; // Slow camera rotation
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 1;
    controls.maxDistance = 50;
    /* ---------------------------- Create Solar System ---------------------------- */
    const planetMeshes = [];
    const textureLoader = new TextureLoader();
    const gltfLoader = new GLTFLoader();
    
    // Planet textures mapping
    const planetTextures = {
      'Mercury': '/textures/mercury.jpg',
      'Venus': '/textures/venus.jpg',
      'Mars': '/textures/mars.jpg',
      'Jupiter': '/textures/jupiter.jpg',
      'Saturn': '/textures/saturn.jpg',
      'Uranus': '/textures/uranus.jpg',
      'Neptune': '/textures/neptune.jpg'
    };
    
    console.log('Creating solar system with', planets.length, 'planets');
    
    // Create planets with different approaches based on type
    for (let index = 0; index < planets.length; index++) {
      const planet = planets[index];
      console.log(`Creating planet ${index + 1}: ${planet.name} (type: ${planet.type})`);
      
      const radius = getScaledRadius(planet) * 3.0;
      const distance = planet.distance * distanceScale * 1.5;
      const initialAngle = (index / planets.length) * Math.PI * 2;
      
      if (planet.name === 'Earth') {
        // Load Earth as 3D model
        console.log('Loading Earth 3D model...');
        gltfLoader.load('/models/earth.gltf', (gltf) => {
          const earthMesh = gltf.scene.children[0]; // Get the planet mesh
          earthMesh.scale.setScalar(radius * 2); // Scale to appropriate size
          
          // Position Earth
          earthMesh.position.x = Math.cos(initialAngle) * distance;
          earthMesh.position.y = 0;
          earthMesh.position.z = Math.sin(initialAngle) * distance;
          
          // Store planet data
          earthMesh.userData = { ...planet, startingAngle: initialAngle };
          
          scene.add(earthMesh);
          planetMeshes[index] = earthMesh;
          console.log(`Earth 3D model loaded and positioned at (${earthMesh.position.x.toFixed(2)}, 0, ${earthMesh.position.z.toFixed(2)})`);
        }, undefined, (error) => {
          console.error('Error loading Earth model:', error);
          // Fallback to textured sphere for Earth
          createTexturedPlanet(planet, index, radius, distance, initialAngle);
        });
      } else if (planet.type === 'rocky' || planet.type === 'gas') {
        // Create textured sphere for rocky planets and gas giants
        createTexturedPlanet(planet, index, radius, distance, initialAngle);
      }
    }
    
    // Helper function to create textured planets
    function createTexturedPlanet(planet, index, radius, distance, initialAngle) {
      console.log(`Creating textured planet: ${planet.name}`);
      // Reduce geometry complexity for better performance
      const geometry = new SphereGeometry(radius, 32, 16);
      
      let material;
      if (planetTextures[planet.name]) {
        // Load texture with error handling
        const texturePath = planetTextures[planet.name];
        console.log(`Loading texture for ${planet.name} from: ${texturePath}`);
        const texture = textureLoader.load(
          texturePath,
          (loadedTexture) => {
            console.log(`✓ Texture loaded successfully for ${planet.name}`);
            // Optimize texture settings for performance
            loadedTexture.generateMipmaps = true;
            loadedTexture.minFilter = LinearMipmapLinearFilter;
            loadedTexture.magFilter = LinearFilter;
          },
          (progress) => {
            console.log(`Loading texture for ${planet.name}:`, (progress.loaded / progress.total * 100) + '%');
          },
          (error) => {
            console.error(`✗ Failed to load texture for ${planet.name}:`, error);
          }
        );
        material = new MeshPhongMaterial({ map: texture });
        console.log(`Created textured material for ${planet.name}`);
      } else {
        // Fallback color
        material = new MeshPhongMaterial({ color: planet.textureColor || 0xffffff });
        console.log(`Using fallback color for ${planet.name}:`, planet.textureColor);
      }
      
      const mesh = new Mesh(geometry, material);
      mesh.position.x = Math.cos(initialAngle) * distance;
      mesh.position.y = 0;
      mesh.position.z = Math.sin(initialAngle) * distance;
      mesh.userData = { ...planet, startingAngle: initialAngle };
      
      scene.add(mesh);
      planetMeshes[index] = mesh;
      console.log(`${planet.name} textured planet positioned at (${mesh.position.x.toFixed(2)}, 0, ${mesh.position.z.toFixed(2)})`);
    }
    
    console.log('Total planets created:', planetMeshes.length);

    /* ----------------------------- populate stars ----------------------------- */
    function addStar() {
      // Reduce star geometry complexity and count for better performance
      const geometry = new SphereGeometry(0.25, 6, 4);
      const material = new MeshPhongMaterial({ color: 0xffffff });
      const star = new Mesh(geometry, material);
      const [x, y, z] = Array(3)
        .fill()
        .map(() => MathUtils.randFloatSpread(500));
      star.position.set(x, y, z);
      scene.add(star);
    }
    // Reduce star count from 1500 to 800 for better performance
    Array(800)
      .fill()
      .forEach(addStar);

    /* ---------------------------------- light --------------------------------- */
    // Ambient light for general illumination
    const ambientLight = new AmbientLight(0x404040, 0.3);
    scene.add(ambientLight);
    
    // Point light at center (Sun position) to illuminate planets
    const sunLight = new PointLight(0xffffff, 1, 0);
    sunLight.position.set(0, 0, 0);
    scene.add(sunLight);

    /* --------------------------------- animate -------------------------------- */
    let stop = false;
    // Pre-calculate distance scaling to avoid repeated multiplication
    const scaledDistanceScale = distanceScale * 1.5;
    
    function animate() {
      requestAnimationFrame(animate);
      
      const elapsedTime = clock.getElapsedTime();
      const baseTime = elapsedTime * settings.orbitSpeed;
      
      // Update planet orbits with optimized calculations
      for (let i = 0; i < planetMeshes.length; i++) {
        const mesh = planetMeshes[i];
        if (mesh && mesh.userData) {
          const planet = mesh.userData;
          const distance = planet.distance * scaledDistanceScale;
          const angle = planet.startingAngle + (baseTime * planet.speed);
          
          // Direct position updates (faster than using .set())
          mesh.position.x = Math.cos(angle) * distance;
          mesh.position.z = Math.sin(angle) * distance;
        }
      }
      
      renderer.render(scene, camera);
      if (!stop) {
        controls.update();
      }
    }

    animate();

    /* -------------------------------------------------------------------------- */
    /*                               event listeners                              */
    /* -------------------------------------------------------------------------- */

    landingPageAnimations();
    
    document.querySelector("#button").addEventListener("click", event => {
      event.preventDefault();
      controls.autoRotate = false;
      controls.reset();
      stop = true;
      
      // Fade out container and fade in scene
      const { fadeIn, fadeInUp } = useAnimations();
      fadeInUp("#container", { opacity: 0, duration: 0.5 });
      fadeIn("#scene", { opacity: 1, duration: 0.5 });
      
      // Camera transition
      cameraTransition(camera, { z: 25, x: 1.57, y: 300 }, {
        duration: 1.5,
        yDelay: 1.5,
        onComplete: () => {
          this.$router.push("/about");
        }
      });
    });

    addEventListener("resize", () => {
      let width = innerWidth;
      let height = innerHeight;
      camera.aspect = width / height;
      renderer.setSize(width, height);
      camera.updateProjectionMatrix();
    });
  },
  head() {
    return {
      title: "Cody Tsao Dev"
    };
  }
};
</script>

<style>
#name {
  transform: translateY(30px);
  text-shadow: 10px 6px 10px #3d5257;
  font-size: 6vw;
  text-transform: uppercase;
  text-indent: 2.6vw;
  letter-spacing: 2.6vw;
}

#titles {
  transform: translateY(30px);
  font-size: 1vw;
  letter-spacing: 1.8vw;
  text-transform: uppercase;
  text-shadow: 10px 6px 10px #3d5257;
}
@media screen and (max-width: 600px) {
  #name {
    font-size: 12vw;
  }
  #titles {
    font-size: 3vw;
  }
}
</style>

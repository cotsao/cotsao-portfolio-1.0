<template>
  <div>
    <div id="app">
      <div
        id="container"
        class="absolute text-white text-center w-full "
        style="top:50%; transform: translate(-50%,-50%); left:50%; z-index: 5;"
      >
        <h1
          id="name"
          class="font-raleway opacity-0 pointer-events-none select-none"
        >
          Cody Tsao
        </h1>
        <p
          id="titles"
          class="font-raleway opacity-0 pointer-events-none select-none"
        >
          Developer | Engineer
        </p>
        <button
          id="button"
          class="border px-8 py-4 rounded-lg font-raleway mt-8 uppercase hover:bg-white hover:text-gray-800 opacity-0 duration-300 "
          style="transform: translateY(30px);"
        >
          View Work
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
  IcosahedronBufferGeometry,
  ShaderMaterial,
  Mesh,
  SphereGeometry,
  MeshPhongMaterial,
  MathUtils,
  PointLight,
  AmbientLight
} from "three";
import gsap from "gsap";
import OrbitControls from "orbit-controls-es6";

export default {
  mounted() {
    /* -------------------------------- settings -------------------------------- */
    const settings = {
      speed: 0.2,
      density: 1.5,
      strength: 0.2,
      frequency: 3.0,
      amplitude: 6.0,
      intensity: 0.0
    };
    /* -------------------------------------------------------------------------- */
    /*                                 math stuff                                 */
    /* -------------------------------------------------------------------------- */
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
  
  vec3 cosPalette(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
    return a + b * cos(6.28318 * (c * t + d));
  }     
  
  void main() {
    float distort = vDistort * uIntensity;
    
    vec3 brightness = vec3(0.5, 0.5, 0.5);
    vec3 contrast = vec3(0.5, 0.5, 0.5);
    vec3 oscilation = vec3(1.0, 1.0, 1.0);
    vec3 phase = vec3(0.30, 0.20, 0.20);
  
    vec3 color = cosPalette(distort, brightness, contrast, oscilation, phase);
    
    gl_FragColor = vec4(color, 1.0);
  }  
`;
    /* -------------------------------------------------------------------------- */
    /*                                 three stuff                                */
    /* -------------------------------------------------------------------------- */
    const scene = new Scene();
    const camera = new PerspectiveCamera(
      75,
      innerWidth / innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 10);

    const clock = new Clock();
    const renderer = new WebGL1Renderer({ antialias: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
    renderer.setClearColor("black", 1);
    renderer.setSize(innerWidth, innerHeight);

    renderer.domElement.setAttribute("id", "test");

    let test = document.querySelector("#scene");
    /* document.body. */
    test.appendChild(renderer.domElement);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.3;
    /* ---------------------------- Icosahedron mesh ---------------------------- */
    const geometry = new IcosahedronBufferGeometry(4, 64);
    const material = new ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uSpeed: { value: settings.speed },
        uNoiseDensity: { value: settings.density },
        uNoiseStrength: { value: settings.strength },
        uFrequency: { value: settings.frequency },
        uAmplitude: { value: settings.amplitude },
        uIntensity: { value: settings.intensity }
      }
    });
    const mesh = new Mesh(geometry, material);

    scene.add(mesh);

    /* ----------------------------- populate stars ----------------------------- */
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

    /* ---------------------------------- light --------------------------------- */
    const pointLight = new PointLight(0xffffff);
    pointLight.position.set(5, 5, 5);

    const ambientLight = new AmbientLight(0xffffff);

    scene.add(pointLight, ambientLight);

    /* --------------------------------- animate -------------------------------- */
    let stop = false;
    let frame = 0;
    function animate() {
      frame += 0.001;
      settings.intensity = 5 * Math.abs(Math.sin(frame)) + 2;
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      if (!stop) {
        controls.update();
      }

      render();
    }
    function render() {
      // Update uniforms
      mesh.material.uniforms.uTime.value = clock.getElapsedTime();
      mesh.material.uniforms.uSpeed.value = settings.speed;
      mesh.material.uniforms.uNoiseDensity.value = settings.density;
      mesh.material.uniforms.uNoiseStrength.value = settings.strength;
      mesh.material.uniforms.uFrequency.value = settings.frequency;
      mesh.material.uniforms.uAmplitude.value = settings.amplitude;
      mesh.material.uniforms.uIntensity.value = settings.intensity;
    }

    animate();

    /* -------------------------------------------------------------------------- */
    /*                               event listeners                              */
    /* -------------------------------------------------------------------------- */

    gsap.to("#name", {
      opacity: 1,
      duration: 2,
      y: 0,
      delay: 2,
      ease: "expo"
    });

    gsap.to("#titles", {
      opacity: 1,
      duration: 2,
      delay: 2.5,
      y: 0,
      ease: "expo"
    });
    gsap.to("#button", {
      opacity: 1,
      duration: 2,
      delay: 2.8,
      y: 0,
      ease: "expo"
    });
    gsap.to("#scene", {
      opacity: 0.8,
      delay: 4,
      duration: 2
    });
    document.querySelector("#button").addEventListener("click", event => {
      event.preventDefault();
      controls.autoRotate = false;
      controls.reset();
      stop = true;
      gsap.to("#container", {
        opacity: 0
      });
      gsap.to("#scene", {
        opacity: 1
      });
      gsap.to(camera.position, {
        z: 25,
        ease: "power3.inOut",
        duration: 2
      });
      gsap.to(camera.rotation, {
        x: 1.57,
        ease: "power3.inOut",
        duration: 2
      });
      gsap.to(camera.position, {
        y: 300,
        ease: "power3.in",
        duration: 2,
        delay: 2,
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

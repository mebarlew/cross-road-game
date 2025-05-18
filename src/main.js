import * as THREE from 'three';
import { createEarth } from './components/Earth';
import { createAtmosphere } from './components/Atmosphere';
import { createCamera } from './components/Camera';
import { createRenderer } from './components/Renderer';
import { createControls } from './components/Controls';
import { createStars } from './components/Stars';
import { createMoon } from './components/Moon';

// Initialize scene and components
const scene = new THREE.Scene();
const camera = createCamera();
const renderer = createRenderer();
const controls = createControls(camera, renderer.domElement);
const earth = createEarth();
const atmosphere = createAtmosphere();
const stars = createStars(10000, 150);
const { moonSystem, update: updateMoon } = createMoon();

// Improved lighting for better visibility
// Main directional light (sun)
const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
directionalLight.position.set(15, 5, 15);
scene.add(directionalLight);

// Secondary light to fill shadows
const secondaryLight = new THREE.DirectionalLight(0xffffff, 0.5);
secondaryLight.position.set(-15, -5, -15);
scene.add(secondaryLight);

// Ambient light for general illumination
const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
scene.add(ambientLight);

// Add objects to scene
scene.add(earth);
scene.add(atmosphere);
scene.add(stars);
scene.add(moonSystem);

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  
  // Update controls
  controls.update();
  
  // Update earth rotation
  earth.rotation.y += 0.001;
  
  // Update moon position and rotation
  updateMoon();
  
  // Render scene
  renderer.render(scene, camera);
}

// Start animation loop
animate();

// Handle window resize
window.addEventListener('resize', () => {
  // Update camera
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  
  // Update renderer
  renderer.setSize(window.innerWidth, window.innerHeight);
});
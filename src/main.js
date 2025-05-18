import * as THREE from 'three';
import { Sphere } from './components/Sphere';
import { Camera } from './components/Camera';
import { Renderer } from './components/Renderer';
import { Atmosphere } from './components/Atmosphere';

const scene = new THREE.Scene();
const camera = Camera();
const renderer = Renderer();

const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  sphere.rotation.y += 0.001;
};

const sphere = Sphere();
const atmosphere = Atmosphere();

scene.add(sphere);
scene.add(atmosphere);

animate();

// Optional: Add window resize handling
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
import * as THREE from 'three';
import "./style.css";
import { Camera } from './components/Camera';
const scene = new THREE.Scene();

const ambientLight = new THREE.AmbientLight();
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight();
directionalLight.position.set(-100, -100, 200);
scene.add(directionalLight);

const camera = Camera();
scene.add(camera);

const renderer = Renderer();
renderer.render(scene, camera);
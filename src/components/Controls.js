import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * Creates orbit controls for camera movement
 * @param {THREE.Camera} camera - Camera to be controlled
 * @param {HTMLElement} domElement - DOM element for event listeners
 * @returns {OrbitControls} Configured orbit controls
 */
export const createControls = (camera, domElement) => {
    // Create controls
    const controls = new OrbitControls(camera, domElement);
    
    // Configure controls
    controls.enableDamping = true;
    controls.dampingFactor = 0.01;
    controls.enableZoom = true;
    controls.enablePan = false;
    controls.autoRotate = false;
    
    // Set min and max distance for zoom
    controls.minDistance = 10; // Prevent zooming too close
    controls.maxDistance = 50; // Prevent zooming too far
    
    // Limit vertical orbit/rotation (in radians)
    controls.minPolarAngle = Math.PI * 0.1; // Limit how high user can orbit
    controls.maxPolarAngle = Math.PI * 0.9; // Limit how low user can orbit
    
    return controls;
};

import * as THREE from 'three';

/**
 * Creates and configures a camera for the scene
 * @returns {THREE.PerspectiveCamera} Configured camera
 */
export const createCamera = () => {
    const camera = new THREE.PerspectiveCamera(
        75, // Field of view
        window.innerWidth / window.innerHeight, // Aspect ratio
        0.1, // Near clipping plane
        1000 // Far clipping plane
    );
    
    // Position the camera
    camera.position.z = 15;
    
    return camera;
};

import * as THREE from 'three';

/**
 * Creates and configures a WebGL renderer
 * @returns {THREE.WebGLRenderer} Configured renderer
 */
export const createRenderer = () => {
    // Create renderer with antialiasing
    const renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    
    // Configure renderer
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // Add canvas to document
    document.body.appendChild(renderer.domElement);
    
    return renderer;
};
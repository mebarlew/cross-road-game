import * as THREE from 'three';
import earthVertexShader from '../shaders/earth/earthVertex.glsl';
import earthFragmentShader from '../shaders/earth/earthFragment.glsl';

/**
 * Creates and configures an Earth mesh with custom shaders
 * @returns {THREE.Mesh} Earth mesh with texture and shader effects
 */
export const createEarth = () => {
    // Create geometry for Earth
    const geometry = new THREE.SphereGeometry(5, 50, 50);
    
    // Load Earth texture
    const texture = new THREE.TextureLoader().load('src/assets/images/earth.jpg');
    
    // Create shader material with the loaded texture
    const material = new THREE.ShaderMaterial({
        vertexShader: earthVertexShader,
        fragmentShader: earthFragmentShader,
        uniforms: {
            globeTexture: { value: texture },
        },
    });
    
    // Create and return Earth mesh
    const earth = new THREE.Mesh(geometry, material);
    return earth;
}; 
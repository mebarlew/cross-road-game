import * as THREE from 'three';
import atmosphereVertexShader from '../shaders/atmosphere/atmosphereVertex.glsl';
import atmosphereFragmentShader from '../shaders/atmosphere/atmosphereFragment.glsl';

/**
 * Creates an atmospheric effect to surround a planet
 * @returns {THREE.Mesh} Atmosphere mesh
 */
export const createAtmosphere = () => {
    // Create geometry for atmosphere (same as planet but scaled up)
    const geometry = new THREE.SphereGeometry(5, 50, 50);
    
    // Create shader material for atmospheric effect
    const material = new THREE.ShaderMaterial({
        vertexShader: atmosphereVertexShader,
        fragmentShader: atmosphereFragmentShader,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide
    });
    
    // Create and configure atmosphere mesh
    const atmosphere = new THREE.Mesh(geometry, material);
    atmosphere.scale.set(1.1, 1.1, 1.1);
    
    return atmosphere;
};
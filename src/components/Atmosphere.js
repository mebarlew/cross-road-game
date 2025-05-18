import * as THREE from 'three';
import atmosphereVertexShader from '../shaders/atmosphere/atmosphereVertex.glsl';
import atmosphereFragmentShader from '../shaders/atmosphere/atmosphereFragment.glsl';

export const Atmosphere = () => {
    const geometry = new THREE.SphereGeometry(5, 50, 50);
    const material = new THREE.ShaderMaterial({
        vertexShader: atmosphereVertexShader,
        fragmentShader: atmosphereFragmentShader,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide
    });
    const atmosphere = new THREE.Mesh(geometry, material);
    atmosphere.scale.set(1.1, 1.1, 1.1);
    return atmosphere;
};
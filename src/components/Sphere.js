import * as THREE from 'three';
import earthVertexShader from '../shaders/earth/earthVertex.glsl';
import earthFragmentShader from '../shaders/earth/earthFragment.glsl';

export const Sphere = () => {
    const geometry = new THREE.SphereGeometry(5, 50, 50);
    const texture = new THREE.TextureLoader().load('/assets/images/earth.jpg');
    const material = new THREE.ShaderMaterial({
        vertexShader: earthVertexShader,
        fragmentShader: earthFragmentShader,
        // passing prop to shaders from parent
        uniforms: {
            globeTexture: { value: texture },
        },
    });
    const sphere = new THREE.Mesh(geometry, material);
    return sphere;
};
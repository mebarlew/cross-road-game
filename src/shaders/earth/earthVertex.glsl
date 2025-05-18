/**
 * Earth vertex shader
 * Passes UV coordinates and normals to the fragment shader
 */

// Outputs to fragment shader
varying vec2 vUv;
varying vec3 vNormal;

void main() {
    // Pass UV coordinates to fragment shader
    vUv = uv;
    
    // Calculate and normalize normal vector
    vNormal = normalize(normalMatrix * normal);
    
    // Set vertex position in clip space
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
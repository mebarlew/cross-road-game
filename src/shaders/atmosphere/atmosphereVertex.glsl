/**
 * Atmosphere vertex shader
 * Calculates the normal vectors for the atmosphere effect
 */

// Output to fragment shader
varying vec3 vNormal;

void main() {
  // Calculate and normalize normal vector
  vNormal = normalize(normalMatrix * normal);
  
  // Set vertex position in clip space
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 0.9);
}
/**
 * Atmosphere fragment shader
 * Creates a glowing atmosphere effect based on view angle
 */

// Input from vertex shader
varying vec3 vNormal;

void main() {
  // Calculate glow intensity based on view angle
  float intensity = pow(0.6 - dot(vNormal, vec3(0, 0, 1.0)), 2.0);
  
  // Set atmosphere color with calculated intensity
  gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;
}
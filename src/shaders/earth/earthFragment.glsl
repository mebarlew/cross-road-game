/**
 * Earth fragment shader
 * Combines texture with atmospheric rim effect
 */

// Texture from JavaScript
uniform sampler2D globeTexture;

// Inputs from vertex shader
varying vec2 vUv;
varying vec3 vNormal;

void main() {
    // Calculate atmosphere intensity based on angle to view direction
    float intensity = 1.05 - dot(vNormal, vec3(0.0, 0.0, 1.0));
    
    // Create atmospheric rim effect color
    vec3 atmosphere = vec3(0.3, 0.6, 0.9) * pow(intensity, 1.5);
    
    // Combine texture with atmosphere effect
    vec3 textureColor = texture2D(globeTexture, vUv).xyz;
    vec3 finalColor = atmosphere + textureColor;
    
    // Set final color with full opacity
    gl_FragColor = vec4(finalColor, 1.0);
}
uniform sampler2D globeTexture;

varying vec2 vUv;
varying vec3 vNormal;

void main() {
    float intensity = 1.05 - dot(vNormal, vec3(0.0, 0.0, 1.0));
    vec3 atmosphere = vec3(0.3, 0.6, 0.9) * pow(intensity, 1.5);

    gl_FragColor = vec4( vec3(atmosphere + texture2D(globeTexture, vUv).xyz), 1.0);
}
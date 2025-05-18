import * as THREE from 'three';

/**
 * Creates a star field with randomly positioned stars
 * @param {number} count - Number of stars to generate
 * @param {number} distance - Distance from center where stars will be placed
 * @returns {THREE.Points} Star field as particle system
 */
export const createStars = (count = 10000, distance = 100) => {
    // Create geometry for stars
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesArray = new Float32Array(count * 3);
    
    // Generate random positions for each star
    for (let i = 0; i < count * 3; i++) {
        // Create random positions in a sphere
        particlesArray[i] = (Math.random() - 0.5) * distance;
    }
    
    // Set the positions attribute
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlesArray, 3));
    
    // Load a circular point texture for better-looking stars
    const textureLoader = new THREE.TextureLoader();
    
    // Create a canvas texture for stars
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const context = canvas.getContext('2d');
    
    // Draw a circular gradient for each star
    const gradient = context.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width / 2
    );
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.2, 'rgba(240,240,240,0.8)');
    gradient.addColorStop(0.5, 'rgba(200,200,200,0.3)');
    gradient.addColorStop(1, 'rgba(200,200,200,0)');
    
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    // Create star texture from canvas
    const starTexture = new THREE.CanvasTexture(canvas);
    
    // Create material for stars with circular texture
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.5,
        map: starTexture,
        transparent: true,
        alphaTest: 0.01,
        sizeAttenuation: true // Make stars smaller in the distance
    });
    
    // Create and return star field
    const stars = new THREE.Points(particlesGeometry, particlesMaterial);
    return stars;
}; 
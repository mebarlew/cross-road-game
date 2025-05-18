import * as THREE from 'three';

/**
 * Creates a procedural moon texture if the image can't be loaded
 * @returns {THREE.Texture} Procedurally generated moon texture
 */
function createProceduralMoonTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const context = canvas.getContext('2d');
    
    // Fill with base gray color
    context.fillStyle = '#aaaaaa';
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add craters
    for (let i = 0; i < 1000; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 4 + 0.5;
        
        // Randomize crater color (slightly darker or lighter than base)
        const shade = Math.random() * 30 - 15;
        const color = Math.floor(170 + shade);
        context.fillStyle = `rgb(${color}, ${color}, ${color})`;
        
        // Draw crater
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fill();
    }
    
    // Create texture from canvas
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
}

/**
 * Creates a moon that orbits around Earth
 * @returns {Object} Object containing moon mesh and update function for animation
 */
export const createMoon = () => {
    // Create a group to handle moon orbit
    const moonSystem = new THREE.Group();
    
    // Create moon geometry (smaller than Earth)
    const geometry = new THREE.SphereGeometry(0.8, 32, 32);
    
    // Create basic material with procedural texture
    const proceduralTexture = createProceduralMoonTexture();
    const material = new THREE.MeshStandardMaterial({
        map: proceduralTexture,
        roughness: 0.8,
        metalness: 0.1
    });
    
    // Create moon mesh
    const moon = new THREE.Mesh(geometry, material);
    
    // Position moon at a distance from the center (Earth will be at center)
    moon.position.set(8, 0, 0);
    
    // Add moon to orbit system
    moonSystem.add(moon);
    
    // Try to load texture from file
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
        // Try multiple potential paths for the texture
        '/assets/images/moon.jpg',
        // onLoad callback
        function(texture) {
            // Update material with loaded texture
            moon.material.map = texture;
            moon.material.needsUpdate = true;
        },
        // onProgress callback (not needed)
        undefined,
        // onError callback - try alternate location
        function() {
            console.warn("Could not load moon texture at primary path, trying alternate...");
            textureLoader.load(
                './assets/images/moon.jpg',
                function(texture) {
                    moon.material.map = texture;
                    moon.material.needsUpdate = true;
                },
                undefined,
                function() {
                    console.warn("All texture load attempts failed, using procedural texture");
                    // Procedural texture already applied, so no action needed
                }
            );
        }
    );
    
    // Update function for animation
    const update = (time) => {
        // Rotate moon around its axis
        moon.rotation.y += 0.002;
        
        // Orbit around Earth
        moonSystem.rotation.y += 0.005;
    };
    
    return {
        moonSystem,
        update
    };
}; 
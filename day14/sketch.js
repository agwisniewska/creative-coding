// Ensure ThreeJS is in global scope for the 'examples/'
global.THREE = require("three");

// Include any additional ThreeJS examples below
require("three/examples/js/controls/OrbitControls");

const canvasSketch = require("canvas-sketch");

const settings = {
  // Make the loop animated
  animate: true,
  // Get a WebGL canvas rather than 2D
  context: "webgl"
};

const sketch = ({ context }) => {
  // Create a renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: context.canvas
  });

  // WebGL background color
  renderer.setClearColor("black", 1);

  // Setup a camera
  const camera = new THREE.PerspectiveCamera(45, 1, 0.01, 100);
  camera.position.set(1.5, 3, -8);
  camera.lookAt(new THREE.Vector3());

  // Setup camera controller
  const controls = new THREE.OrbitControls(camera, context.canvas);

  // Setup your scene
  const scene = new THREE.Scene();

  // Setup a geometry
  const geometry = new THREE.SphereGeometry(1, 32, 16);
const anotherGeometry = new THREE.SphereGeometry(0.25, 10, 15);
  //  Setup Texture
const loader = new THREE.TextureLoader();

const moonGroup = new THREE.Group();
const earthTexture = loader.load('earth.jpg')
const moonTexture = loader.load('moon.jpg');

  // Setup a material
  const earthMaterial = new THREE.MeshStandardMaterial({
    roughness: 1,
    metalness: 0,
    map: earthTexture
  });

  const moonMaterial = new THREE.MeshStandardMaterial({
    roughness: 1,
    metalness: 0,
    map: moonTexture
  })

  // Setup a mesh with geometry + material
const moonMesh = new THREE.Mesh(anotherGeometry, moonMaterial)

  const earthMesh = new THREE.Mesh(geometry, earthMaterial);
  
  moonMesh.position.set(1.5, 1, 0)
moonGroup.add(moonMesh);
  scene.add(earthMesh);


scene.add(moonGroup);


const light = new THREE.PointLight('white', 2);
light.position.set(3, 3, 3)
scene.add(light);

scene.add(new THREE.GridHelper(5, 15));
scene.add(new THREE.PointLightHelper(light));
const axesHelper = new THREE.AxesHelper( 10 );
scene.add( axesHelper );
  // draw each frame
  return {
    // Handle resize events here
    resize({ pixelRatio, viewportWidth, viewportHeight }) {
      renderer.setPixelRatio(pixelRatio);
      renderer.setSize(viewportWidth, viewportHeight, false);
      camera.aspect = viewportWidth / viewportHeight;
      camera.updateProjectionMatrix();
    },
    // Update & render your scene here
    render({ time }) {
      earthMesh.rotation.y = 0.5 * time;
      moonGroup.rotation.y = 0.25 * time;



      controls.update();
      renderer.render(scene, camera);
    },
    // Dispose of events & renderer for cleaner hot-reloading
    unload() {
      controls.dispose();
      renderer.dispose();
    }
  };
};

canvasSketch(sketch, settings);

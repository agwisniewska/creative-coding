// Ensure ThreeJS is in global scope for the 'examples/'
global.THREE = require('three');

// Include any additional ThreeJS examples below
require('three/examples/js/controls/OrbitControls');

const canvasSketch = require('canvas-sketch');
const pallets = require('nice-color-palettes');
const random = require('canvas-sketch-util/random');

const settings = {
  // Make the loop animated
  dimensions: [512, 512],
  fps: 24,
  duration: 6,
  animate: true,
  // Get a WebGL canvas rather than 2D
  context: 'webgl',
};

const sketch = ({ context, innerHeight, innerWidth }) => {
  const pallet = random.pick(pallets);

  const renderer = new THREE.WebGLRenderer({
    context,
  });

  renderer.setClearColor('#fff', 1);
  renderer.setSize(innerHeight, innerWidth);

  const scene = new THREE.Scene();

  const firstCube = new THREE.Mesh(
    new THREE.BoxGeometry(5, 5, 5),
    new THREE.MeshBasicMaterial({ color: random.pick(pallet) })
  );

  scene.add(firstCube);

  const cube = new THREE.Mesh(
    new THREE.BoxGeometry(5, 5, 5),
    new THREE.MeshBasicMaterial({ color: random.pick(pallet) })
  );

  scene.add(cube);

  const camera = new THREE.PerspectiveCamera(
    120,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const light = new THREE.PointLight('#45caf7', 1, 15.5);

  scene.add(light);

  camera.position.z = 15;

  return {
    resize({ pixelRatio, viewportWidth, viewportHeight }) {
      renderer.setPixelRatio(pixelRatio);
      renderer.setSize(viewportWidth, viewportHeight);
    },
    // And render events here
    render({ playhead }) {
      cube.rotation.x += playhead * 0.05;

      cube.rotation.y += playhead * 0.05;
      firstCube.rotation.x -= playhead * 0.05;
      firstCube.rotation.y -= playhead * 0.05;

      renderer.render(scene, camera);
    },
    // Dispose of WebGL context (optional)
    unload() {
      renderer.dispose();
    },
  };
};

canvasSketch(sketch, settings);

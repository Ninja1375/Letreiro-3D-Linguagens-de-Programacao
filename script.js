// Cena, câmara e renderizador
const scene = new THREE.Scene();
const camera = new THREE
 .PerspectiveCamera(75, window
  .innerWidth / window.innerHeight,
  0.1, 1000);
const renderer = new THREE
 .WebGLRenderer({
  antialias: true
 });
renderer.setSize(window.innerWidth,
 window.innerHeight);
document.body.appendChild(renderer
 .domElement);

// Luzes
const light = new THREE
 .DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 2)
 .normalize();
scene.add(light);

// Carregar a fonte e criar o letreiro 3D
const loader = new THREE.FontLoader();
loader.load(
'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json',
function(font) {
 const textGeometry = new THREE
  .TextGeometry('JavaScript
   Python C++', {
   font: font,
   size: 1,
   height: 0.5,
   curveSegments: 12,
   bevelEnabled: true,
   bevelThickness: 0.03,
   bevelSize: 0.02,
   bevelSegments: 5
  });

const material = new THREE
 .MeshPhongMaterial({
  color: 0x00ff00
 });
const textMesh = new THREE.Mesh(
 textGeometry, material);

// Centralizar o texto
textGeometry.computeBoundingBox();
const centerOffset = -0.5 * (
 textGeometry.boundingBox.max.x -
 textGeometry.boundingBox.min.x);

textMesh.position.x =
centerOffset; textMesh.position.y =
0; textMesh.position.z = -5; scene
.add(textMesh);

// Função de animação
function animate() {
 requestAnimationFrame(animate);

 // Rotacionar o letreiro
 textMesh.rotation.x += 0.01;
 textMesh.rotation.y += 0.01;

 renderer.render(scene, camera);
}

animate();
});

// Ajustar a câmara
camera.position.z = 10;

// Responsividade
window.addEventListener('resize',
 () => {
  renderer.setSize(window.innerWidth,
   window.innerHeight);
  camera.aspect = window.innerWidth /
   window.innerHeight;
  camera.updateProjectionMatrix();
 });

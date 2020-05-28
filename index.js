import * as THREE from './node_modules/three/src/Three.js';

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 100, window.innerWidth/window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshDepthMaterial(0xfcf9e9);
var cube1 = new THREE.Mesh( geometry, material );
var cube2 = new THREE.Mesh( geometry, material );
var cube3 = new THREE.Mesh( geometry, material );
scene.add( cube1 );
scene.add( cube2 );
scene.add( cube3 );

// set background color in scene
scene.background = new THREE.Color( "rgb(137,222,184)" );

camera.position.z = 5;
var animate = function () {
	requestAnimationFrame( animate );
	cube1.rotation.x += 0.05;
  cube1.rotation.y += 0.05;
  
  // object position set is represented 3D vector values x, y, z
  cube2.position.set( 5, -3, -2 );
  cube2.rotation.x += 0.01;
  cube2.rotation.y += 0.01;

  cube3.position.set( -2, 3, 1 );
  cube3.rotation.x += -0.01;
  cube3.rotation.y += -0.05;
  //cube3.translateX( 5 );
	renderer.render( scene, camera );
};

animate();

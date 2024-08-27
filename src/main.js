import * as THREE from "three"
import { MapControls } from "three/addons/controls/MapControls"

// Setup

const canvas = document.getElementById( "webgl" )

const scene = new THREE.Scene()
scene.background = new THREE.Color( 0x202020 )

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 200 )
camera.position.set( 10, 10, 10 )
camera.lookAt( 0, 0, 0 )

const renderer = new THREE.WebGLRenderer( { canvas } )
renderer.setPixelRatio( window.devicePixelRatio )
renderer.setSize( window.innerWidth, window.innerHeight )

const controls = new MapControls( camera, canvas )
controls.minDistance = 10
controls.maxDistance = 100
controls.maxPolarAngle = Math.PI / 2 - 0.25
controls.maxTargetRadius = 10
controls.enableDamping = true

window.addEventListener( "resize", () => {

	camera.aspect = window.innerWidth / window.innerHeight
	camera.updateProjectionMatrix()

	renderer.setSize( window.innerWidth, window.innerHeight )
} )

renderer.setAnimationLoop( () => {

	controls.update()

	renderer.render( scene, camera )
} )

//

scene.add( new THREE.AxesHelper( 200 ) )
scene.add( new THREE.GridHelper( 20, 20, 0x808080, 0x404040 ) )

{
	const geometry = new THREE.BoxGeometry()
	const material = new THREE.MeshNormalMaterial()
	const object = new THREE.Mesh( geometry, material )
	scene.add( object )
}






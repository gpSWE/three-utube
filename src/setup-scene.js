import * as THREE from "three"
import { MapControls } from "three/addons/controls/MapControls"

export function setupScene( { canvas } ) {

	// Scene
	const scene = new THREE.Scene()
	// scene.background = new THREE.Color( 0x202020 )

	// Camera
	const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 200 )
	camera.position.set( 0, 5, 20 )

	// Renderer
	const renderer = new THREE.WebGLRenderer( { canvas } )
	renderer.setPixelRatio( window.devicePixelRatio )
	renderer.setSize( window.innerWidth, window.innerHeight )

	// Controls
	const controls = new MapControls( camera, canvas )
	controls.enableDamping = true
	controls.zoomToCursor = true
	controls.autoRotate = true
	controls.autoRotateSpeed = 0.5
	controls.maxPolarAngle = Math.PI / 2 - 0.1

	// onResize
	window.addEventListener( "resize", () => {

		camera.aspect = window.innerWidth / window.innerHeight
		camera.updateProjectionMatrix()

		renderer.setSize( window.innerWidth, window.innerHeight )
	} )

	renderer.setAnimationLoop( () => {

		controls.update()

		renderer.render( scene, camera )
	} )

	return {
		scene,
		camera,
		renderer,
		controls,
	}
}

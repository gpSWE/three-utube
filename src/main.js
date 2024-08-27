import * as THREE from "three"

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

window.addEventListener( "resize", () => {

	camera.aspect = window.innerWidth / window.innerHeight
	camera.updateProjectionMatrix()

	renderer.setSize( window.innerWidth, window.innerHeight )
} )

renderer.setAnimationLoop( () => renderer.render( scene, camera ) )

//

scene.add( new THREE.AxesHelper( 200 ) )

{
	const geometry = new THREE.BoxGeometry()
	const material = new THREE.MeshNormalMaterial()
	const object = new THREE.Mesh( geometry, material )
	scene.add( object )
}






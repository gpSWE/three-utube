import * as THREE from "three"
import { setupScene } from "./setup-scene"

const { scene } = setupScene( { canvas: document.getElementById( "webgl" ) } )

//

// scene.add( new THREE.AxesHelper( 200 ) )
// scene.add( new THREE.GridHelper( 20, 20, 0x808080, 0x404040 ) )

const textureLoader = new THREE.TextureLoader().setPath( "/assets/textures" )

const uvChecker = textureLoader.load( "/uvChecker.png" )
uvChecker.colorSpace = THREE.SRGBColorSpace

{
	const geometry = new THREE.PlaneGeometry( 5, 5, 1, 1 ).rotateX( - Math.PI / 2 )
	const material = new THREE.MeshBasicMaterial( { wireframe: !true, map: uvChecker } )
	const object = new THREE.Mesh( geometry, material )
	// scene.add( object )

	console.log( geometry.attributes.position )
}

{
	const positionArray = new Float32Array( [
		- 2.5, 0, + 2.5,
		+ 2.5, 0, + 2.5,
		+ 2.5, 0, - 2.5,
		- 2.5, 0, - 2.5,
	] )

	// const positionAttribute = new THREE.BufferAttribute( positionArray, 3 )
	const positionAttribute = new THREE.Float32BufferAttribute( [
		- 2.5, 0, + 2.5,
		+ 2.5, 0, + 2.5,
		+ 2.5, 0, - 2.5,
		- 2.5, 0, - 2.5,
	], 3 )

	const geometry = new THREE.BufferGeometry()
	geometry.setAttribute( "position", positionAttribute )
	geometry.setIndex( [ 0, 1, 2, 2, 3, 0 ] )
	const material = new THREE.MeshBasicMaterial( { wireframe: !true, map: uvChecker } )
	const object = new THREE.Mesh( geometry, material )
	scene.add( object )

	// console.log( geometry.attributes )
}

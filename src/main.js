import * as THREE from "three"
import { setupScene } from "./setup-scene"

const { scene } = setupScene( { canvas: document.getElementById( "webgl" ) } )

//

scene.add( new THREE.AxesHelper( 200 ) )
// scene.add( new THREE.GridHelper( 20, 20, 0x808080, 0x404040 ) )

// position (vertex)
// normal (surface normals)
// uv (texture coordinates)
// color (color)

{
	const position = new THREE.Float32BufferAttribute( [
		- 2.5, 0, + 2.5,
		+ 2.5, 0, + 2.5,
		+ 2.5, 0, - 2.5,
		- 2.5, 0, - 2.5,
	], 3 )

	const color = new THREE.Float32BufferAttribute( [
		1, 0, 0,
		0, 1, 0,
		0, 0, 1,
		1, 1, 1,
	], 3 )

	const geometry = new THREE.BufferGeometry()
	geometry.setAttribute( "position", position )
	geometry.setAttribute( "color", color )
	geometry.setIndex( [ 0, 1, 2, 2, 3, 0 ] )
	const material = new THREE.LineBasicMaterial( { vertexColors: true } )
	const object = new THREE.Line( geometry, material )
	scene.add( object )
}

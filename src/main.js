import * as THREE from "three"
import { setupScene } from "./setup-scene"

const { scene } = setupScene( { canvas: document.getElementById( "webgl" ) } )

//

scene.add( new THREE.AxesHelper( 200 ) )
scene.add( new THREE.GridHelper( 20, 20, 0x808080, 0x404040 ) )

const points = [
	new THREE.Vector3( - 5, 0, 5 ),
	new THREE.Vector3( + 5, 0, 5 ),
	new THREE.Vector3( + 5, 0, - 5 ),
	new THREE.Vector3( - 5, 0, - 5 ),
]

// Point
// Line
// Mesh (Triangles)

{
	const geometry = new THREE.BufferGeometry().setFromPoints( points )
	const material = new THREE.PointsMaterial( { sizeAttenuation: false, size: 10, color: 0xffa500 } )
	const object = new THREE.Points( geometry, material )
	scene.add( object )
}

import * as THREE from "three"
import { setupScene } from "./setup-scene"

const { scene } = setupScene( { canvas: document.getElementById( "webgl" ) } )

//

scene.add( new THREE.AxesHelper( 200 ) )
scene.add( new THREE.GridHelper( 20, 20, 0x808080, 0x404040 ) )

{
	const geometry = new THREE.BoxGeometry()
	const material = new THREE.MeshNormalMaterial()
	const object = new THREE.Mesh( geometry, material )
	scene.add( object )
}


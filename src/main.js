import * as THREE from "three"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader"
import { setupScene } from "./setup-scene"

const { scene } = setupScene( { canvas: document.getElementById( "webgl" ) } )

//

// scene.add( new THREE.AxesHelper( 200 ) )
scene.add( new THREE.GridHelper( 20, 20, 0x808080, 0x404040 ) )

const loader = new GLTFLoader().setPath( "/assets/glb" )

loader.load( "/t_tower.glb", glb => {

	const model = glb.scene

	// model.scale.set( 0.5, 0.5, 0.5 )
	// model.rotateX( - Math.PI / 2 )
	// model.geometry.translate( 0, 0, 0 )
	// model.position.set( 0, 0, 0 )

	// console.log( model.matrixWorld )

	model.traverse( node => {

		if ( node.isMesh ) {

			node.material = new THREE.MeshBasicMaterial()

			const indices = node.geometry.getIndex()

			const geometry = new THREE.BufferGeometry()
			geometry.setIndex( indices )
			geometry.setAttribute( "position", node.geometry.attributes.position )

			const material = new THREE.PointsMaterial( { sizeAttenuation: false, size: 5 } )
			const object = new THREE.Points( geometry, material )

			object.applyMatrix4( node.matrixWorld )

			scene.add( object )
		}
	} )

	scene.add( model )
} )

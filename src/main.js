import * as THREE from "three"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader"
import { MeshSurfaceSampler } from "three/addons/math/MeshSurfaceSampler"
import { setupScene } from "./setup-scene"

const { scene } = setupScene( { canvas: document.getElementById( "webgl" ) } )

//

// scene.add( new THREE.AxesHelper( 200 ) )
// scene.add( new THREE.GridHelper( 20, 20, 0x808080, 0x404040 ) )

const loader = new GLTFLoader().setPath( "/assets/glb" )

loader.load( "/ring.glb", glb => {

	const model = glb.scene

	let meshIndex = 0

	let ring = new THREE.Object3D()
	scene.add( ring )

	model.traverse( node => {

		if ( node.isMesh ) {

			node.material = new THREE.MeshBasicMaterial()

			const sampler = new MeshSurfaceSampler( node ).build()

			const points = []
			const colors = []

			for ( let i = 0; i < 100_000; i++ ) {

				const point = new THREE.Vector3()

				sampler.sample( point )

				points.push( point )

				if ( meshIndex === 0 ) {

					colors.push( 1, 1, 1 )
				}
				else {

					colors.push( 0, Math.random(), 1 )
				}
			}

			//

			const geometry = new THREE.BufferGeometry().setFromPoints( points )
			geometry.setAttribute( "color", new THREE.Float32BufferAttribute( colors, 3 ) )
			const material = new THREE.PointsMaterial( { sizeAttenuation: false, size: 1, vertexColors: true } )
			const object = new THREE.Points( geometry, material )

			object.applyMatrix4( node.matrixWorld )
			ring.add( object )

			meshIndex++
		}
	} )

	ring.scale.multiplyScalar( 5 )
} )

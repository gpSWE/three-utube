import * as THREE from "three"
import { setupScene } from "./setup-scene"

const { scene } = setupScene( { canvas: document.getElementById( "webgl" ) } )

//

{
	const geometry = new THREE.BoxGeometry()
	const material = new THREE.MeshNormalMaterial()
	const object = new THREE.Mesh( geometry, material )
	scene.add( object )
}

// scene.add( new THREE.AxesHelper( 200 ) )
// // scene.add( new THREE.GridHelper( 20, 20, 0x808080, 0x404040 ) )

// const textureLoader = new THREE.TextureLoader().setPath( "/assets/textures" )

// const uvChecker = textureLoader.load( "/uvChecker.png" )
// uvChecker.colorSpace = THREE.SRGBColorSpace
// uvChecker.wrapS = uvChecker.wrapT = THREE.RepeatWrapping
// // uvChecker.repeat.set( 1, 1 )
// // uvChecker.offset.set( 0, 0 )

// // const t1 = textureLoader.load( "/bricks/color.jpg" )
// // t1.wrapS = THREE.RepeatWrapping
// // t1.wrapT = THREE.RepeatWrapping
// // t1.colorSpace = THREE.SRGBColorSpace
// // t1.repeat.set( 2, 2 )

// {
// 	const geometry = new THREE.PlaneGeometry( 5, 5, 1, 1 ).rotateX( - Math.PI / 2 )
// 	const material = new THREE.MeshBasicMaterial( { wireframe: !true, map: uvChecker } )
// 	const object = new THREE.Mesh( geometry, material )
// 	// scene.add( object )
// }

// {
// 	const position = new THREE.Float32BufferAttribute( [
// 		- 2.5, - 2, + 2.5,
// 		+ 2.5, 0, + 2.5,
// 		+ 2.5, 0, - 2.5,
// 		- 2.5, 2, - 2.5,
// 	], 3 )

// 	const normal = new THREE.Float32BufferAttribute( [
// 		0, 1, 0,
// 		0, 1, 0,
// 		0, 1, 0,
// 		0, 1, 0,
// 	], 3 )

// 	const uv = new THREE.Float32BufferAttribute( [
// 		0, 0,
// 		1, 0,
// 		1, 1,
// 		0, 1,
// 	], 2 )

// 	const geometry = new THREE.BufferGeometry()
// 	geometry.setAttribute( "position", position )
// 	// geometry.setAttribute( "normal", normal )
// 	geometry.setAttribute( "uv", uv )
// 	geometry.setIndex( [ 0, 1, 2, 2, 3, 0 ] )
// 	geometry.computeVertexNormals()
// 	const material = new THREE.MeshPhongMaterial( { wireframe: !true, map: uvChecker } )
// 	const object = new THREE.Mesh( geometry, material )
// 	scene.add( object )

// 	console.log( geometry.attributes.normal.array )
// }

// const light = new THREE.DirectionalLight()
// light.position.set( 1, 1, 1 )
// const helper = new THREE.DirectionalLightHelper( light )
// scene.add( helper )
// scene.add( light )


import * as THREE from "three"
import { setupScene } from "./setup-scene"

const { scene } = setupScene( { canvas: document.getElementById( "webgl" ) } )

//

// scene.add( new THREE.AxesHelper( 200 ) )
scene.add( new THREE.GridHelper( 20, 20, 0x808080, 0x404040 ) )

const points = [
	new THREE.Vector3( - 8, 0, 0 ),
	new THREE.Vector3( - 4, 0, - 4 ),
	new THREE.Vector3( + 4, 0, 4 ),
	new THREE.Vector3( + 8, 0, 0 ),
]

const curve = new THREE.CubicBezierCurve3( ...points )

const curvePoints = curve.getPoints( 30 )

// Point
{
	const geometry = new THREE.BufferGeometry().setFromPoints( points )
	const material = new THREE.PointsMaterial( { sizeAttenuation: false, size: 10, color: 0xffa500 } )
	const object = new THREE.Points( geometry, material )
	scene.add( object )
}

// Line
{
	const geometry = new THREE.BufferGeometry().setFromPoints( curvePoints )
	// const material = new THREE.LineBasicMaterial( { color: 0xffff00 } )
	const material = new THREE.LineDashedMaterial( { color: 0xffff00, dashSize: 0.5, gapSize: 0.1, linewidth: 10 } )
	const object = new THREE.Line( geometry, material )
	object.computeLineDistances()
	scene.add( object )
}

// Mesh (Triangles)

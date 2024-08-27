import * as THREE from "three"

const canvas = document.getElementById( "webgl" )

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera()

const renderer = new THREE.WebGLRenderer( { canvas } )

renderer.setAnimationLoop( () => renderer.render( scene, camera ) )

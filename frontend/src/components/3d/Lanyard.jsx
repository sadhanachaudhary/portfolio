import { useEffect, useRef, useState, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Physics, useSphericalJoint, RigidBody } from '@react-three/rapier'
import { Environment, Lightformer, Center } from '@react-three/drei'
import * as THREE from 'three'

export default function Lanyard({ position = [0, 0, 0], gravity = [0, -40, 0] }) {
  return (
    <div className="w-full h-full absolute inset-0 z-0 hover:cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 13], fov: 25 }}
        gl={{ alpha: true }}
      >
        <ambientLight intensity={Math.PI} />
        <Physics gravity={gravity} timeStep="vary">
          <Band />
        </Physics>
        <Environment resolution={256}>
          <group rotation={[-Math.PI / 3, 0, 1]}>
            <Lightformer form="circle" intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} />
            <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} />
            <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[5, 1, -1]} scale={2} />
            <Lightformer form="circle" intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={8} />
          </group>
        </Environment>
      </Canvas>
    </div>
  )
}

function Band() {
  const band = useRef()
  const fixed = useRef()
  const card = useRef()

  // Reusable vectors to prevent garbage collection and memory leaks in useFrame
  const vec = useMemo(() => new THREE.Vector3(), [])
  const dir = useMemo(() => new THREE.Vector3(), [])
  const v1 = useMemo(() => new THREE.Vector3(), [])
  const v2 = useMemo(() => new THREE.Vector3(), [])
  const mid = useMemo(() => new THREE.Vector3(), [])
  const up = useMemo(() => new THREE.Vector3(0, 1, 0), [])

  const [dragged, drag] = useState(false)
  const [hovered, hover] = useState(false)

  // Use a single spherical joint for maximum stability instead of multiple rope joints
  useSphericalJoint(fixed, card, [[0, 0, 0], [0, 2, 0]])

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab'
      return () => void (document.body.style.cursor = 'auto')
    }
  }, [hovered, dragged])

  useFrame((state) => {
    if (dragged && card.current) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera)
      dir.copy(vec).sub(state.camera.position).normalize()
      vec.add(dir.multiplyScalar(state.camera.position.length()))
      card.current.wakeUp()

      // Apply spring-like forces towards the mouse instead of forcing kinematic position
      const currentPos = card.current.translation()
      const targetX = vec.x - dragged.x
      const targetY = vec.y - dragged.y
      const targetZ = vec.z - dragged.z

      // Calculate delta and apply as impulse
      const force = {
        x: (targetX - currentPos.x) * 2,
        y: (targetY - currentPos.y) * 2,
        z: (targetZ - currentPos.z) * 2,
      }
      card.current.applyImpulse(force, true)
    }

    if (fixed.current && card.current && band.current) {
      const t0 = fixed.current.translation();
      const t1 = card.current.translation();

      if (isNaN(t0.x) || isNaN(t1.x)) return;

      v1.set(t0.x, t0.y, t0.z);
      v2.set(t1.x, t1.y + 1.5, t1.z); // Attach to clip

      // Zero-allocation geometry update for the string
      const distance = v1.distanceTo(v2);
      band.current.scale.set(1, distance, 1);

      mid.copy(v1).lerp(v2, 0.5);
      band.current.position.copy(mid);

      dir.subVectors(v2, v1).normalize();
      band.current.quaternion.setFromUnitVectors(up, dir);

      // Tilt the card smoothly
      dir.copy(card.current.translation())
      const clamp = Math.max(Math.min(dir.x, 1), -1)
      card.current.applyTorqueImpulse({ x: 0, y: -clamp * 0.5, z: 0 })
    }
  })

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody ref={fixed} type="fixed" />

        <RigidBody
          position={[0, -2, 0]}
          ref={card}
          type="dynamic"
          linearDamping={2}
          angularDamping={2}
          onPointerOver={() => hover(true)}
          onPointerOut={() => hover(false)}
          onPointerUp={(e) => {
            e.target.releasePointerCapture(e.pointerId)
            drag(false)
          }}
          onPointerDown={(e) => {
            e.target.setPointerCapture(e.pointerId)
            drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())))
          }}
        >
          {/* Invisible physics collider */}
          <mesh visible={false}>
            <boxGeometry args={[2, 3, 0.1]} />
            <meshStandardMaterial color="#863bff" />
          </mesh>
          
          {/* Lanyard Clip - Visible */}
          <mesh position={[0, 1.6, 0]}>
            <cylinderGeometry args={[0.1, 0.1, 0.2]} />
            <meshStandardMaterial color="silver" metalness={0.8} roughness={0.2} />
          </mesh>
        </RigidBody>
      </group>

      {/* Lanyard String */}
      <mesh ref={band}>
        <cylinderGeometry args={[0.02, 0.02, 1, 8]} />
        <meshStandardMaterial color="#333" />
      </mesh>
    </>
  )
}


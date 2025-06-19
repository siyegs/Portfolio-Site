
import { useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, Preload } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

interface SceneProps {
  hoveredName: string | null;
}

interface ModelProps {
  hoveredName: string | null;
}

const Model = ({ hoveredName }: ModelProps) => {
  const { scene } = useGLTF("./shiftingsU.glb");
  const modelRef = useRef<THREE.Group>(null!);

  useFrame(() => {
        const isHovered = hoveredName !== null;
    const targetScale = isHovered ? 1.8 : 1.5;

    let targetPosition = new THREE.Vector3(0, -1, 0); // Default position
    if (hoveredName === 'IYEGERE') {
        targetPosition = new THREE.Vector3(-0.5, 0, 0);
    } else if (hoveredName === 'SUCCESS') {
        targetPosition = new THREE.Vector3(0, 0.5, 0);
    } else if (hoveredName === 'KARBOLOO') {
        targetPosition = new THREE.Vector3(0.5, 0, 0);
    }


    if (modelRef.current) {
            modelRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
      modelRef.current.position.lerp(targetPosition, 0.1);
    }
  });

  return (
    <primitive ref={modelRef} object={scene} scale={0.5} position-y={-1} rotation-x={0.5} />
  );
};

const Scene = ({ hoveredName }: SceneProps) => {
  return (
    <>
      <ambientLight intensity={2.5} />
      <hemisphereLight intensity={2} groundColor="white" />
      <directionalLight position={[-10, -2, -5]} intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.0} />
      <Suspense fallback={null}>
                <Model hoveredName={hoveredName} />
        <Preload all />
      </Suspense>
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        autoRotate={true}
        autoRotateSpeed={1.5}
      />
    </>
  );
};

export default Scene;

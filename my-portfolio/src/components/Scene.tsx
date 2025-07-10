import { useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, Preload } from "@react-three/drei";
import { Suspense, useRef, useEffect } from "react";
import * as THREE from "three";

interface SceneProps {
  hoveredName: string | null;
  theme: string;
}

interface ModelProps {
  hoveredName: string | null;
  theme: string;
}

const Model = ({ hoveredName, theme }: ModelProps) => {
  const { scene } = useGLTF("/shiftingsU.glb");
  const modelRef = useRef<THREE.Group>(null!);

  useEffect(() => {
    const color = theme === "light" ? "#e5d2b8" : "#ffffff";
    // const color = theme === 'light' ? '#b3b792' : '#ffffff';

    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const material = child.material as THREE.MeshStandardMaterial;
        material.color.set(color);
      }
    });
  }, [theme, scene]);

  useFrame(() => {
    const isHovered = hoveredName !== null;
    const targetScale = isHovered ? 2.5 : 2;

    let targetPosition = new THREE.Vector3(0, -1, 0); // Default position
    if (hoveredName === "IYEGERE") {
      targetPosition = new THREE.Vector3(-0.5, 0, 0);
    } else if (hoveredName === "SUCCESS") {
      targetPosition = new THREE.Vector3(0, 0.5, 0);
    } else if (hoveredName === "KARBOLOO") {
      targetPosition = new THREE.Vector3(0.5, 0, 0);
    }

    if (modelRef.current) {
      modelRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.1
      );
      modelRef.current.position.lerp(targetPosition, 0.1);
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={0.1}
      position-y={2}
      rotation-x={3}
    />
  );
};

const Scene = ({ hoveredName, theme }: SceneProps) => {
  return (
    <>
      <ambientLight intensity={2.5} />
      <hemisphereLight intensity={2} />
      <directionalLight position={[-10, -2, -5]} intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.0} />
      <Suspense fallback={null}>
        <Model hoveredName={hoveredName} theme={theme} />
        <Preload all />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={true}
        autoRotateSpeed={1.5}
      />
    </>
  );
};

export default Scene;

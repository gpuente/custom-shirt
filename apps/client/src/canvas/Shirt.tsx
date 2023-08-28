import { easing } from 'maath';
import { GLTF } from 'three-stdlib';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';

import state from '../store';

type GLTFResult = GLTF & {
  nodes: {
    T_Shirt_male: THREE.Mesh;
  };
  materials: {
    lambert1: THREE.MeshStandardMaterial;
  };
};

export const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/shirt_baked.glb') as GLTFResult;

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  useFrame((_, delta) => {
    easing.dampC(materials.lambert1.color, snap.color, 0.25, delta);
  });

  const stateString = JSON.stringify(state);

  return (
    <group key={stateString}>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      >
        {snap.isFullTexture && (
          <Decal
            scale={1}
            map={fullTexture}
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
          />
        )}
        {snap.isLogoTexture && (
          <Decal
            scale={0.15}
            map={logoTexture}
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            depthTest={false}
          />
        )}
      </mesh>
    </group>
  );
};

import { useRef } from 'react';
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

export const Backdrop = () => {
  const shadows = useRef(null);
  return (
    <AccumulativeShadows
      ref={shadows}
      position={[0, 0, -0.14]}
      temporal
      frames={60}
      alphaTest={0.099}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.15}
        ambient={0.25}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.25}
        ambient={0.55}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  );
};

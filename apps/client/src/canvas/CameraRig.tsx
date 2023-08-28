import { easing } from 'maath';
import { Vector3 } from 'three';
import { useSnapshot } from 'valtio';
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

import state from '../store';

export interface CameraRigProps {
  children?: React.ReactNode;
}

export const CameraRig: React.FC<CameraRigProps> = ({ children }) => {
  const snap = useSnapshot(state);
  const group = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    const isBreakpoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 600;

    // set the initial position of the model
    let targetPosition: Vector3 = new Vector3(-0.4, 0, 2);

    if (snap.intro) {
      if (isBreakpoint) targetPosition = new Vector3(0, 0, 2);
      if (isMobile) targetPosition = new Vector3(0, 0.1, 2.5);
    } else {
      if (isBreakpoint) targetPosition = new Vector3(0, 0, 2.5);
      if (isMobile) targetPosition = new Vector3(0, 0, 2.5);
    }

    // set model camera position
    easing.damp3(state.camera.position, targetPosition, 0.25, delta);

    // set the model rotation based on the mouse position
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    );
  });

  return <group ref={group}>{children}</group>;
};

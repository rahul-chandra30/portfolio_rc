import React, { useEffect, useRef } from 'react';
import { useGraph } from '@react-three/fiber';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

const Developer = ({ animationName = 'idle', ...props }) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('/models/animations/developer.glb');

  const { animations: idleAnimation } = useFBX('/models/animations/idle.fbx');
  const { animations: clappingAnimation } = useFBX('/models/animations/clapping.fbx');
  const { animations: saluteAnimation } = useFBX('/models/animations/salute.fbx');
  idleAnimation[0].name = 'idle';
  clappingAnimation[0].name = 'clapping';
  saluteAnimation[0].name = 'salute';
  const { actions } = useAnimations([idleAnimation[0], clappingAnimation[0], saluteAnimation[0]], group);

  useEffect(() => {
    if (actions[animationName]) {
      actions[animationName].reset().fadeIn(0.5).play();

      return () => {
        actions[animationName].fadeOut(0.5);
      };
    }
  }, [animationName, actions]);

  return (
    <group {...props} dispose={null} ref={group}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        geometry={nodes.Body.geometry}
        material={materials.Body}
        skeleton={nodes.Body.skeleton}
      />
    </group>
  );
};

useGLTF.preload('/models/animations/developer.glb');

export default Developer;
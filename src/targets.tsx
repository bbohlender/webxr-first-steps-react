/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Object3D } from "three";
import { useMemo, useEffect } from "react";
import { useGLTF } from "@react-three/drei";

export const targets = new Set<Object3D>();

type TargetProps = {
  targetIdx: number;
};
export const Target = ({ targetIdx }: TargetProps) => {
  const { scene } = useGLTF("assets/target.glb");
  const target = useMemo(() => scene.clone(), [scene]);

  useEffect(() => {
    target.position.set(
      Math.random() * 10 - 5,
      targetIdx * 2 + 1,
      -Math.random() * 5 - 5
    );
    targets.add(target);
  }, [target]);
  return <primitive object={target} />;
};

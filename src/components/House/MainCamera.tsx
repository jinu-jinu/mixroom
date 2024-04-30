import { useEffect, useRef } from "react";
import { PerspectiveCamera, useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { AnimationAction, Group, MathUtils } from "three";
import { useIsOpenModal } from "../../stores/ModalStore";

const MainCamera = () => {
  const group = useRef<Group>(null!);
  const cameraAction = useRef<AnimationAction>(null!);
  const { animations } = useGLTF("./models/mainCamera.glb");
  const { actions } = useAnimations(animations, group);
  const openModal = useIsOpenModal();
  const scroll = useScroll();

  useEffect(() => {
    cameraAction.current = actions["CameraAction"]!;
    cameraAction.current.play();
    cameraAction.current.paused = true;
  }, []);

  useFrame(() => {
    if (openModal) return;

    cameraAction.current.time = MathUtils.lerp(
      cameraAction.current.time,
      cameraAction.current.getClip().duration * scroll.offset,
      0.03
    );
  });

  return (
    <group ref={group} dispose={null}>
      <group name="Scene">
        <PerspectiveCamera
          name="Camera"
          makeDefault={true}
          far={20}
          near={0.1}
          fov={60}
          position={[-0.878, 0.65, 3.267]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
};

export default MainCamera;
useGLTF.preload("./models/mainCamera.glb");

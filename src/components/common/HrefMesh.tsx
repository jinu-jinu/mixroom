import { Outlines, useCursor } from "@react-three/drei";
import { useState } from "react";
import { BufferGeometry, MeshStandardMaterial, NormalBufferAttributes } from "three";

const HrefMesh = ({
  src,
  geometry,
  position,
  materialOptions,
}: {
  src: string;
  geometry: BufferGeometry<NormalBufferAttributes>;
  position: [number, number, number];
  materialOptions: Partial<MeshStandardMaterial>;
}) => {
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);

  return (
    <mesh
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setHovered(false);
      }}
      onClick={(e) => {
        e.stopPropagation();
        window.open(src);
      }}
      geometry={geometry}
      position={position}
    >
      <meshStandardMaterial {...materialOptions} transparent opacity={hovered ? 0.6 : 1} />
      <Outlines screenspace opacity={0.4} thickness={2} color="#ffffff" transparent />
    </mesh>
  );
};

export default HrefMesh;

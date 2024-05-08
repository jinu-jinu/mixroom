import { BufferGeometry, MeshStandardMaterial, NormalBufferAttributes } from "three";
import { HilightMeshType } from "../../types";
import MobileMesh from "./MobileMesh";
import DesktopMesh from "./DesktopMesh";
import { useIsMobile } from "../../stores/DeviceStore";

const HilightMesh = ({
  geometry,
  hilightInfo,
  materialOptions,
}: {
  geometry: BufferGeometry<NormalBufferAttributes>;
  hilightInfo: HilightMeshType;
  materialOptions: Partial<MeshStandardMaterial>;
}) => {
  const isMobile = useIsMobile();

  return isMobile ? (
    <MobileMesh hilightInfo={hilightInfo} geometry={geometry} materialOptions={materialOptions} />
  ) : (
    <DesktopMesh hilightInfo={hilightInfo} geometry={geometry} materialOptions={materialOptions} />
  );
};

export default HilightMesh;

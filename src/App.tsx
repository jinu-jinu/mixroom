import { Canvas } from "@react-three/fiber";
import House from "./components/House";
import { Environment, ScrollControls, useHelper } from "@react-three/drei";
import MainCamera from "./components/House/MainCamera";
import { Suspense, useEffect, useRef } from "react";
import { colors, isMobileDevice } from "./utils/utils";
import { useDeviceActions, useIsMobile } from "./stores/DeviceStore";
import HtmlSection from "./layout/HtmlSection";
import { Light, Object3D, PointLightHelper } from "three";
import { EffectComposer } from "@react-three/postprocessing";
import FilterElem from "./effect/FilterElem";

const Lights = () => {
  const light = useRef<Light>(null!);
  useHelper(light, PointLightHelper);

  const windowSpotTarget = new Object3D();
  windowSpotTarget.position.set(-2.15, 0, 2.15);

  return (
    <>
      <spotLight
        intensity={3}
        angle={0.3}
        penumbra={0.05}
        decay={0}
        distance={18}
        position={[-7.74, 4.94, 3.35]}
        target={windowSpotTarget}
      />

      <pointLight
        color={colors.white}
        intensity={2}
        distance={1.8}
        decay={2}
        position={[4.2, 1.7, -1.8]}
      />

      <pointLight
        color={colors.yellow}
        intensity={3}
        distance={2}
        decay={1}
        position={[-2, 2, 0.9]}
      />
      <pointLight intensity={5} color={colors.yellow} distance={3} position={[-2, 1.8, 3.7]} />
    </>
  );
};

function App() {
  const isMobile = useIsMobile();
  const handleIsMobile = useDeviceActions("handleIsMobile");

  useEffect(() => {
    const resizeHandler = () => {
      const device = isMobileDevice(navigator.userAgent);
      if (isMobile === device) return;

      handleIsMobile(device);
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isMobile]);

  return (
    <>
      <Canvas shadows style={{ width: "100%", height: "100dvh", backgroundColor: "#111" }}>
        <Lights />

        <Suspense fallback={null}>
          <House />
          <ScrollControls pages={25}>
            <MainCamera />
          </ScrollControls>
          <EffectComposer disableNormalPass>
            <FilterElem />
          </EffectComposer>

          <Environment files="/venice_sunrise_1k.exr" />
        </Suspense>
      </Canvas>

      <HtmlSection />
    </>
  );
}

export default App;

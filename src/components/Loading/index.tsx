import { motion } from "framer-motion";
import { useProgress } from "@react-three/drei";
import { useLoadingActions } from "../../stores/LoadingStore";
import { useEffect } from "react";
import Loading1 from "./Loading1";
import Loading2 from "./Loading2";

const Loading = () => {
  const { loaded, total } = useProgress();
  const handleAssetDownload = useLoadingActions("handleAssetDownload");

  useEffect(() => {
    console.log(total);
    if (loaded === 64) handleAssetDownload(true);
  }, [loaded]);

  return (
    <motion.section
      transition={{ duration: 0.5, type: "tween", ease: "easeOut" }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`fixed z-[100] bg-black text-white font-Prompt top-0 left-0 w-full h-[100dvh] flex flex-col items-center justify-center`}
    >
      <Loading1 />
      <Loading2 />
    </motion.section>
  );
};

export default Loading;

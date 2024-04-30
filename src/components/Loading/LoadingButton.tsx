import { motion } from "framer-motion";
import { useLoadingActions } from "../../stores/LoadingStore";

const LoadingButton = () => {
  const handleLoading = useLoadingActions("handleLoading");

  const onClickHandler = () => {
    handleLoading(false);
  };

  return (
    <motion.button
      whileHover={{ opacity: 0.5 }}
      whileTap={{ scale: 1.2 }}
      onClick={onClickHandler}
      className="gradient-2 font-bold rounded-xl w-[120px] h-[50px] mt-[2vmax] flex justify-center items-center"
    >
      START😊
    </motion.button>
  );
};

export default LoadingButton;

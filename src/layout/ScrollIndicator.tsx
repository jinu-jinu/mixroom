import { motion } from "framer-motion";

const ScrollIndicator = () => {
  return (
    <div
      className="fixed bottom-8 w-full flex justify-center items-center pointer-events-none"
      title="스크롤"
    >
      <div className="w-[30px] h-[60px] rounded-3xl border-[3px] border-white flex justify-center items-start p-2">
        <motion.div
          animate={{ y: [-10, 10, 30, 40], opacity: [0, 1, 1, 0] }}
          transition={{
            type: "tween",
            duration: 3,
            repeat: Infinity,
            delay: 0.5,
          }}
          className="w-[10px] h-[10px] rounded-full border-white border-[3px] mb-1"
        />
      </div>
    </div>
  );
};

export default ScrollIndicator;

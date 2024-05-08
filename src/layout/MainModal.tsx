import { motion } from "framer-motion";
import { useModalActions } from "../stores/ModalStore";

const MainModal = () => {
  const handleOpenMainModal = useModalActions("handleOpenMainModal");
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => {
        const target = (e.target as HTMLElement).dataset.modal;
        console.log(target);
        if (!target || target === "inner") return;
        handleOpenMainModal(false);
      }}
      data-modal="outer"
      className="fixed z-10 top-0 left-0 w-full font-Prompt h-[100dvh] backdrop-blur bg-[rgba(0,0,0,.6)]"
    >
      <motion.div
        data-modal="inner"
        className="absolute z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[40vmax] lg:w-[30vmax] h-[50vh] rounded-3xl bg-[#fefefe] flex flex-col items-center p-4"
      >
        <div className="font-black text-[3vmax] flex-[0.3] flex items-center">INROMATION</div>
        <p className="flex-[0.7] w-full text-[14px] lg:text-[16px] tracking-tighter flex flex-col justify-center p-4">
          엔믹스의 미니앨범 1집 expergo의 수록곡 Young, Dumb, Stupid M/V에 나오는 장소를 모델링한
          가상의 공간입니다. 모델링 툴은 Blender를 사용했고 텍스쳐는 Substance Painter로
          만들었습니다. 마우스 휠을 내리면 카메라가 움직이면서 공간을 탐험합니다. 마우스를 움직여
          숨겨진 아이템을 찾아보세요.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default MainModal;

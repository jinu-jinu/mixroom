import { motion } from "framer-motion";
import { useModalActions } from "../stores/ModalStore";
import { useCurrentMember } from "../stores/MemberStore";

const MemberIntroModal = () => {
  const handleOpenMemberIntroModal = useModalActions("handleOpenMemberIntroModal");
  const currentMember = useCurrentMember();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => {
        const target = (e.target as HTMLElement).dataset.modal;
        if (!target || target === "inner") return;
        handleOpenMemberIntroModal(false);
      }}
      data-modal="outer"
      className="fixed z-10 top-0 left-0 w-full h-[100dvh] backdrop-blur"
    >
      <motion.div
        data-modal="inner"
        className="absolute z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[50vmax] h-[40vh] bg-red-300"
      >
        {!currentMember ? <div>wait</div> : <div>{currentMember.title}</div>}
      </motion.div>
    </motion.section>
  );
};

export default MemberIntroModal;

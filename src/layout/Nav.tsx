import { logo } from "../assets";
import { useIsOpenMainModal, useModalActions } from "../stores/ModalStore";
import { motion } from "framer-motion";

const Nav = () => {
  const isOpenMainModal = useIsOpenMainModal();
  const handleOpenMainModal = useModalActions("handleOpenMainModal") as (v: boolean) => void;

  const infoBtnHandler = () => {
    if (isOpenMainModal) handleOpenMainModal(false);
    else handleOpenMainModal(true);
  };

  return (
    <div className="fixed z-50 top-0 left-0 w-full h-[120px]">
      <img
        src={logo}
        alt="title logo"
        width="150px"
        height="100%"
        className="absolute top-0 left-[50%] translate-x-[-50%]"
      />
      <button
        className="h-full flex justify-center items-center absolute top-0 right-[2vmax]"
        onClick={infoBtnHandler}
        name="info button"
      >
        <motion.svg
          whileHover={{
            scale: 2,
          }}
          width="24px"
          fill="none"
          height="24px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 11V16M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21ZM12.0498 8V8.1L11.9502 8.1002V8H12.0498Z"
            stroke="#fff"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </button>
    </div>
  );
};

export default Nav;

import { create } from "zustand";
import { ModalStoreType } from "../types";

const modalStore = create<ModalStoreType>((set) => ({
  currentModal: null,
  isOpenModal: false,
  isOpenMainModal: false,
  isOpenMemberIntroModal: false,
  actions: {
    handleCurrentModal: (v) => set(() => ({ currentModal: v })),
    handleOpenModal: (v) => set(() => ({ isOpenModal: v })),
    handleOpenMainModal: (v) => set(() => ({ isOpenMainModal: v })),
    handleOpenMemberIntroModal: (v) => set(() => ({ isOpenMemberIntroModal: v })),
  },
}));

const useCurrentModal = () => modalStore((state) => state.currentModal);
const useIsOpenModal = () => modalStore((state) => state.isOpenModal);
const useIsOpenMainModal = () => modalStore((state) => state.isOpenMainModal);
const useIsOpenMemberIntroModal = () => modalStore((state) => state.isOpenMemberIntroModal);
const useModalActions = (name: keyof ModalStoreType["actions"]) =>
  modalStore((state) => state.actions[name]);

export {
  useCurrentModal,
  useIsOpenModal,
  useIsOpenMainModal,
  useIsOpenMemberIntroModal,
  useModalActions,
};

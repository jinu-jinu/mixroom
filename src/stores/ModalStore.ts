import { create } from "zustand";
import { ModalStoreType } from "../types";

const modalStore = create<ModalStoreType>((set) => ({
  isOpenMainModal: false,
  isOpenMemberIntroModal: false,
  actions: {
    handleOpenMainModal: (v) => set(() => ({ isOpenMainModal: v })),
    handleOpenMemberIntroModal: (v) => set(() => ({ isOpenMemberIntroModal: v })),
  },
}));

const useIsOpenMainModal = () => modalStore((state) => state.isOpenMainModal);
const useIsOpenMemberIntroModal = () => modalStore((state) => state.isOpenMemberIntroModal);
const useModalActions = (name: keyof ModalStoreType["actions"]) =>
  modalStore((state) => state.actions[name]);

export { useIsOpenMainModal, useIsOpenMemberIntroModal, useModalActions };

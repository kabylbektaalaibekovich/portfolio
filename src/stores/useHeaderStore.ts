import { create } from "zustand";

interface IHeaderStore {
  isOpen: boolean;

  setIsOpen: (value: boolean) => void;
  toggleMenu: () => void; // Добавляем функцию для переключения состояния
  fixScroll: () => void;
}

export const useHeaderStore = create<IHeaderStore>((set) => ({
  isOpen: false,

  setIsOpen: (value) => set({ isOpen: value }),
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })), // Переключает состояние
  fixScroll: () => {
    setTimeout(() => {
      window.scrollBy(0, 1);
    }, 100);
  },
}));

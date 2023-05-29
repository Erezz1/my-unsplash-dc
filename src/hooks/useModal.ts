import { create } from 'zustand';

export const useModal = create<Modal>((set) => ({
  action: null,
  hiddenModal: () => set({ action: null }),
  showModal: (action) => set({ action }),
}));

interface Modal {
  action: 'adding' | 'deleting' | null;
  showModal: (action: 'adding' | 'deleting') => void;
  hiddenModal: () => void;
}

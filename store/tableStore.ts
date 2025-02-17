// @/store/modelStore.ts
import { create } from 'zustand';

interface ModelStore {
  model: string | null;
  id: string | number | null;
  setModel: (model: string) => void;
  setId: (id: string | number) => void;
}

export const useModelStore = create<ModelStore>((set) => ({
  model: null,
  id: null,
  setModel: (model) => set({ model }),
  setId: (id) => set({ id }),
}));
import { create } from "zustand";

interface NavStore {
  store: string | null;
  category: string | null;
  classe: string | null;
  subClass: string | null;
  setStore: (store: string | null) => void;
  setCategory: (category: string | null) => void;
  setClasse: (classe: string | null) => void;
  setSubClass: (subClass: string | null) => void;
}

export const useNavStore = create<NavStore>((set) => ({
  store: null,
  category: null,
  classe: null,
  subClass: null,
  setStore: (store) => set({ store, category: null, classe: null, subClass: null }),
  setCategory: (category) => set({ category, classe: null, subClass: null }),
  setClasse: (classe) => set({ classe, subClass: null }),
  setSubClass: (subClass) => set({ subClass }),
}));

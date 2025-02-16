/*
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

*/
"use client";

import React, { useEffect, useState } from "react";
import { itemList as staticItemList } from "@/lib/data/dataItemList";

const ItemList: React.FC = () => {
  const [items, setItems] = useState<typeof staticItemList>([]);

  useEffect(() => {
    setItems(staticItemList);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {items.map((item) => (
        <div key={item.id} className="card bg-base-100 shadow-xl">
          <figure>
            <img src={item.mainImage} alt={item.title} className="h-48 w-full object-cover" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.title}
              {item.isOnSale && <div className="badge badge-secondary ml-2">Promo</div>}
            </h2>
            <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-bold">
                {item.price} {item.currency}
              </span>
              <span
                className={`badge ${
                  item.isavailable ? "badge-success" : "badge-error"
                }`}
              >
                {item.isavailable ? "En stock" : "Rupture"}
              </span>
            </div>
            <div className="card-actions justify-end mt-2">
              <button className="btn btn-primary">Ajouter au panier</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

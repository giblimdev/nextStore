"use client";

import React from "react";
import { itemList } from "@/lib/data/dataItemList";

const ItemList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {itemList.map((item) => (
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

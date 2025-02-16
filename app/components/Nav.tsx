"use client";

import React, { useState, useEffect } from "react";
import { useNavStore } from "@/store/navStore";
import { getCategories, getClasses, getSubClasses } from "@/lib/utils/navhelper";
//import ItemList from "./ItemList";

const Nav: React.FC = () => {
  const { store, category, classe, subClass, setCategory, setClasse, setSubClass } = useNavStore();
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [expandedClasse, setExpandedClasse] = useState<string | null>(null);

  // Reset category, classe, and subClass when store changes
  useEffect(() => {
    setCategory(null);
    setClasse(null);
    setSubClass(null);
  }, [store, setCategory, setClasse, setSubClass]);

  const toggleCategory = (catTitle: string) => {
    setExpandedCategory((prev) => (prev === catTitle ? null : catTitle));
    setCategory(catTitle);
  };

  const toggleClasse = (clTitle: string) => {
    setExpandedClasse((prev) => (prev === clTitle ? null : clTitle));
    setClasse(clTitle);
  };

  const handleSubClassClick = (subTitle: string) => {
    setSubClass(subTitle);
  };

  // If subClass is set, hide Nav and show ItemList
  if (subClass) {
    //return <ItemList subClass={subClass} />;
    return null; // Hide Nav when ItemList is displayed
  }

  return (
    <nav className="bg-gray-200 text-white p-4 shadow-lg">
      {store && (
        <div className="space-y-4">
          {/* Categories */}
          <div id="category" className="flex flex-wrap gap-4">
            {getCategories().map((cat) => (
              <div key={cat.id} className="bg-gray-800 p-4 rounded-lg w-full md:w-1/2 lg:w-1/3">
                <button
                  onClick={() => toggleCategory(cat.title)}
                  className="w-full text-left text-lg font-semibold flex justify-between items-center"
                >
                  <span>{cat.title}</span>
                  <span>{expandedCategory === cat.title ? "▼" : "▶"}</span>
                </button>
                {expandedCategory === cat.title && (
                  <div className="mt-2">
                    <ul className="pl-4">
                      {getClasses().map((cl) => (
                        <li key={cl.id} className="disc text-gray-300 hover:text-white">
                          <button
                            onClick={() => toggleClasse(cl.title)}
                            className="w-full text-left flex justify-between items-center"
                          >
                            <span>{cl.title}</span>
                            <span>{expandedClasse === cl.title ? "▼" : "▶"}</span>
                          </button>
                          {expandedClasse === cl.title && (
                            <ul className="pl-4 mt-2 space-y-2">
                              {getSubClasses().map((sub) => (
                                <li
                                  key={sub.id}
                                  className="text-sm text-gray-400 hover:text-gray-200"
                                  onClick={() => handleSubClassClick(sub.title)}
                                >
                                  {sub.title}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
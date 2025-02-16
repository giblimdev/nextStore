"use client"
import React, { useState } from 'react';

interface Info {
  id: string;
  title: string;
}

const infos: Info[] = [
  { id: "1", title: "texte 1" },
  { id: "2", title: "texte 2" },
  { id: "3", title: "texte 3" },
  { id: "4", title: "texte 4" },
  { id: "5", title: "texte 5" },
  { id: "6", title: "texte 6" },
  { id: "7", title: "texte 7" },
  { id: "8", title: "texte 8" },
  { id: "9", title: "texte 9" },
  { id: "10", title: "texte 10" },
  { id: "11", title: "texte 11" },
];

function Page() {
  const [openCollapseId, setOpenCollapseId] = useState<string | null>(null);

  const toggleCollapse = (id: string) => {
    setOpenCollapseId(openCollapseId === id ? null : id);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {infos.map((info) => (
          <div key={info.id} className="collapse collapse-arrow bg-base-200 mt-4 p-2 border rounded-xl shadow-lg">
            <input
              type="checkbox"
              checked={openCollapseId === info.id}
              onChange={() => toggleCollapse(info.id)}
            />
            <div className="collapse-title text-xl font-medium">
              {info.id} - {info.title}
            </div>
            <div className="collapse-content">
              <p>Contenu pour {info.title} et le text</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
/*seul la div ouverte doit augmenter sa hauteur */
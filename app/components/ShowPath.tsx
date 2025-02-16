// @/components/ShowPath.tsx
"use client";

import { useNavStore } from "@/store/navStore";

const ShowPath: React.FC = () => {
  const { store, category, classe, subClass } = useNavStore();

  return (
    <div className=" breadcrumbs mt-4 px-4">
      <ul className="flex gap-2">
        {store && <li className="text-blue-500">{store}</li>}
        {category && <li className="text-green-500">{category}</li>}
        {classe && <li className="text-yellow-500">{classe}</li>}
        {subClass && <li className="text-red-500">{subClass}</li>}
      </ul>
    </div>
  );
};

export default ShowPath;
/*
mets les ">" en noir
*/
//@/app/dev/page.tsx

import React from "react";
import { 
  UserCircleIcon,
  Bars3Icon,
  ChevronDoubleUpIcon,
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
  BellIcon,
  HomeIcon } from '@heroicons/react/24/outline'; 

interface PathItem {
  path: string;
  utility: string;
}

const path: PathItem[] = [
  { path: "@/app/admin", utility: "dossier admin" },
  { path: "@/app/composant", utility: "dossier composant utlisable dans app" },
  { path: "@/app/composant", utility: "" },
  { path: "@/app/composant.itemDetail.tsx", utility: "creer le squelton d'un article" },
  { path: "@/app/composant.itemDetailImage.tsx", utility: "expose les images mise en forme pour itemDetail.tsx" },
  { path: "@/app/dev", utility: "dossier dev" },
  { path: "@/app/dev/page.tsx", utility: "page dev" },
  { path: "@/public", utility: "dossier publique en libre acces" },
  { path: "@/public/article/page.tsx", utility: "" },
  { path: "@/public/pages.tsx", utility: "" },
  { path: "@/app/layout.tsx", utility: "Layout du site" }, 
  { path: "@/app/page.tsx", utility: "page d'acccueil du site" },
];

export default function Page() {
  return (
    <div className="flex justify-between">
      {/*frame path */}
      <div className="border-4 rounded-2xl bg-slate-200 m-2 p-3">
        <h2>Path</h2>
        <div className="border-3 rounded-2xl bg-slate-50 m-2 p-3">
          {path.map((item, index) => (
            <p key={index}>
              {item.path} : {item.utility}
            </p>
          ))}
        </div>
      </div>
      {/* todo*/}
      <div className="border-4 rounded-2xl bg-slate-200 m-2 p-3">
        <h2>ToDO</h2>
        <div className="border-3 rounded-2xl bg-slate-50 m-2 p-3">
          <ul>
            <li>Afficher la liste des articles</li>
            <li>Afficher la page détaille item</li>
          </ul>
        </div>
      </div>

      {/* icon*/}
      <div className="border-4 rounded-2xl bg-slate-200 m-2 p-3">
        <h2>Icon</h2>
        <div className="border-3 rounded-2xl bg-slate-50 m-2 p-3">
          <ul>
            <li>
              <a href="https://heroicons.com/outline" target="_blank" rel="noopener noreferrer">Site Web Heroicons</a> {/* Lien amélioré */}
            </li>
            <li><UserCircleIcon className="h-6 w-6" /> Cercle Utilisateur</li>
            <li><Bars3Icon className="h-6 w-6" /> Menu</li>
            <li><ChevronDoubleUpIcon className="h-6 w-6" /> Double Flèche Haut</li>
            <li><Cog6ToothIcon className="h-6 w-6" /> Paramètres</li>
            <li><QuestionMarkCircleIcon className="h-6 w-6" /> Aide</li>
            <li><BellIcon className="h-6 w-6" /> Notifications</li>
            <li><HomeIcon className="h-6 w-6" /> Accueil</li> 
            <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg> card
            </li> 
            
          </ul>
        </div>
      </div>
    </div>
  );
}

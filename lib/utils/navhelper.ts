/*
/*
//@/lib/table/typeSubClasse.ts

export interface SubClasse {
  id: string;
  classeId: string;
  title: string;
}

*/
/*
//@/lib/data/dataSubClasse

import { SubClasse } from "@/lib/table/typeSubClasse";

export const subClasses: SubClasse[] = [
    { id: "1", classeId : "1", title: "Soins des Ongles et des Mains"},
    { id: "2", classeId : "2", title: "Vernis et Couleurs" },
    { id: "3", classeId : "2", title: "Gel"},
    { id: "4", classeId : "2", title: "Acrylique"},
    { id: "5", classeId : "3", title: "Capsules et Prothèses Intégrales"},
    { id: "6", classeId : "3", title: "Nail Arts de la décoration 2D et 3D "},
    { id: "7", classeId : "4", title: "Liquides, finition et autres" },
    { id: "8", classeId : "4", title: "Outils limes et tout ce dont vous avez besoin" },
    { id: "9", classeId : "5", title: "Accessoires Lingettes, distributeurs de liquide..." },
    { id: "10", classeId : "5", title: "Matériel Électrique"},
    { id: "11", classeId : "6", title: "Kits Des kits pour réaliser une technique de A à Z" },
    { id: "12", classeId : "6", title: ""},
    { id: "13", classeId : "7", title: "Mobilier d'Institut Mobilier pour salon" },
    { id: "14", classeId : "7", title: "Vêtements et Protection Individuelle vous ou vos employés" },
    { id: "15", classeId : "7", title: "Hygiène d'hygiène individuelle et collective et hygiène de l'environnement"},
    { id: "16", classeId : "7", title: ""},
  ];
*/  
  
//@/lib/utils/helper.ts  
import { subClasses } from "@/lib/data/dataSubClasse";
import { SubClasse } from "@/lib/table/typeSubClasse";
import { classe } from "@/lib/data/dataClasse";
import { Classe } from "@/lib/table/typeClasse";
import { categories } from "@/lib/data/dataCategory";
import { Category } from "@/lib/table/typeCategory";
import { stores } from "@/lib/data/dataStore"
import { Store } from "@/lib/table/typeStore"


export function getSubClasses(): SubClasse[] {
  return subClasses; 
}
export function getClasses(): Classe[] {
  return classe; 
}
export function getCategories(): Category[] {
  return categories; 
}
export function getStores(): Store[] {
  return stores; 
}

const allSubClasse = getSubClasses();
console.log("@/lib/utils/helpers.ts dit getSubClass() : ");

const allClass = getClasses();
console.log("@/lib/utils/helpers.ts dit getClass() : ");
const allCategories = getCategories();
console.log("@/lib/utils/helpers.ts dit getCategories() : ");
const allStores = getStores();
console.log("@/lib/utils/helpers.ts dit getStores(): ");

/*
//@/lib/table/category
export interface Category {
  id: string;
  storeId: string;
  title: string;
  description: string;
}
*/			
/*
//@/lib/data/Classe.ts
export interface Classe {
  id : string;
  storeId : string;  
  categoryId : string;
  title: string;
}
*/
import { Classe } from "@/lib/table/typeClasse";

export const classe: Classe[] = [
    { id: "1", storeId: "A", categoryId : "1", title: "Classe Soins des Ongles et des Mains" },
    { id: "2", storeId: "A", categoryId : "1", title: "Classe Vernis et Couleurs"},
    { id: "3", storeId: "A", categoryId : "1", title: "Classe Gel"},
    { id: "4", storeId: "A", categoryId : "2", title: "Classe Acrylique"},
    { id: "5", storeId: "A", categoryId : "2", title: "Classe Capsules et Prothèses Intégrales"},
    { id: "6", storeId: "A", categoryId : "2", title: "Classe Nail Art"},
    { id: "7", storeId: "A", categoryId : "3", title: "Classe Liquides"},
    { id: "8", storeId: "A", categoryId : "3", title: "Classe Outils"},
    { id: "9", storeId: "A", categoryId : "3", title: "Classe Accessoires"},
    { id: "10", storeId: "A", categoryId : "3", title: "Classe Matériel Électrique"},
    { id: "11", storeId: "A", categoryId : "4", title: "Classe Kits"},
    { id: "12", storeId: "A", categoryId : "4", title: "Classe"},
    { id: "13", storeId: "B", categoryId : "4", title: "Classe Mobilier d'Institut"},
    { id: "14", storeId: "B", categoryId : "4", title: "Classe Vêtements et Protection Individuelle"},
    { id: "15", storeId: "B", categoryId : "4", title: "Classe Hygiène"},
    { id: "16", storeId: "B", categoryId : "4", title: "Classe"},
  ];
  
  
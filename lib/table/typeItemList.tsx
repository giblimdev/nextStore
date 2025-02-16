//@/lib/table/typeItemList.tsx
export type ItemList = {
    // Creer item-cart au moment de la creation d'un tiem
    id: string; 
    title: string; // Nom de l'article, court et descriptif.
    summary: string; // Résumé court de l'article, utile pour les aperçus rapides.
    price: number; // Prix actuel de l'article.
    currency: string; // Devise utilisée (exemple : EUR, USD, GBP).
    isavailable: boolean; // Disponibilité de l'article (exemple : "En stock", "Rupture de stock").
    mainImage: string; // URL de l'image principale de l'article.
    rating?: number; // Note moyenne de l'article (optionnel, exemple : 4.5/5).
    isOnSale?: boolean; // Indique si l'article est en promotion (optionnel).
    saleEndDate?: string; // Date de fin de la promotion (optionnel).
    tags?: string[]; // Mots-clés associés à l'article (optionnel, exemple : ["nouveauté", "promo"]).

};

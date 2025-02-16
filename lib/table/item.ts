type Item = {
    // Creer item-cart au moment de la creation d'un tiem
    id: string; // Identifiant unique de l'article (généralement généré par la base de données).
    name: string; // Nom de l'article, court et descriptif.
    description: string; // Description détaillée de l'article (caractéristiques, avantages, etc.).
    usageInstructions: string // mode d'emploi
    summary: string; // Résumé court de l'article, utile pour les aperçus rapides.
    brand: string; // Marque ou fabricant de l'article.
    store: string; // Nom du magasin ou vendeur qui propose l'article.
    category: string; // Catégorie principale de l'article (exemple : Électronique, Vêtements, Maison).
    classe: string; // Classe de l'article (peut être utilisé pour une classification supplémentaire).
    subclasse: string; // Sous-classe de l'article (pour une granularité plus fine).
    sku?: string; // Code SKU (Stock Keeping Unit) pour la gestion des stocks (optionnel, car peut être généré automatiquement).

    // Prix et disponibilité
    price: number; // Prix actuel de l'article.
    currency: string; // Devise utilisée (exemple : EUR, USD, GBP).
    discount?: number; // Réduction applicable (en pourcentage ou montant fixe, optionnel).
    oldPrice?: number; // Ancien prix (utile pour afficher les promotions, optionnel).
    isInStock: boolean; // Indique si l'article est en stock (true/false).
    stockQuantity: number; // Quantité disponible en stock.
    availability: string; // Disponibilité de l'article (exemple : "En stock", "Rupture de stock").

    // Images et médias
    mainImage: string; // URL de l'image principale de l'article.
    additionalImages?: string[]; // Tableau d'URLs pour les images supplémentaires (optionnel).
    video?: string; // URL d'une vidéo de démonstration ou de présentation (optionnel).

    // Caractéristiques techniques
    specifications?: { [key: string]: string }; // Objet contenant les caractéristiques techniques (exemple : { "Processeur": "Intel i5", "RAM": "8 Go" }).
    dimensions?: { length: number; width: number; height: number }; // Dimensions de l'article (optionnel).
    weight?: number; // Poids de l'article (optionnel).
    material?: string; // Composition de l'article (optionnel).
    color?: string[]; // Tableau des couleurs disponibles (optionnel).
    size?: string[]; // Tableau des tailles disponibles (optionnel, utile pour les vêtements ou chaussures).

    // SEO (Search Engine Optimization)
    metaTitle: string; // Titre optimisé pour le référencement (SEO).
    metaDescription: string; // Description optimisée pour le référencement (SEO).
    slug: string; // URL conviviale pour l'article (exemple : "ordinateur-portable-hp-15s").

    // Logistique
    shippingCost?: number; // Coût de livraison (optionnel).
    shippingTime?: string; // Délai de livraison estimé (optionnel).
    isFreeShipping?: boolean; // Indique si la livraison est gratuite (optionnel).
    returnPolicy?: string; // Politique de retour (optionnel, exemple : "Retours acceptés sous 30 jours").

    // Évaluations et avis
    rating?: number; // Note moyenne de l'article (optionnel, exemple : 4.5/5).
    reviews?: {
        reviewerUser: string; // Nom ou identifiant de l'utilisateur qui a laissé l'avis.
        reviewText: string; // Texte de l'avis.
        reviewRating: number; // Note donnée par l'utilisateur.
        reviewDate: string; // Date de l'avis.
    }[]; // Tableau d'avis clients (optionnel).

    // Informations promotionnelles
    isOnSale?: boolean; // Indique si l'article est en promotion (optionnel).
    saleStartDate?: string; // Date de début de la promotion (optionnel).
    saleEndDate?: string; // Date de fin de la promotion (optionnel).
    tags?: string[]; // Mots-clés associés à l'article (optionnel, exemple : ["nouveauté", "promo"]).

    // Informations supplémentaires
    warranty?: string; // Garantie offerte (optionnel, exemple : "2 ans").
    assemblyRequired?: boolean; // Indique si un montage est nécessaire (optionnel).
    includes?: string[]; // Liste des accessoires inclus (optionnel, exemple : ["Câble USB", "Notice d'utilisation"]).
};


/*

Liste des champs a implementer
    id: string; 
    name: string; 
    description: string; 
    usageInstructions: string 
    summary: string; 
    brand: string; 
    store: string; 
    category: string; 
    classe: string; // ilisé pour une classification supplémentaire).
    subclasse: string; // rité plus fine).
    sku?: string; // estion des stocks (optionnel, car peut être généré automatiquement).
    // Prix et disponibilité
    price: number; 
    currency: string; 
    discount?: number; // Réduction applicable (nnel).
    oldPrice?: number; // Aomotions, optionnel).
    isInStock: boolean; // ue/false).
    stockQuantity: number; // Quantité disponible en stock.
    availability: string; // D: "En stock", "Rupture de stock").

    // Images et médias gerer par le composant ItemDzrailImage
    mainImage: string; // URLrticle.
    additionalImages?: string[]; /ges supplémentaires (optionnel).
    video?: string; // URL d'une vrésentation (optionnel).

    // Caractéristiques techniques
    specifications?: { [key: string]: string }; 
    dimensions?: { length: number; width: number; height: number }; 
    weight?: number; .
    material?: string; 
    color?: string[]; 
    size?: string[]; 

    // SEO (Search Engine Optimization)
    metaTitle: string; 
    metaDescription: string; 
    slug: string; // 

    // Logistique
    shippingCost?: number; 
    shippingTime?: string; 
    returnPolicy?: string; 

    // Évaluations et avis
    rating?: number; // Note moyenne de l'article (optionnel, exemple : 4.5/5).
    reviews?: {
        reviewerUser: string; // Nom ou identifiant de l'utilisateur qui a laissé l'avis.
        reviewText: string; // Texte de l'avis.
        reviewRating: number; // Note donnée par l'utilisateur.
        reviewDate: string; // Date de l'avis.
    }[]; // Tableau d'avis clients (optionnel).

    // Informations promotionnelles
    isOnSale?: boolean; 
    saleStartDate?: string; 
    saleEndDate?: string; 
    tags?: string[]; 

    // Informations supplémentaires
    warranty?: string; 

    includes?: string[]; // Liste des accessoires inclus (optionnel, exemple : ["Câble USB", "Notice d'utilisation"]).

*/



import React from 'react';
import ItemDetailImage from './ItemDetailIamge';

interface ItemDetailImgProps {
  item: Item;
}

const item: Item = {
  id: "12345", // Identifiant unique généré par la base de données
  name: "Pinceau de Nail Art Professionnel",
  description: "Pinceau de haute qualité pour la création de nail art, idéal pour les professionnels et les amateurs. Poils synthétiques doux et précis.",
  usageInstructions: "Utiliser avec des vernis à ongles ou des gels. Nettoyer après chaque utilisation avec un dissolvant.",
  summary: "Pinceau de nail art professionnel pour des designs précis.",
  brand: "NailPro",
  store: "BeautyStore",
  category: "Beauté",
  classe: "Accessoires",
  subclasse: "Pinceaux",
  sku: "NAILBRUSH123",

  // Prix et disponibilité
  price: 12.99,
  currency: "EUR",
  discount: 10, // 10% de réduction
  oldPrice: 14.99,
  isInStock: true,
  stockQuantity: 100,
  availability: "En stock",

  // Images et médias
  mainImage: "/Capture d’écran 2025-02-12 094422.png",
  additionalImages: [
    "/Capture d’écran 2025-02-12 094422.png",
    "/Capture d’écran 2025-02-12 094422.png"
  ],

  // Caractéristiques techniques
  specifications: {
    "Type de poils": "Synthétiques",
    "Longueur du manche": "15 cm",
    "Diamètre de la pointe": "2 mm"
  },
  dimensions: { length: 20, width: 2, height: 2 }, // en cm
  weight: 0.05, // en kg
  material: "Plastique et poils synthétiques",
  color: ["Noir", "Rose"],
  size: ["Petit", "Moyen", "Grand"],

  // SEO
  metaTitle: "Pinceau de Nail Art Professionnel - NailPro",
  metaDescription: "Découvrez le pinceau de nail art professionnel de NailPro, idéal pour des designs précis et créatifs.",
  slug: "pinceau-nail-art-professionnel-nailpro",

  // Logistique
  shippingCost: 2.99,
  shippingTime: "2-3 jours",
  isFreeShipping: false,
  returnPolicy: "Retours acceptés sous 30 jours",

  // Évaluations et avis
  rating: 4.7,
  reviews: [
    {
      reviewerUser: "Alice123",
      reviewText: "Excellent pinceau, très précis et facile à utiliser.",
      reviewRating: 5,
      reviewDate: "2023-10-01"
    },
    {
      reviewerUser: "BeautyLover",
      reviewText: "Parfait pour les débutants en nail art.",
      reviewRating: 4,
      reviewDate: "2023-09-25"
    }
  ],

  // Informations promotionnelles
  isOnSale: true,
  saleStartDate: "2023-10-01",
  saleEndDate: "2023-10-31",
  tags: ["nouveauté", "promo", "nail art"],

  // Informations supplémentaires
  warranty: "1 an",
  assemblyRequired: false,
  includes: ["Coffret de protection", "Guide d'utilisation"]
};

export default function ItemDetail() {
  return (
    <div className="container mx-auto p-4">
      {/* Section principale du produit */}
      <div>
        <span>logoHome</span>/<span>{item.store}</span>/<span>{item.category}</span>/
        <span>{item.classe}</span>/<span>{item.subclasse}</span>/
        <span>itemRank</span>
      </div>      
          
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Images du produit */}
        
        <div className="border-4 rounded-lg m-2 p-2 flex justify-center items-center h-80 overflow-hidden">
          <ItemDetailImage item={item} />
        </div>
        {/* Détails du produit */}
        <div className="space-y-6">
          {/* Nom et marque */}
          <h1 className="text-4xl font-bold">{item.name}</h1>
          <p className="text">{item.id}</p>
          <p className="text-lg text-gray-600">Marque : {item.brand}</p>

          {/* Prix et promotion */}  
          <div className="flex items-center gap-4">
            <p className="text-3xl font-bold text-primary">
              {item.price} {item.currency}
            </p>
            {item.discount && (
              <div className="badge badge-secondary">
                {item.discount}% de réduction
              </div>
            )}
            {item.oldPrice && (
              <p className="text-lg text-gray-500 line-through">{item.oldPrice} {item.currency}</p>
            )}
          </div>

          {/* Disponibilité */}
          <div className="flex items-center gap-2">
            <span className={`badge ${item.isInStock ? 'badge-success' : 'badge-error'}`}>
              {item.isInStock ? 'En stock' : 'Rupture de stock'}
            </span>
            <p className="text-gray-600">Quantité disponible : {item.stockQuantity}</p>
          </div>

          {/* Description */}
          <div className="prose">
            <h3 className="text-xl font-semibold">Description</h3>
            <p>{item.description}</p>
          </div>

          {/* Caractéristiques techniques */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Caractéristiques techniques</h3>
            <ul className="list-disc pl-6">
              {Object.entries(item.specifications || {}).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}</strong>: {value}
                </li>
              ))}
            </ul>
          </div>

          {/* Boutons d'action */}
          <div className="flex gap-4">
            <button className="btn btn-primary">Ajouter au panier</button>
            <button className="btn btn-outline">Acheter maintenant</button>
          </div>
        </div>
      </div>

      {/* Section des avis */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Avis des clients</h2>
        <div className="space-y-4">
          {item.reviews?.map((review, index) => (
            <div key={index} className="card bg-base-200 p-4">
              <div className="flex items-center gap-2">
                <div className="avatar placeholder">
                  <div className="bg-neutral text-neutral-content rounded-full w-8">
                    <span>{review.reviewerUser[0]}</span>
                  </div>
                </div>
                <p className="font-semibold">{review.reviewerUser}</p>
              </div>
              <div className="rating rating-sm mt-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <input
                    key={i}
                    type="radio"
                    name={`rating-${index}`}
                    className="mask mask-star"
                    checked={i + 1 === review.reviewRating}
                    readOnly
                  />
                ))}
              </div>
              <p className="mt-2">{review.reviewText}</p>
              <p className="text-sm text-gray-500">{review.reviewDate}</p>
            </div>
          ))}
        </div>
        <div> 
                   <p> sku: "NAILBRUSH123",</p>
        </div>
      </div>
      <div>
        //item contenant
        <p>  usageInstructions: "Utiliser avec des vernis à ongles ou des gels. Nettoyer après chaque utilisation avec un dissolvant.",</p>
        <p>summary: "Pinceau de nail art professionnel pour des designs précis.",</p>
        <p>brand: "NailPro",</p>

          // Prix et disponibilité
          <p>price: 12.99,</p>
          <p>currency: "EUR",</p>
          <p>discount: 10,</p> // 10% de réduction
          <p>oldPrice: 14.99,</p>
          <p>isInStock: true,</p>
          <p>stockQuantity: 100,</p>
          <p>availability: "En stock",</p>

          

    <div>
      // Caractéristiques techniques
      <p>specifications: 
        "Type de poils": "Synthétiques",
        "Longueur du manche": "15 cm",
        "Diamètre de la pointe": "2 mm"
      ,</p>
      <p>dimensions:  length 20, width: 2, height: 2 , // en cm</p>
      <p>weight 0.05, // en kg
      material "Plastique et poils synthétiques",
      color ["Noir", "Rose"],
      size ["Petit", "Moyen", "Grand"],
      </p>
    </div>
    <div>  // SEO
      <p>metaTitle: "Pinceau de Nail Art Professionnel - NailPro",</p>
      <p>metaDescription: "Découvrez le pinceau de nail art professionnel de NailPro, idéal pour des designs précis et créatifs.",</p>
      <p>slug: "pinceau-nail-art-professionnel-nailpro",</p>
    </div>
    <div>
      // Logistique
      <p>shippingCost: 2.99,</p>
      <p>shippingTime: "2-3 jours",</p>
      <p>isFreeShipping: false,</p>
      <p>returnPolicy: "Retours acceptés sous 30 jours",</p>
    </div>
    <div>
      // Évaluations et avis
      <p>rating: 4.7,</p>
      <p>reviews:</p> 
      <p>reviewerUser: "Alice123",</p>
      <p> reviewText: "Excellent pinceau, très précis et facile à utiliser.",</p>
      <p> reviewRating: 5,</p>
      <p>   reviewDate: "2023-10-01"</p>
      </div>
      <div>
      reviewerUser: "BeautyLover",
      reviewText: "Parfait pour les débutants en nail art.",
      reviewRating: 4,
      reviewDate: "2023-09-25"
    
      </div>
      <div>
        // Informations promotionnelles
        isOnSale: true,
        saleStartDate: "2023-10-01",
        saleEndDate: "2023-10-31",
        tags: ["nouveauté", "promo", "nail art"],
        </div>
        <div>
        // Informations supplémentaires
        warranty: "1 an",
        assemblyRequired: false,
        includes: ["Coffret de protection", "Guide d'utilisation"]
        </div>
      </div>
</div>
  );
}

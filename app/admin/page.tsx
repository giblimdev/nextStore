import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
  <div className='p-5'>
    <h1>AdminPage </h1><span>Visible uniquement par les Admin</span>
    <div className="border rounded-lg bg-slate-50 flex">
      <div className='m-2'><Link rel="stylesheet" href="item">Gestion des Articles</Link></div>
      <div className='m-2'><Link rel="stylesheet" href="commande">Gestion des Commandes</Link></div>
    </div>
    <div>
      <h2>Fonctionemetn de la base de données</h2>
      <div>
        <section>
          <h3>1. Gestion des utilisateurs et des magasins :</h3>
          <p>User (Utilisateur) : Cette table stocke les informations essentielles sur les utilisateurs de votre plateforme : <br />
          identifiant unique (id), pseudonyme (pseudo), adresse e-mail (email), mot de passe (password), <br />
          rôle (role - un enum définissant les privilèges : USER, SELLER, ADMIN), <br />
          date de création (createdAt) et date de mise à jour (updatedAt).</p>
          <p>Store (Magasin) : Représente les magasins physiques ou en ligne de votre plateforme, avec un identifiant unique (id) et <br />
          un titre (title).</p>
        </section>
        <section><h3>2. Catalogue de produits :</h3>
          <p>Category (Catégorie) : Permet de classer les produits par catégories (ex : vêtements, électronique, etc.). <br />
          Chaque catégorie possède un identifiant unique (id), <br />
          un identifiant du magasin auquel elle appartient (storeId), <br />
          un titre (title) et une description optionnelle (description).</p>
          <p>Classe (Classe) et SubClasse (Sous-classe) : <br />
          Offrent une granularité plus fine dans la classification des produits, permettant une structure hiérarchique <br />
          (par exemple : NailArt - Papier foil - colle). Chaque classe appartient à une catégorie, et chaque sous-classe appartient à une classe.</p>
          <p>Item (Article/Produit) : C'est le cœur du catalogue. Cette table contient toutes les informations détaillées sur chaque produit : identifiant unique (id), identifiant du magasin (storeId), identifiant de la catégorie (categoryId), identifiants optionnels de la classe (classeId) et de la sous-classe (subClasseId), nom du produit (title), URL conviviale unique (slug), résumé court (summary), description détaillée (description), marque (brand), prix actuel (price), ancien prix (pour les promotions) (oldPrice), réduction (discount), devise (currency), quantité en stock (stockQuantity), disponibilité (isAvailable), dimensions (dimensions - au format JSON), poids (weight), couleurs disponibles (colors), tailles disponibles (sizes), URL de l'image principale (mainImage), URLs des images supplémentaires (addImages), note moyenne (rating), date de début de promotion (saleStartDate), date de fin de promotion (saleEndDate), instructions d'utilisation (usageInstructions), spécifications techniques (specifications - au format JSON), méta-titre pour le SEO (metaTitle) et méta-description pour le SEO (metaDescription).</p>
          <p>SKU (Stock Keeping Unit) : Représente les différentes variations d'un produit (par exemple, différentes tailles ou couleurs). Chaque SKU est lié à un produit (itemId) et possède un identifiant unique (id), un statut de disponibilité en stock (isInStock), une date de création (createdAt), une date de vente (saledDate) et un état (skuState - un enum : avaible, ordering).</p>
        </section>
        <section><h3>3. Avis, panier et commandes :</h3>
          <p>Review (Avis) : Stocke les avis des utilisateurs sur les produits, avec un identifiant unique (id), <br />
          l'identifiant de l'utilisateur (userId), l'identifiant du produit (itemId), la note (rating), <br />
          un commentaire optionnel (comment) et la date de création (createdAt).</p>
          <p>CartItem (Élément du panier) : Représente un article dans le panier d'un utilisateur, avec un identifiant unique (id), <br />
          l'identifiant de l'utilisateur (userId), l'identifiant du SKU (skuId) et la quantité (quantity).</p>
          <p>Order (Commande) : Enregistre les commandes des clients, avec un identifiant unique (id), <br />
          l'identifiant de l'utilisateur (userId), <br />
          le prix total (totalPrice), <br />
          le statut de la commande (status - un enum : PENDING, PAID, SHIPPED, DELIVERED, CANCELED) <br />
          la date de création (createdAt).</p>
          <p>OrderItem (Élément de commande) : Détaille chaque article dans une commande, avec un identifiant unique (id), l'identifiant de la commande (orderId), l'identifiant du SKU (skuId), la quantité (quantity) et le prix au moment de la commande (price).</p>
        </section>
        <section><h3>4. Paiements et fidélité :</h3>
          <p>Transaction (Paiement) : Enregistre les transactions de paiement, avec un identifiant unique (id), <br />
          l'identifiant de la commande associée (orderId), le montant (amount), le statut du paiement (status - un enum : PENDING, COMPLETED, FAILED) et la date de création (createdAt).</p>
          <p>LoyaltyCard (Carte de fidélité) : Attribue des points de fidélité aux utilisateurs, avec un identifiant unique (id), l'identifiant de l'utilisateur (userId), le nombre de points (points) et la date de création (createdAt).</p>
        </section>
        <section><h3>5. Approvisionnement :</h3>
          <p>Supplier (Fournisseur) : Stocke les informations sur les fournisseurs, avec un identifiant unique (id) et <br />
          un nom (name).</p>
          <p>Procurement (Commande d'approvisionnement) : <br />
          Enregistre les commandes passées aux fournisseurs, avec un identifiant unique (id), <br />
          l'identifiant de l'utilisateur qui a créé la commande (userId), <br />
          la date d'expédition (shippedDate), <br />
          la date de réception (receivedDate), <br />
          des notes (notes), l'identifiant du fournisseur (supplierId), <br />
          le statut de la commande (status - un enum : PENDING, ORDERED, SHIPPED, RECEIVED, COMPLETED, CANCELLED) et <br />
          le montant total (totalAmount).</p>
          <p>ProcurementItem (Élément de commande d'approvisionnement) : <br />
             Détaille chaque article commandé auprès d'un fournisseur, avec un identifiant unique (id), <br />
             l'identifiant de la commande d'approvisionnement (procurementId), l'identifiant du produit (itemId), <br />
             la quantité (quantity) et le prix au moment de la commande (price).</p>
          <p>Relations entre les tables :</p>
          <p>Un-à-plusieurs : Un magasin (Store) peut avoir plusieurs catégories (Category). <br />
          Une catégorie (Category) peut avoir plusieurs classes (Classe), <br />
          ainsi de suite. Un utilisateur (User) peut avoir plusieurs commandes (Order) et avis (Review). </p>
          <p>Une commande d'approvisionnement (Procurement) peut avoir plusieurs éléments (ProcurementItem). </p>
          <p>Un produit (Item) peut avoir plusieurs avis (Review) et éléments de commande d'approvisionnement (ProcurementItem).</p>
          <p>Plusieurs-à-un : Une catégorie (Category) appartient à un magasin (Store). Une classe (Classe) appartient à une catégorie (Category). Une commande (Order) appartient à un utilisateur (User). Un avis (Review) appartient à un utilisateur (User) et à un produit (Item). Un élément de commande d'approvisionnement (ProcurementItem) appartient à une commande d'approvisionnement (Procurement) et à un produit (Item).</p>
          <p>Un-à-un : Une commande (Order) est liée à une transaction (Transaction). <br />
          Un utilisateur (User) possède une carte de fidélité (LoyaltyCard).</p>
        </section>
      </div>   
    </div>   
  </div>
  )
}

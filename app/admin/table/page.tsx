//@/app/admin/table/page.tsx
import React from "react";

function page() {
  return (
    <div className="m-3">
      <h1>Gestion ddes Tables</h1>
      <div>
        <div className="border-2 m-3 p-2">
          <pre>
            model User id Int @id @default(autoincrement()) <br />
            pseudo String? @db.VarChar(255) <br />
            email String @unique @db.VarChar(255) <br />
            password String @db.VarChar(255) <br />
            role Role @default(USER) <br />
            createdAt DateTime @default(now()) <br />
            updatedAt DateTime @updatedAt <br />
            orders Order[] <br />
            cartItems CartItem[] <br />
            loyaltyCard LoyaltyCard? <br />
            reviews Review[] <br />
            Procurement Procurement[] <br />
            Wishlist Wishlist[] <br />
            Notification Notification[] <br />
           <br /> 
            enum <br />
            Role USER SELLER ADMIN
          </pre>
        </div>

        <div className="border-2 m-3 p-2">
          <pre>
            /// 🔹 Table des magasins model br
            Store id String @id @default(uuid()) <br />
            title String <br />
            categories Category[] <br />
            items Item[]
          </pre>
        </div>
        <div className="border-2 m-3 p-2">
          <pre>
            /// 🔹 Table des catégories br
            model Category <br />
            id String @id @default(uuid()) <br />
            storeId String <br />
            title String <br />
            description String?br
            store Store @relation(fields: [storeId], references: [id]) <br />
            classes Classe[] <br />
            items Item[]
          </pre>
        </div>
        <div className="border-2 m-3 p-2">
          <pre>
            /// 🔹 Table des classes <br/>
            model Classe <br />
            id String @id @default(uuid()) <br />
            categoryId String <br />
            title String <br />
            category Category @relation(fields:[categoryId], references: [id]) <br />
            subClasses SubClasse[] <br />
            items Item[]
          </pre>
        </div>
        <div className="border-2 m-3 p-2">
          <pre>
            /// 🔹 Table des sous-classes <br/>
            model SubClasse <br />
            id String @id @default(uuid()) <br />
            classeId String <br />
            title String <br />
            classe Classe @relation(fields: [classeId], references: [id]) <br />
            items Item[]
          </pre>
        </div>
        <div className="border-2 m-3 p-2">
          <pre>
            /// 🔹 Table des articles (Item) <br/>
            model Item <br />
            id String @id @default(uuid()) <br />
            storeId String  <br />
            categoryId String <br />
            classeId String? <br />
            subClasseId String? <br />
            title String <br />
            Tag Tag[]
            slug String @unique <br />
            summary String? <br />
            description String <br />
            brand String? <br />
            price Float <br />
            taxId Float <br />
            oldPrice Float?<br />
            discount Int? <br />
            currency String <br />
            stockQuantity Int <br />
            isAvailable Boolean <br />
            dimensions Json? <br />
            weight Float? <br />
            colors String[] <br />
            sizes String[] <br />
            Images ImgItem[] <br />
            rating Float? <br />
            saleStartDate DateTime? <br />
            saleEndDate DateTime? <br />
            usageInstructions String? <br />
            specifications String <br />
            Review Review[] <br />
            ProcurementItem ProcurementItem[] <br />
            metaTitle String? <br />
            metaDescription String? <br />
            store Store @relation(fields: [storeId], references: [id]) <br />
            category Category @relation(fields: [categoryId], references: [id]) <br />
            classe Classe? @relation(fields: [classeId], references: [id]) <br />
            subClasse SubClasse? @relation(fields: [subClasseId], references: [id]) <br />
            Wishlist Wishlist[] Tax Tax[] @relation("ItemTax")
          </pre>
        </div>
        <div className="border-2 m-3 p-2">
          <pre>
            model Tax id String @id @default(uuid()) country String rate Float
            items Item[] @relation("ItemTax") // Relation One-to-many avec Item
            (optionnel)
          </pre>
        </div>
        <div className="border-2 m-3 p-2">
          <pre>
            model Tag id String @id @default(uuid()) name String items Item[]
          </pre>
        </div>
        <div className="border-2 m-3 p-2">
          <pre>
            model ImgItem id String @id @default(uuid()) pathImg String
            imgStatus ImageStatus itemId String item Item @relation(fields:
            [itemId], references: [id]) // Relation Many-to-one avec Item enum
            ImageStatus MAIN ADD
          </pre>
        </div>
        <div className="border-2 m-3 p-2">
          <pre>
            /// 🔹 Table des SKU (Stock Keeping Unit) model SKU id String @id
            @default(uuid()) itemId String isInStock Boolean createdAt DateTime
            @default(now()) saledDate DateTime skuState SkuState cartItems
            CartItem[] orderItems OrderItem[] enum SkuState avaible ordering
          </pre>
        </div>
        <div className="border-2 m-3 p-2">
          <pre>
            /// 🔹 Table des avis (Reviews) model Review id String @id
            @default(uuid()) userId Int itemId String rating Float comment
            String? createdAt DateTime @default(now()) user User
            @relation(fields: [userId], references: [id]) item Item
            @relation(fields: [itemId], references: [id])
          </pre>
        </div>
        <div className="border-2 m-3 p-2">
          <pre>
            /// 🔹 Table du panier (Cart) model CartItem id String @id
            @default(uuid()) userId Int skuId String quantity Int @default(1)
            user User @relation(fields: [userId], references: [id]) sku SKU
            @relation(fields: [skuId], references: [id])
          </pre>
        </div>
        <div className="border-2 m-3 p-2">
          <pre>
            /// 🔹 Table des commandes (Order) model Order id String @id
            @default(uuid()) userId Int totalPrice Float status OrderStatus
            @default(PENDING) createdAt DateTime @default(now()) user User
            @relation(fields: [userId], references: [id]) orderItems OrderItem[]
            payment Payment trackingNumber String? trackingUrl String? Client
            Client[] OrderHistory OrderHistory[] Return Return[] ShippingMethod
            ShippingMethod[] enum Payment SUCCES PENDING FAILED
          </pre>
        </div>
        <div className="border-2 m-3 p-2">
          <pre>
            /// 🔹 Table des éléments de commande (OrderItem) model OrderItem id
            String @id @default(uuid()) orderId String skuId String quantity Int
            price Float order Order @relation(fields: [orderId], references:
            [id]) sku SKU @relation(fields: [skuId], references: [id]) enum
            OrderStatus PENDING PAID SHIPPED DELIVERED CANCELED
          </pre>
        </div>
        <div className="border-2 m-3 p-2">
          <pre>
            model ShippingMethod id String @id @default(uuid()) name String cost
            Float estimatedDeliveryDays Int orders Order[]
          </pre>
        </div>
        <div className="border-2 m-3 p-2">
          <pre>
            /// 🔹 Table des paiements (Transaction) model Transaction id String
            @id @default(uuid()) orderId String @unique // Relation one-to-one
            avec Order amount Float status PaymentStatus @default(PENDING)
            createdAt DateTime @default(now()) enum PaymentStatus PENDING
            COMPLETED FAILED
          </pre>
        </div>
        <div className="border-2 m-3 p-2">
          <pre>
            model OrderHistory id String @id @default(uuid()) orderId String
            status OrderStatus updatedAt DateTime @default(now()) order Order
            @relation(fields: [orderId], references: [id])
          </pre>
        </div>
        <div className="border-2 m-3 p-2">
          <pre>
            model Client id String @id @default(uuid()) userId Int? // Permettre
            aux utilisateurs de ne pas avoir d'ID externe firstName String
            lastName String birthDay DateTime? // La date de naissance peut être
            optionnelle gender Gender? // Le genre peut être optionnel
            billingaddresses BillinAddress[] // Relation One-to-many avec
            Address shippingAddress ShippingAddress[] // Relation One-to-many
            avec Address orders Order[] // Relation One-to-many avec Order
            Paymentcard Paymentcard[] enum Gender Male Female NonBinary
            PreferNotToSay Other // Ajouter une option "Autre" pour plus de
            flexibilité
          </pre>
        </div>
        <div className="border-2 m-3 p-2">
          <pre>
            model BillinAddress id String @id @default(uuid()) // Utiliser UUID
            pour les IDs clientId String Address Address[] client Client
            @relation(fields: [clientId], references: [id]) // Relation
            Many-to-one avec Client
          </pre>
        </div>
        <div className="border-2 m-3 p-2">
          <pre>
            model ShippingAddress id String @id @default(uuid()) // Utiliser
            UUID pour les IDs clientId String address Address[] client Client
            @relation(fields: [clientId], references: [id]) // Relation
            Many-to-one avec Client
          </pre>
        </div>
        <div className="border-2 m-3 p-2">
          <pre>
            model Address id String @id @default(uuid()) // Utiliser UUID pour
            les IDs clientId String street String city String zipCode String
            country String isDefault Boolean @default(false) ShippingAddress
            ShippingAddress[] BillinAddress BillinAddress[]
          </pre>
        </div>
        <div className="border-2 m-3 p-2">
          <pre>
            model Paymentcard id String @id @default(uuid()) clientId String
            type PaymentType // Type de paiement (Carte, PayPal, etc.) provider
            String // Nom du fournisseur (Visa, MasterCard, PayPal...) last4
            String // 4 derniers chiffres de la carte expMonth Int? // Mois
            d'expiration (optionnel) expYear Int? // Année d'expiration
            (optionnel) isDefault Boolean @default(false) // Moyen de paiement
            par défaut createdAt DateTime @default(now()) client Client
            @relation(fields: [clientId], references: [id]) enum PaymentType
            CREDIT_CARD DEBIT_CARD PAYPAL BANK_TRANSFER CRYPTO OTHER
          </pre>
        </div>
        <div className="border-2 m-3 p-2">
          <pre>
            /// 🔹 Table de fidélité (LoyaltyCard) model LoyaltyCard id String
            @id @default(uuid()) userId Int @unique points Int @default(0) exp
            Int @default(0) createdAt DateTime @default(now()) user User
            @relation(fields: [userId], references: [id])
          </pre>
        </div>
        <div className="border-2 m-3 p-2">
          <pre>
            /// 🔹 Table des fournisseurs (Supplier) model Supplier id String
            @id @default(uuid()) name String procurement Procurement[]
          </pre>
        </div>
        <div className="border-2 m-3 p-2">
          <pre>
            /// 🔹 Table des commandes d'approvisionnement (Procurement) model
            Procurement id String @id @default(uuid()) userId Int shippedDate
            DateTime? receivedDate DateTime? notes String? supplierId String
            items ProcurementItem[] status ProcurementStatus @default(PENDING)
            totalAmount Float? // Total amount of the procurement user User
            @relation(fields: [userId], references: [id]) supplier Supplier
            @relation(fields: [supplierId], references: [id]) enum
            ProcurementStatus PENDING ORDERED SHIPPED RECEIVED COMPLETED
            CANCELLED
          </pre>
        </div>
        <div className="border-2 m-3 p-2">
          <pre>
            /// 🔹 Table des éléments de commande d'approvisionnement
            (ProcurementItem) model ProcurementItem id String @id
            @default(uuid()) itemId String procurement Procurement
            @relation(fields: [procurementId], references: [id]) procurementId
            String quantity Int price Float // Price per unit at the time of
            procurement item Item @relation(fields: [itemId], references: [id])
            // The missing relation!
          </pre>
        </div>
        <div className="border-2 m-3 p-2">
          <pre>
            model Wishlist <br />
            id String @id @default(uuid()) <br />
            userId Int <br />
            itemId String <br />
            createdAt DateTime @default(now()) <br />
            user User @relation(fields: [userId], references: [id]) <br />
            item Item @relation(fields: [itemId], references: [id])
          </pre>
        </div>
        <div className="border-2 m-3 p-2">
          <pre>
            model Coupon <br />
            id String @id @default(uuid()) <br />
            code String @unique <br />
            discount Float <br />
            expiryDate DateTime <br />
            isActive Boolean @default(true)
          </pre>
        </div>

        <div className="border-2 m-3 p-2">
          <pre>
            model Return <br />
            id String @id @default(uuid()) <br />
            orderId String <br />
            reason String <br />
            status ReturnStatus @default(PENDING) <br />
            createdAt DateTimeb @default(now()) <br />
            order Order @relation(fields: [orderId], references:
            [id]) <br />
            enum ReturnStatus <br />
            PENDING <br />
             APPROVED <br />
             REJECTED <br />
             COMPLETED
          </pre>
        </div>

        <div className="border-2 m-3 p-2">
          <pre>
            model Notification <br />
            id String @id @default(uuid()) userId Int message <br />
            String read Boolean @default(false) <br />
            createdAt DateTime @default(now()) <br />
            user User @relation(fields: [userId], references:[id])
          </pre>
        </div>
      </div>
    </div>
  );
}

export default page;

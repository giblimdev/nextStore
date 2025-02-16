import React from 'react'
import Image from 'next/image'
export default function Footer() {
  return (
    


      <div>
        <Image
                  src="/Capture d’écran 2025-02-12 210227.png" // Remplacez par le chemin de votre image
                  alt="Header Image" // Texte alternatif pour l'accessibilité
                  width={1200}
                  height={400}
                  />
        </div>
/*layout="fill" // L'image prendra toute la place du conteneur
                  objectFit="cover" // L'image couvrira toute la zone sans déformation
                 */

   

  )
}

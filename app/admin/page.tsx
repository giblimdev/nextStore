import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
    <h1>AdminPage</h1>
    <div><Link rel="stylesheet" href="item">Gestion des Articles</Link></div>
    <div><Link rel="stylesheet" href="commande">Gestion des Commandes</Link></div>
    </div>
  )
}

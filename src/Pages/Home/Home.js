import React from 'react'
import './Home.css'
import imgHomeShop from './shopimg.jpg'

export default function Home() {
  return (
    <div className='global-container'>
      <h1 className="home-title">
        Bienvenue au <span>Shop</span>
      </h1>
      <p>Un projet de boutique E-commerce construit à partir de la librairie React dans sa dernière version.</p>
      <p>Celui-ci montre la gestion des produits, l'ajout au panier de manière dynamique et des modifications de quantité du panier.</p>
      <img src={imgHomeShop} alt="accueil shop" />
    </div>
  )
}

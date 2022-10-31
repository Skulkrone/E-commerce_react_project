import React from 'react'
import './Home.css'
import imgHomeShop from './shopimg.jpg'

export default function Home() {
  return (
    <div className='global-container'>
      <h1 className="home-title">
        Bienvenue au <span>Shop</span>
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis sit tempore mollitia distinctio? Reprehenderit atque aspernatur accusantium nobis ea voluptatibus illo vero, nam iste, natus dicta quis nulla! Dolor, nobis.</p>
      <img src={imgHomeShop} alt="accueil shop" />
    </div>
  )
}

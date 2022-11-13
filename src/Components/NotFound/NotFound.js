import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {

  const navigate = useNavigate();

  // console.log(navigate);

  const goHome = () => navigate("/");

  return (
    <div className='global-container'>
      <h1 className="home-title">Oops, cette page n'existe pas !!!</h1>
      <button onClick={goHome} className="btn-outline">Retour à l'accueil</button>
    </div>
  )
}

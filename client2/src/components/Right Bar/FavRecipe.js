import React from 'react'

export default function FavRecipe(props) {
  return (
    <div className='fav-recipe'>
      <img src={props.image} />
      <h6>{props.recipeName}</h6>
      {/* <button onClick={toggleModal}>See Recipe</button> */}
    </div>
  )
}

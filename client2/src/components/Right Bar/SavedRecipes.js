import React, { useState, useContext } from 'react'
import { MasterContext } from '../../context/masterProvider';
import axios from 'axios'
import FavRecipe from './FavRecipe'

export default function SavedRecipes() {
  const [recipes, setRecipes] = useState([])
  const { user } = useContext(MasterContext)

  const userAxios = axios.create()
  userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
  })

  function getRecipes() {
    userAxios.get(`/api/recipes/user/${user._id}`)
      .then(res => (
        setRecipes(prev => ({
          ...prev,
          recipes: res.data
        }))
      ))
      .catch(err => console.log(err.errMsg))
  }
  return (
    <div>
      {console.log(recipes.recipes)}
      <button onClick={getRecipes}>Saved Recipes</button>
      {recipes.recipes ? 
      recipes.recipes.map(x => <FavRecipe 
        key={x._id}
        instructions={x.instructions}
        image={x.image}
        ingredients={x.ingredients}
        readyInMinutes={x.readyInMinutes}
        recipeName={x.recipeName}
        weightWatcherSmartPoints={x.weightWatcherSmartPoints}
        servings={x.servings}
      />)
      : ""}
    </div>
  )
}
import React, { useContext } from 'react'
import { SearchContext } from '../context/searchProvider'
import NameRecipes from './NameRecipes'

export default function RecipeList(props) {
  const { nameSearchRecipes } = useContext(SearchContext)
  // const [joke, setJoke] = useState("")

  // async function getJoke() {
  //   var axios = require("axios").default;

  //   var options = {
  //     method: 'GET',
  //     url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/jokes/random',
  //     headers: {
  //       'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
  //       'x-rapidapi-key': 'f1165055a3msh7132362fd8d5c00p1db19djsn65002ad70538'
  //     }
  //   };

  //   await axios.request(options).then(function (response) {
  //     setJoke(prev => ({
  //       ...prev,
  //       joke: response.data.text
  //     }))
  //   }).catch(function (error) {
  //     console.error(error);
  //   });
  // }

  // useEffect(async () => await getJoke(), [])

  return (
    <div>


      {nameSearchRecipes ? <NameRecipes /> : ""}
    </div>
  )
}
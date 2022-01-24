import React, { useState } from 'react'
import axios from 'axios'
export const SearchContext = React.createContext()

export default function SearchProvider(props) {
  const initState = {
    recipeName: "",
    nameSearchRecipes: [],
    ingredients: "",
    ingRecipes: [],
    diet: ""
  }

  const [searchState, setSearchState] = useState(initState)

  function handleStateChange(e) {
    const { name, value } = e.target
    setSearchState(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleNameSubmit(e) {
    e.preventDefault()
    if (searchState.diet) {
      axios.get(`/searchByName/${searchState.recipeName}/${searchState.diet}`)
        .then(res => {
          setSearchState(prevInputs => ({
            ...prevInputs,
            ingredients: "",
            ingRecipes: [],
            nameSearchRecipes: res.data.results,
            diet: ""
          }))
        })
        .then(res => {
          setSearchState(prevInputs => ({
            ...prevInputs,
            recipeName: ""
          }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    } else {
      axios.get(`/searchByName/${searchState.recipeName}`)
        .then(res => {
          setSearchState(prevInputs => ({
            ...prevInputs,
            ingredients: "",
            ingRecipes: [],
            nameSearchRecipes: res.data.results,
            diet: ""
          }))
        })
        .then(res => {
          setSearchState(prevInputs => ({
            ...prevInputs,
            recipeName: ""
          }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }
    axios.get(`/searchByName/${searchState.recipeName}/${searchState.diet}`)
      .then(res => {
        setSearchState(prevInputs => ({
          ...prevInputs,
          ingredients: "",
          ingRecipes: [],
          nameSearchRecipes: res.data.results,
          diet: ""
        }))
      })
      .then(res => {
        setSearchState(prevInputs => ({
          ...prevInputs,
          recipeName: ""
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  function handleIngredientSubmit(e) {
    e.preventDefault()
    axios.get(`/ingSearch/${searchState.ingredients}`)
      .then(res => {
        setSearchState(prevInputs => ({
          ...prevInputs,
          recipeName: "",
          nameSearchRecipes: [],
          ingRecipes: res.data
        }))
      })
      .then(res => {
        setSearchState(prevInputs => ({
          ...prevInputs,
          ingredients: ""
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  function resetSearchState() {
    setSearchState(prevInputs => ({
      initState
    }))
  }

  return (
    <SearchContext.Provider value={{ ...searchState, handleStateChange, handleNameSubmit,resetSearchState, handleIngredientSubmit }}>
      {props.children}
    </SearchContext.Provider>
  )

}
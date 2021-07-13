import React, {useState} from 'react'
import './App.css';
import axios from 'axios'
import Recipe from './components/recipe'

export default function App() {
  const initInputs = { ingredients: '', toggleDisplay: false, recipes: []}
  const [inputs, setInputs] = useState(initInputs)

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSubmit(e){
    e.preventDefault()
    var options = {
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients',
      params: {
        ingredients: inputs.ingredients.map(ing => ing),
        number: '5',
        ignorePantry: 'true',
        ranking: '1'
      },
      headers: {
        'x-rapidapi-key': 'f1165055a3msh7132362fd8d5c00p1db19djsn65002ad70538',
        'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
      }
    }
    axios.request(options)
    .then(res => setInputs(prevInputs => ({
      ...prevInputs,
      recipes: res.data
    })))
    .then(setInputs(prevInputs => ({
      ...prevInputs,
      toggleDisplay: !inputs.toggleDisplay
    })))
    .catch(err => console.log(err.response.data.errMsg))
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name='ingredients' value={inputs.ingredients} type='text' placeholder='Enter Ingredients'/>
        <button>Submit</button>
      </form>
      {inputs.toggleDisplay ? inputs.recipes.map(rec => <Recipe {...rec} />) : ''}
    </div>
  );
}
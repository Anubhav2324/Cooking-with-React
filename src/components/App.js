import React, { useState, useEffect } from "react";
import RecipeList from './RecipeList'
import '../css/app.css'
import { v4 as uuidv4 } from 'uuid'
import RecipeEdit from "./RecipeEdit";

export const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes'

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState()
  const [recipes, setRecipes] = useState(sampleRecipes)
  const selectedRecipe = recipes.find(recipe => recipe.id ===selectedRecipeId)

  useEffect(()=>{
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if(recipeJSON!= null) setRecipes(JSON.parse(recipeJSON))
  },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  },[recipes])

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange
  }

  function handleRecipeSelect(id) {
    setSelectedRecipeId(id)
  }

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: '',
      servings: 1,
      cookTime: '',
      instructions: '',
      ingredients: [
        {id: uuidv4(), name: '', amount: ''}
      ]
    }

    setSelectedRecipeId(newRecipe.id)
    setRecipes([...recipes, newRecipe])
  }

  function handleRecipeChange(id, recipe) {
    const newRecipes = [...recipes]
    const index = newRecipes.findIndex(r=>r.id === id)
    newRecipes[index] = recipe
    setRecipes(newRecipes)
  }

  function handleRecipeDelete(id) {
    if(selectedRecipeId !== null && selectedRecipeId === id) {
      setSelectedRecipeId(undefined)
    }
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  return (
      <RecipeContext.Provider value={recipeContextValue}>
        <RecipeList recipes={recipes} />
        {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
      </RecipeContext.Provider>
  )

}



const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 2,
    cookTime: '1:45',
    instructions: '1. Put salt on chicken\n2. Put chicken in oven\n3. Eat',
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 kg'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 tbsp'
      }
    ]
  },
  {
    id: 2,
    name: 'Plain Mutton',
    servings: 5,
    cookTime: '2:45',
    instructions: '1. Put paprika on mutton\n2. Put mutton in oven\n3. Eat',
    ingredients: [
      {
        id: 1,
        name: 'Mutton',
        amount: '1 kg'
      },
      {
        id: 2,
        name: 'Paprika',
        amount: '2 tbsp'
      }
    ]
  }
]


export default App;

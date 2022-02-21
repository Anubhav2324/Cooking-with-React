import React from "react";
import RecipeList from './RecipeList'
import '../css/app.css'

function App() {
  return (
      <RecipeList recipes={sampleRecipes} />
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

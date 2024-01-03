import './Recipelist.css'
import { Link } from 'react-router-dom'

export default function Recipelist({recipes}) {

  if(recipes.length === 0){
    return <div className='error'>No recipes to show</div>
}

  return (
    <div className='recipe-list'>
      {recipes.map(recipe =>(
      <div key={recipe.id} className='card'>
        <h3>{recipe.title}</h3>
        <p>{recipe.cookingTime} to cook</p>
        <div>{recipe.method.substring(0,100)}...</div>
        <Link to={`/recipes/${recipe.id}`}>Cook this</Link>
      </div>
      ))}
    </div>
);
}
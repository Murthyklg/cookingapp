import './Create.css'
import React, { useEffect } from 'react';
import { useNavigate} from 'react-router-dom'
import { useState , useRef} from 'react';
import { useFetch } from '../../hooks/useFetch';


export default function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewingredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const ingredientInput = useRef(null)
  const navigate = useNavigate();
  const {postData, data, error} = useFetch( ' http://localhost:3000/recipes', 'POST')



const handleSubmit = (e) => {
    e.preventDefault()
    postData({title, ingredients, method, cookingTime:cookingTime + ' minutes'})
}
 
const handleAdd = (e)=>{
  e.preventDefault();
  const ing = newIngredient.trim();

  if(ing&&!ingredients.includes(ing)){
    setIngredients(prevIngredients => [...prevIngredients, ing])
  }
  setNewingredient('')
  ingredientInput.current.focus()
}


//redirect user when we get date response
useEffect(()=>{
  if (data) {
    navigate('/');
  }
}, [data]);


  return (
    <div className='create'>
      <h2 className='title'>Add a new Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title:</span>
          <input 
          type='text' 
          onChange={(e)=>setTitle(e.target.value)}
          value={title}
          required
          />
        </label>
        <label>
          <span>Recipe Inredients:</span>
          <input 
          type='text'
          onChange={(e)=>setNewingredient(e.target.value)}
          value={newIngredient}
          ref={ingredientInput}
          />
          <button className='btn' onClick={handleAdd}>Add</button>
        </label>
  <p>Current ingredients: {ingredients.map(i=><em key={i}>{i}, </em>)}</p>

        <label >
          <span>Recipe method:</span>
          <textarea
          onChange={(e)=>setMethod(e.target.value)}
          value={method}
          required
          />
        </label>
        <label>
          <span>Cooking time in minutes</span>
          <input type='number' 
          onChange={(e)=>setCookingTime(e.target.value)}
          value={cookingTime}
          required/>
        </label>
        <button className='btn'>Submit</button>
     
      </form>
    </div>
  );
}

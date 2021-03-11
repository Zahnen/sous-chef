import React, { useState } from 'react';
import PropTypes from "prop-types";
import EditRecipeForm from './EditRecipeForm';

function Recipe(props){
const {recipe} = props;
const [editing, setEditting] = useState(false);

if (editing === false) {
  return (
    <>
      <div className="container" style={{marginBottom: '5%'}}>
        <h1 style={{fontWeight: "bold"}} >{recipe.title}</h1>
        <p>{recipe.notes}</p>
        <h2>{recipe.author}</h2>
        {recipe.source != null ? <a style={{marginTop: '20px', marginRight: '20px'}}className="btn btn-outline-dark" href={recipe.source} target="_blank" rel="noopener noreferrer">Source</a> : null}
        <button style={{marginTop: '20px', marginRight: '20px'}} className="btn btn-outline-dark" onClick={() => setEditting(true)}>Edit Recipe</button>
        <button style={{marginTop: '20px', marginRight: '20px'}} className="btn btn-outline-dark">Version History</button>
        <hr/>
        <img src={recipe.imgURL} width="70%" alt="Food" className="d-block mx-auto img-fluid w-70" style={{ justifyContent: 'center', alignSelf: 'center' }}/>
        <br/>
        <h3 style={{fontWeight: "bold"}}>Ingredients</h3>
        <ul>{recipe.ingredients.map((item, index) => <li key={index}>{item}</li>)}</ul>
        <h3 style={{fontWeight: "bold"}}>Instructions</h3>
        <ul>{recipe.instructions.map((item, index) => <li key={index}>{item}</li>)}</ul>
      </div>
    </>
  )

} else
return (
  <>
  <EditRecipeForm recipe={props.recipe}/>
  </>
)
}

Recipe.propTypes = {
  recipe: PropTypes.object
};

export default Recipe;
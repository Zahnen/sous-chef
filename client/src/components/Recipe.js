import React from 'react';
import PropTypes from "prop-types";

function Recipe(props){
const {recipe} = props;
  return (
    <>
      <h1>{recipe.title}</h1>
      <h2>{recipe.author}</h2>
      <div className="row">
        <div className="col-4">
          <img src={recipe.imgURL} width="100%" alt="Food"></img>
        </div>
        <div className="col-4">
        <ul>{recipe.ingredients.map((item, index) => <li key={index}>{item}</li>)}</ul>
        </div>
        <div className="col-4">
        <ul>{recipe.instructions.map((item, index) => <li key={index}>{item}</li>)}</ul>
        </div>
      </div>
    </>
  )
}

Recipe.propTypes = {
  recipe: PropTypes.object
};

export default Recipe;

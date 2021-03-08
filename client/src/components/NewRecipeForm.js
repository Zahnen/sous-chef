import React from "react";
// import PropTypes from "prop-types";
// import { useFirestore } from 'react-redux-firebase';


function NewRecipeForm(props){
  // const firestore = useFirestore();
  // function addRecipeToFirestore(event) {
  //   event.preventDefault();
  //   props.onRecipeAdd();
  //   return firestore.collection('recipes').add(
  //     {
  //       title: event.target.title.value,
  //       author: event.target.author.value,
  //       ingredients: event.target.ingredients.value,
  //       instructions: event.target.instructions.value
  //     }
  //   );
  // }
  return (
    <>
      <div className="container" style={{width: '48rem'}}>
        <form>
          <div class="mb-3">
            <label for="title" className="form-label">Title</label>
            <input
              className="form-control"
              type="text"
              name="title"
              placeholder="Title" />
          </div>
          <div class="mb-3">
            <label for="author" className="form-label">Author</label>
            <input
              className="form-control"
              type="text"
              name="author"
              placeholder="Author" />
          </div>
          <div class="mb-3">
            <label for="ingredients" className="form-label">Ingredients</label>
            <textarea
              className="form-control"
              type="textarea"
              name="ingredients"
              placeholder="Ingredients (separate entries with commas)" />
          </div>
          <div class="mb-3">
            <label for="instructions" className="form-label">Instructions</label>
            <textarea
              className="form-control"
              type="textarea"
              name="instructions"
              placeholder="Instructions (separate entries with commas)" />
          </div>
          <div class="mb-3">
            <label for="image" class="form-label">Default file input example</label>
            <input class="form-control" type="file" name="image" />
          </div>
          {/* <Form.Label>Author</Form.Label>
            <Form.Label>Ingredients</Form.Label>
            <Form.Control
              type="text"
              name="ingredients"
              placeholder="Ingredients" />
            <Form.Label>Instructions</Form.Label>
            <Form.Control
              type="text"
              name="instructions"
              placeholder="Instructions" />
          <Button variant="success" type="submit">Add Recipe</Button> */}
        </form>
      </div>
    </>
  );
}

// NewRecipeForm.propTypes = {
//   onRecipeAdd: PropTypes.func,
//   formSubmissionHandler: PropTypes.func,
//   buttonText: PropTypes.string
// };

export default NewRecipeForm;
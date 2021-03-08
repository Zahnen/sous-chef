import React from "react";
import firebase from "firebase/app";

function Signin(){

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
      console.log("successfully signed up!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      console.log("Successfully signed in!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  return (
    <>
      <div className="container">
        <h1>Sign up</h1>
        <form style={{paddingBottom: '50px', width: '36rem'}} onSubmit={doSignUp}>
            <label>Email address</label>
            <input className="form-control" name="email" type="email" placeholder="Enter email" />
            <label>Password</label>
            <input className="form-control" name="password" type="password" placeholder="Password" />
            <button variant="success" type="submit">Submit</button>
        </form>
        <h1>Already have an account?</h1>
        <h1>Sign In</h1>
        {/* <Form style={{paddingBottom: '50px', width: '36rem'}} onSubmit={doSignIn}>
          <Form.Group controlId="formBasicSignInEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name='signinEmail' type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicSignInPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name='signinPassword' type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form> */}
      </div>
    </>
  );
}

export default Signin;
import React, { useState } from "react";
import firebase from "firebase/app";
import 'firebase/auth';


function Signin(){
  const auth = firebase.auth();
  const [signUp, setSignUp] = useState(false);

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

  if (signUp === false){
    return(
      <div className="container" style={{marginTop: '5%'}}>
        <form style={{paddingBottom: '50px', width: '36rem', margin: 'auto'}} onSubmit={doSignIn}>
          <h1>Sign In</h1>
          <label>Email address</label>
          <input className="form-control" name='signinEmail' type="email" placeholder="Enter email" />
          <label>Password</label>
          <input className="form-control" name='signinPassword' type="password" placeholder="Password" />
          <button style={{marginTop: '20px', marginRight: '20px'}} className="btn btn-success" type="submit">
            Submit
          </button>
          <button style={{marginTop: '20px'}} className="btn btn-success" onClick={() => setSignUp(true)}>
            Need an account?
          </button>
        </form>
      </div>
    )
  } else {
    return (
      <>
        <div className="container" style={{marginTop: '5%'}}>
          <form style={{paddingBottom: '50px', width: '36rem', margin: 'auto'}} onSubmit={doSignUp}>
          <h1>Sign up</h1>
              <label>Email address</label>
              <input className="form-control" name="email" type="email" placeholder="Enter email" />
              <label>Password</label>
              <input className="form-control" name="password" type="password" placeholder="Password" />
              <button style={{marginTop: '20px', marginRight: '20px'}} className="btn btn-success" type="submit">
                Submit
              </button>
              <button style={{marginTop: '20px'}} className="btn btn-success" onClick={() => setSignUp(false)}>
                Already have an account?
              </button>
          </form>
        </div>
      </>
    );
  }
}

export default Signin;
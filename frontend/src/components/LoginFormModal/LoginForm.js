import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginForm.css";


function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ email, password }))
      .catch((async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if the server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      }));
  };
  
  let hide = "password"
  // const swtichHidden = () => {
  //   hide = hide == "password" ? "text" : "password"
  // }

  return (
    <form id='login-form-modal' onSubmit={handleSubmit}>     
      <ul>
        <div className="entry-input-box">
          <div className="small-text">Email</div>
          <label>
          <input className="entryInput" type="text" value={email}
          onChange={(e) => setEmail(e.target.value)} required 
          placeholder="Email Address"/>
          </label>
        </div>
        <br/>
        <div className="entry-input-box">
          <div className="small-text">Password</div>
          <label>
          <input className="entryInput" type={hide} value={password}
          onChange={(e) => setPassword(e.target.value)} required 
          placeholder="Password"/>
          </label>

        </div>

        <br/>

        <ul className="form-errors">
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul> 

        {/* <input type="checkbox" onChange={swtichHidden} value={"Show password"} /> */}
        <br/>

      <button className="Login-button" type="submit">Log In</button>
      </ul>
    </form>
  );
}

export default LoginForm;
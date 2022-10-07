import React from "react";
import "./Login.css";
import { auth } from "./firebase.js";
import loginimg from "./login.svg";
import { useDispatch } from "react-redux";
import login from "./features/counter/userSlice.js";

export default function Login() {

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [pic, setPic] = React.useState("");
  const dispatch = useDispatch();

  function register(e) {
    e.preventDefault();
    if (!name) {
      return alert("Please enter a full name");
    }
    auth.createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user.updateProfile({
          displayName: name,
          photoURL: pic
        })
          .then(() => {
            dispatch(login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoUrl: pic
            }))
          })
      }).catch(error => alert(error));

  }

  function loginToApp(e) {
    e.preventDefault();
  }

  return (
    <div className="login">
      <img src={loginimg} alt="" />
      <form>
        <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Full Name" />
        <input value={pic} onChange={e => setPic(e.target.value)} type="text" placeholder="profile pic URL(optional)" />
        <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" />
        <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="password" />
        <button type="submit" onClick={loginToApp}>Sign In</button>
      </form>
      <p>Not a member?
        <span className="login_register" onClick={register}>Register Now</span>
      </p>
    </div>
  )
}
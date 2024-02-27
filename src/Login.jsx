import { useState } from "react";

export default function Login({ setName }) {
  const [localName, setLocalName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState("");

  function handleRegister(e) {
    e.preventDefault();

    if (!localName || !password || !confirmPassword) {
      setErrors("All fields are required!");
    } else if (password !== confirmPassword) {
      setErrors("Passwords do not match!");
    } else {
      document.querySelector(".login-form").style.display = "none";
      document.querySelector(".profile").style.display = "block"
      document.querySelector(".createrecipe").style.display = "flex";
      setName(localName);
      setErrors("");
    }
  }

  return (
    <>
      <form className="login-form" onSubmit={handleRegister}>
        <label>
          Name:
          <input
            type="text"
            value={localName}
            onChange={(e) => setLocalName(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        {errors && <p style={{ color: "red" }}>{errors}</p>}
        <button className="btn">Register</button>
      </form>
    </>
  );
}

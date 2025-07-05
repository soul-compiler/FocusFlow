import { useState, type FormEvent } from "react";
import handleInput from "../../lib/handleInput";
// import style from "./RegisterForm.module.css";

export default function RegisterForm() {
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const request = { name, lastName, email, password };
    const data = await fetch("http://localhost:3000/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    });
    console.log(await data.json());
  };

  return (
    <>
      <div className="form-div center">
        <p className="main-title">Register</p>
        <form action="submit" className="form" onSubmit={handleSubmit}>
          <div className="form-element">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              onChange={(e) => {
                handleInput(e, setName);
              }}
              value={name}
            />
          </div>
          <div className="form-element">
            <label htmlFor="lastName" className="form-label">
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              onChange={(e) => {
                handleInput(e, setLastName);
              }}
              value={lastName}
            />
          </div>
          <div className="form-element">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              onChange={(e) => {
                handleInput(e, setEmail);
              }}
              value={email}
            />
          </div>
          <div className="form-element">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => {
                handleInput(e, setPassword);
              }}
              value={password}
            />
          </div>
          <button type="submit" className="form-button">
            Register
          </button>
        </form>
      </div>
    </>
  );
}

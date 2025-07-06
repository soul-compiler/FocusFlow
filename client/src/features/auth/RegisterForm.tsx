import { useState, type FormEvent } from "react";
import handleInput from "../../lib/handleInput";
import { useNavigate } from "react-router";
import { register } from "../../api/auth";

export default function RegisterForm() {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [error, setError] = useState<string>("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const request = { name, lastName, email, password };
    const data = await register(request);
    if (data?._id) {
      setError("");
      navigate("/login");
    } else {
      setError("Error al crear el usuario");
    }
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
          {error != "" && <p>{error}</p>}
          <button type="submit" className="form-button">
            Register
          </button>
        </form>
      </div>
    </>
  );
}

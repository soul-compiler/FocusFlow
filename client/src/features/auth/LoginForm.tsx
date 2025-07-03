import { useState, type ChangeEvent, type FormEvent } from "react";
import styles from "./LoginForm.module.css";

async function callLogin(data: { email: string; password: string }) {
  const call = await fetch("http://localhost:3000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const responseData = await call.json();
  document.cookie = `jwtToken=${responseData.jwtToken}`;
  return responseData;
}

export function LoginForm() {
  // Setemos los estados que van a contener los valores del formulario
  // Esto para tener un form controlado
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // Función que se ejecuta la hacer submit
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    // Llamado al servicio
    event.preventDefault();
    console.log(await callLogin({ email, password }));
  };

  // Función que maneja el estado del email, onChange
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  // Función que maneja el estado del password, onChange
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  // HTML
  return (
    <div className={styles.main}>
      <p className="main-title">Login</p>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-element">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-element">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

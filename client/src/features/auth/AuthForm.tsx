import { useState, type ChangeEvent, type FormEvent } from "react";
import styles from "./AuthFrom.module.css";

async function callLogin(data: { email: string; password: string }) {
  console.log(JSON.stringify(data));
  const call = await fetch("http://localhost:3000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await call.json();
}

export function AuthForm() {
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
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

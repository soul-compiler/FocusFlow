import {
  useState,
  type ChangeEvent,
  type Dispatch,
  type FormEvent,
  type SetStateAction,
} from "react";
import style from "./RegisterForm.module.css";

export default function RegisterForm() {
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleInput = (
    event: ChangeEvent<HTMLInputElement>,
    setter: Dispatch<SetStateAction<string>>
  ) => {
    setter(event.target.value);
  };

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
      <div>
        <form action="submit" className={style.form} onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={(e) => {
              handleInput(e, setName);
            }}
            value={name}
          />
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            id="lastName"
            onChange={(e) => {
              handleInput(e, setLastName);
            }}
            value={lastName}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={(e) => {
              handleInput(e, setEmail);
            }}
            value={email}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => {
              handleInput(e, setPassword);
            }}
            value={password}
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
}

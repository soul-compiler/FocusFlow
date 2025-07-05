import handleInput from "../../lib/handleInput";
import { useState, type FormEvent } from "react";

export default function TaskForm() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [priority, setPriority] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = { title, description, priority };
    const data = await fetch("http://localhost:3000/tasks/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODYwNzhjODRmNzVjZmFjYjNmMmZlNzIiLCJlbWFpbCI6InNhbnRpYWdvbWMuZGV2QGdtYWlsLmNvbSIsImlhdCI6MTc1MTUxMDIzMywiZXhwIjoxNzUxNTEzODMzfQ.kqRj687QqMBJqFgX7BC1UcU7N8sIKjF0KRg2pQZSTiU",
      },
      body: JSON.stringify(body),
    });
    console.log(await data.json());
  };

  return (
    <div className="form-div">
      <p className="main-title">Create a Task</p>
      <form action="submit" className="form" onSubmit={handleSubmit}>
        <div className="form-element">
          <label htmlFor="" className="form-label">
            Title
          </label>
          <input
            type="text"
            onChange={(e) => handleInput(e, setTitle)}
            value={title}
          />
        </div>
        <div className="form-element">
          <label htmlFor="" className="form-label">
            Description
          </label>
          <input
            type="text"
            onChange={(e) => handleInput(e, setDescription)}
            value={description}
          />
        </div>
        <div className="form-element">
          <label htmlFor="" className="form-label">
            Priority
          </label>
          <input
            type="number"
            onChange={(e) => handleInput(e, setPriority)}
            value={priority}
          />
        </div>
        <button type="submit" className="form-button">
          Create
        </button>
      </form>
    </div>
  );
}

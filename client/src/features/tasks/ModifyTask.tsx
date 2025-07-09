import handleInput from "../../lib/handleInput";
import { useEffect, useState, type FormEvent } from "react";
import styles from "./TaskFormModal.module.css";
import type { Task } from "../../types/task";
import { modifyTask } from "../../api/task";
import { useNavigate } from "react-router";

export default function ModifyTask(props: { task: Task }) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [priority, setPriority] = useState<number>(-1);

  const { task } = props;
  const navigator = useNavigate();

  useEffect(() => {
    setTitle(task.title);
    setDescription(task.description);
    setPriority(task.priority);
  }, [task]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const modifiedFields = { title, description, priority };
    await modifyTask(task._id, modifiedFields);
    navigator("/");
  };

  return (
    <div className={styles.modal}>
      <div className="form-div">
        <div className={styles.closeWrapper}>
          <p className="main-title">Modify</p>
        </div>
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
            Modify
          </button>
        </form>
      </div>
    </div>
  );
}

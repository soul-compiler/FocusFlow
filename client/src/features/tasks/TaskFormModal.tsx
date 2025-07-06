import handleInput from "../../lib/handleInput";
import {
  useState,
  type Dispatch,
  type FormEvent,
  type SetStateAction,
} from "react";
import styles from "./TaskFormModal.module.css";
import { createTask } from "../../api/task";

export default function TaskFormModal(props: {
  isModalActive: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
}) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [priority, setPriority] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createTask({ title, description, priority });
  };

  return (
    <div
      className={`${styles.modalBackground} ${
        props.isModalActive ? styles.modalActive : styles.modalNotActive
      }`}
    >
      <div className={styles.modal}>
        <div className="form-div">
          <div className={styles.closeWrapper}>
            <p className="main-title">Create a Task</p>
            <button
              className={styles.closeButton}
              onClick={() => props.setModal(false)}
            >
              ⓧ
            </button>
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
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

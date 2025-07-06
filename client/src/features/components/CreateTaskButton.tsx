import { IoAddCircle } from "react-icons/io5";
import styles from "./CreateTaskButton.module.css";
import TaskFormModal from "../tasks/TaskFormModal";
import { useState } from "react";

export default function CreateTaskButton() {
  const [isModalActive, setIsModalActive] = useState<boolean>(false);

  const handleClick = () => {
    setIsModalActive((oldValue) => !oldValue);
  };
  return (
    <>
      <TaskFormModal
        isModalActive={isModalActive}
        setModal={setIsModalActive}
      />
      <IoAddCircle
        size={50}
        color="#007ad2"
        className={`${styles.bottomLeft} ${
          !isModalActive ? styles.buttonActive : styles.buttonNotActive
        }`}
        onClick={handleClick}
      />
    </>
  );
}

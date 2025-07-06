import { IoAddCircle } from "react-icons/io5";
import styles from "./CreateTaskButton.module.css";

export default function CreateTaskButton() {
  return (
    <>
      <IoAddCircle size={50} color="#007ad2" className={styles.bottomLeft} />
    </>
  );
}

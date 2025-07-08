import styles from "./TaskCard.module.css";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdModeEdit } from "react-icons/md";
import { deleteTask } from "../../api/task";
// import { useNavigate } from "react-router";

export default function TaskCard(props: {
  id: string;
  title: string;
  description: string;
  priority: number;
  fetchTask: () => void;
}) {
  // const navigator = useNavigate();
  const handleEreseClick = async () => {
    await deleteTask(props.id);
    props.fetchTask();
    // navigator("/");
  };
  return (
    <>
      <div className={`form-div ${styles.card}`}>
        <div className={styles.headerWrapper}>
          <MdModeEdit
            className={`${styles.headerElement} ${styles.headerElementModify}`}
          />
          <FaRegTrashCan
            className={`${styles.headerElement} ${styles.headerElementErase}`}
            onClick={handleEreseClick}
          />
        </div>
        <h1>{props.title}</h1>
        <p>Priority: {props.priority}</p>
        <p>{props.description}</p>
      </div>
    </>
  );
}

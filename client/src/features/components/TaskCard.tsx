import styles from "./TaskCard.module.css";

export default function TaskCard(props: {
  title: string;
  description: string;
  priority: number;
}) {
  return (
    <>
      <div className={`form-div ${styles.card}`}>
        <h1>{props.title}</h1>
        <p>Priority: {props.priority}</p>
        <p>{props.description}</p>
      </div>
    </>
  );
}

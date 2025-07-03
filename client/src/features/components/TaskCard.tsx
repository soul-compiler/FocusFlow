import styles from "./TaskCard.module.css";

export default function TaskCard(props: {
  title: string;
  description: string;
  priority: number;
}) {
  return (
    <>
      <div className={styles.card}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <p>Priority: {props.priority}</p>
      </div>
    </>
  );
}

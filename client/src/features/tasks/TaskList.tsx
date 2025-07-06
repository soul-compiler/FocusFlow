import getCookie from "../../lib/getCookie";
import TaskCard from "../components/TaskCard";
import { useEffect, useState } from "react";
import styles from "./TaskList.module.css";

export default function TaskList() {
  const [tasks, setTasks] = useState<
    Array<{
      _id: string;
      title: string;
      description: string;
      priority: number;
    }>
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const token = "Bearer " + getCookie("jwtToken");

  useEffect(() => {
    fetch("http://localhost:3000/tasks/", {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div className={`${styles.gridContianer}`}>
          {tasks.map((task) => {
            return (
              <TaskCard
                key={task._id}
                title={task.title}
                description={task.description}
                priority={task.priority}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

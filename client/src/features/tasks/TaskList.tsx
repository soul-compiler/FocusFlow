import { eraseCookies, getCookie } from "../../lib/getCookie";
import TaskCard from "../components/TaskCard";
import { useEffect, useState } from "react";
import styles from "./TaskList.module.css";
import { useNavigate } from "react-router";

export default function TaskList(props: { reloadTask: boolean }) {
  const navigator = useNavigate();
  const [tasks, setTasks] = useState<
    Array<{
      _id: string;
      title: string;
      description: string;
      priority: number;
    }>
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const jwt = getCookie("jwtToken");
  const token = "Bearer " + jwt;

  function fetchTask(): void {
    if (jwt == "" || !jwt) {
      navigator("/login");
    } else {
      fetch("http://localhost:3000/tasks/", {
        method: "GET",
        headers: {
          Authorization: token,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data?.message == "Unauthorized") {
            eraseCookies("jwtToken");
            navigator("/login");
          } else {
            setTasks(data);
            setIsLoading(false);
          }
        });
    }
  }

  useEffect(() => {
    fetchTask();
  }, [props.reloadTask]);

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
                id={task._id}
                title={task.title}
                description={task.description}
                priority={task.priority}
                fetchTask={fetchTask}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

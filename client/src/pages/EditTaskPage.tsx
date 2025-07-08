import { useParams } from "react-router";
import NavBar from "../features/components/NavBar";
import { useEffect, useState } from "react";
import { getOneTask } from "../api/task";
import type { Task } from "../types/task";

export default function EditTaskPage() {
  const { id } = useParams();
  const [task, setTask] = useState<Task>();

  useEffect(() => {
    if (id) {
      getOneTask(id).then((e) => setTask(e));
    }
  }, []);
  return (
    <>
      <NavBar isLogged={true} />
      {task?.title}
    </>
  );
}

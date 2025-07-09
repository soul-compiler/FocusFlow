import { useParams } from "react-router";
import NavBar from "../features/components/NavBar";
import { useEffect, useState } from "react";
import { getOneTask } from "../api/task";
import type { Task } from "../types/task";
import ModifyTask from "../features/tasks/ModifyTask";

type RequestParams = {
  id: string;
};

export default function EditTaskPage() {
  const { id } = useParams<RequestParams>();
  const [task, setTask] = useState<Task>();

  useEffect(() => {
    if (id) {
      getOneTask(id).then((e) => setTask(e));
    }
  }, [id]);
  return (
    <>
      <NavBar isLogged={true} />
      {task ? <ModifyTask task={task} /> : <h1>No se encontro la task</h1>}
    </>
  );
}

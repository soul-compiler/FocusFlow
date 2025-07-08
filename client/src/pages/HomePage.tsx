import { useNavigate } from "react-router";
import CreateTaskButton from "../features/components/CreateTaskButton";
import NavBar from "../features/components/NavBar";

import TaskList from "../features/tasks/TaskList";
import { getCookie } from "../lib/getCookie";
import { useEffect, useState } from "react";
export default function HomePage() {
  const [reloadTask, setRealoadTask] = useState<boolean>(false);
  const changeReloadTask = () => {
    setRealoadTask((reload) => !reload);
  };

  const navigator = useNavigate();
  const token = getCookie("jwtToken");
  useEffect(() => {
    if (token == "" || !token) {
      navigator("/login");
    }
  }, [token]);
  return (
    <>
      <NavBar isLogged={token ? true : false} />
      {token ? (
        <>
          <TaskList reloadTask={reloadTask} />
          <CreateTaskButton setReloadTask={changeReloadTask} />
        </>
      ) : (
        <h1>Please Login</h1>
      )}
    </>
  );
}

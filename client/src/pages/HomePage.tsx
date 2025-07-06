import { useNavigate } from "react-router";
import CreateTaskButton from "../features/components/CreateTaskButton";
import NavBar from "../features/components/NavBar";

import TaskList from "../features/tasks/TaskList";
import { getCookie } from "../lib/getCookie";
import { useEffect } from "react";
export default function HomePage() {
  const navigator = useNavigate();
  const token = getCookie("jwtToken");
  useEffect(() => {
    if (token == "" || !token) {
      navigator("/login");
    }
  }, []);
  return (
    <>
      <NavBar isLogged={token ? true : false} />
      {token ? (
        <>
          <TaskList />
          <CreateTaskButton />
        </>
      ) : (
        <h1>Please Login</h1>
      )}
    </>
  );
}

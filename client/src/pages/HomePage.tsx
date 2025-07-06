import CreateTaskButton from "../features/components/CreateTaskButton";
import NavBar from "../features/components/NavBar";

import TaskList from "../features/tasks/TaskList";
import { getCookie } from "../lib/getCookie";
export default function HomePage() {
  const token = getCookie("jwtToken");
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

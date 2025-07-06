import NavBar from "../features/components/NavBar";
import TaskForm from "../features/tasks/TaskForm";
import TaskList from "../features/tasks/TaskList";
import getCookie from "../lib/getCookie";
export default function HomePage() {
  const token = getCookie("jwtToken");

  return (
    <>
      <NavBar isLogged={token ? true : false} />
      <h1>Home Page</h1>
      {token ? (
        <>
          <TaskForm />
          <TaskList />
        </>
      ) : (
        <h1>Please Login</h1>
      )}
    </>
  );
}

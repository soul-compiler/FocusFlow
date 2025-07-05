import NavBar from "../features/components/NavBar";
import TaskForm from "../features/tasks/TaskForm";
import TaskList from "../features/tasks/TaskList";
export default function HomePage() {
  return (
    <>
      <NavBar />
      <h1>Home Page</h1>
      <TaskForm />
      <TaskList />
    </>
  );
}

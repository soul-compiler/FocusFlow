import TaskForm from "../features/tasks/TaskForm";
import TaskList from "../features/tasks/TaskList";
export default function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <TaskForm />
      <TaskList />
    </>
  );
}

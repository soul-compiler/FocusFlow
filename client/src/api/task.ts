import { getCookie } from "../lib/getCookie";
import type { ModifyTask } from "../types/task";

const createTask = (body: {
  title: string;
  description: string;
  priority: string;
}) => {
  const jwtToken = "Bearer " + getCookie("jwtToken");
  return fetch("http://localhost:3000/tasks/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: jwtToken,
    },
    body: JSON.stringify(body),
  });
};

const deleteTask = (taskId: string) => {
  const jwtToken = "Bearer " + getCookie("jwtToken");
  return fetch(`http://localhost:3000/tasks/${taskId}`, {
    method: "DELETE",
    headers: {
      Authorization: jwtToken,
    },
  });
};

const getOneTask = async (id: string) => {
  const jwtToken = "Bearer " + getCookie("jwtToken");
  const response = await fetch(`http://localhost:3000/tasks/${id}`, {
    method: "GET",
    headers: {
      Authorization: jwtToken,
    },
  });
  return await response.json();
};

const modifyTask = async (id: string, modifiedTask: ModifyTask) => {
  const jwtToken = "Bearer " + getCookie("jwtToken");
  const response = await fetch(`http://localhost:3000/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: jwtToken,
    },
    body: JSON.stringify(modifiedTask),
  });
  console.log(id);
  console.log(JSON.stringify(modifiedTask));
  return await response.json();
};

export { createTask, deleteTask, getOneTask, modifyTask };

import { getCookie } from "../lib/getCookie";

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

export { createTask };

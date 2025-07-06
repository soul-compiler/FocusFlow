async function login(data: { email: string; password: string }) {
  const call = await fetch("http://localhost:3000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const responseData = await call.json();
  document.cookie = `jwtToken=${responseData.jwtToken}`;
  return responseData;
}

async function register(request: {
  name: string;
  lastName: string;
  email: string;
  password: string;
}) {
  const data = fetch("http://localhost:3000/users/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(request),
  });

  return (await data).json();
}

export { login, register };

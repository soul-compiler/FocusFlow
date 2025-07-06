const getCookie = (name: string) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    const lastPart = parts.pop();
    if (lastPart) {
      return lastPart.split(";").shift();
    }
  }
  return null;
};

const setCookie = (key: string, value: string) => {
  document.cookie = `${key}=${value}; Path=/;`;
};

const eraseCookies = (key: string) => {
  document.cookie = `${key}=; Path=/;`;
};

export { getCookie, setCookie, eraseCookies };

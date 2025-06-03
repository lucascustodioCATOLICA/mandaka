const saveUserInfo = ({ name, phone, mesa, timestamp }) => {
  try {
    const body = { name, phone, mesa, timestamp };
    const bodySerialized = JSON.stringify(body);
    localStorage.setItem("user", bodySerialized);
    return true;
  } catch {
    return false;
  }
};

const getUserInfo = () => {
  const user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(user);
  }
  return null;
};

export const UserStorage = {
  saveUserInfo,
  getUserInfo,
};

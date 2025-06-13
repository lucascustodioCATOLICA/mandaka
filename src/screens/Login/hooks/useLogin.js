import { v4 as uuidv4 } from "uuid";

import { UserStorage } from "../../../infra/storage/user";

const USER_LOGGED_LIMIT_IN_MILLIS = 4 * 60 * 60 * 1000;

const useLogin = () => {
  const initUser = ({ name, phone, mesa, userId = uuidv4() }) => {
    const timestamp = Date.now();
    UserStorage.saveUserInfo({ userId, name, phone, mesa, timestamp });
  };

  const getUser = () => {
    return UserStorage.getUserInfo();
  };

  const getHasUserLogged = () => {
    const user = UserStorage.getUserInfo();
    if (!user) {
      return false;
    }

    const { timestamp } = user;
    const now = Date.now();
    const diff = now - timestamp;
    if (diff >= USER_LOGGED_LIMIT_IN_MILLIS) {
      return false;
    }
    return true;
  };

  return { initUser, getUser, getHasUserLogged };
};

export default useLogin;

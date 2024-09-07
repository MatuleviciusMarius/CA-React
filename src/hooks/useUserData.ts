import { useState } from "react";

export type User = {
  id: string;
  name: string;
  surname: string;
  email: string;
}

export const useUserData = () => {
  const [userInfo] = useState<User>(() =>
    JSON.parse(localStorage.getItem("user") || "{}")
  );

  return userInfo;
};
import { useEffect, useState } from "react";
import { setUser, deleteUser } from "../store/loginReducer";
import { useLocalStorage } from "./useLocalStorage";
import { IUser } from "../types/login";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../store/selector";

interface IUseLogin  {
  user: IUser | null;
  login: (user: IUser) => void;
 
}

export const useLogin = (): IUseLogin => {
  const { getItem, setItem } = useLocalStorage();
  const dispatch = useDispatch();
  const user = useSelector(getUserData);
  
 
  useEffect(() => {
    const storedUser = JSON.parse(getItem("user") || '[]');
    if (!storedUser) return;

    
    if (user.username !== storedUser.username) {
      dispatch(setUser({ user: storedUser }));
    }
  }, [dispatch, getItem, user]);

  const login = (user: IUser): void => {
    dispatch(setUser({ user }));
    setItem("user", JSON.stringify(user));
  };


  return { user, login };
};

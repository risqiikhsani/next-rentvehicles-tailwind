"use client";
import api from "@/lib/axios";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "sonner";
import CarLoader from "@/components/spinner/car-loader";
import Loader2 from "@/components/spinner/Loader2";
import CircleLoader from "@/components/spinner/circle-loader";
import { AccountType, FavoriteType, UserType } from "@/types/types";
import { useAuth } from "./Auth";



export interface IAppContext {
  fetchFavorites: () => void;
  favorites:FavoriteType[];
}

const AppCtxDefaultValue: IAppContext = {
  fetchFavorites: () => {},
  favorites:[],
};

export const AppCtx = createContext<IAppContext>(
  AppCtxDefaultValue
);

interface Props {
  children: ReactNode;
}

export function AppHandler({ children }: Props) {
  const [favorites,setFavorites] = useState(AppCtxDefaultValue.favorites);
  const {user} = useAuth()

  // const dispatch = useAppDispatch();
  const router = useRouter();

  const fetchFavorites = async (): Promise<boolean> => {
    try {
      // get user
      const response = await api.get(`api/favorites`);
      const data:FavoriteType[] = response.data;
      setFavorites(data);
      // Set user data

      return true;
    } catch (error) {
      toast.error("Error fetching favorite");
      console.error("Error:", error);
      return false;
    }
  };

  const fetchData = async () => {
    const fetchedFavorites = await fetchFavorites();

    if (fetchedFavorites ) {
      toast.success("Success fetching app")
    } else {
      toast.error("Error fetching app");
    }
    
  };

  useEffect(() => {
    if(user.ID != 0 ){
      fetchData()
    }
  }, []);

  const value = {
    favorites,
    fetchFavorites,
  };








  return (
    <>
      <AppCtx.Provider value={value}>
        {children}
      </AppCtx.Provider>
    </>
  );
}

export function useAppCtx() {
  return useContext(AppCtx);
}

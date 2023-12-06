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



export interface IAuthContext {
  handleLoginSuccess: (data: any) => void;
  logoutUser: () => void;
  user: UserType;
  account: AccountType;
  fetchData: () => void;
}

const authContextDefaultValues: IAuthContext = {
  handleLoginSuccess: (data: any) => {},
  logoutUser: () => {},
  fetchData: () => {},
  user: {
    ID: 0,
    CreatedAt: "",
    UpdatedAt: "",
    DeletedAt: null,
    publicUsername: "",
    name: "",
    about: "",
    gender: "",
    role: "",
    is_active: "", // Consider changing to boolean if it's a boolean value in your application
    AccountID: 0,
  },
  account: {
    ID: 0,
    CreatedAt: "",
    UpdatedAt: "",
    DeletedAt: null,
    username: "",
    email: "",
    email_verified: false,
    phone: "",
  }
};

export const AuthContext = createContext<IAuthContext>(
  authContextDefaultValues
);

interface Props {
  children: ReactNode;
}

export function AuthHandler({ children }: Props) {
  const [user, setUser] = useState(authContextDefaultValues.user);
  const [account, setAccount] = useState(authContextDefaultValues.account);
  const [loading, setLoading] = useState(true);


  // const dispatch = useAppDispatch();
  const router = useRouter();

  const fetchUserData = async (): Promise<boolean> => {
    try {
      // get user
      const response = await api.get("api/me/user");
      const data: UserType = response.data;
      setUser(data);
      // Set user data

      return true;
    } catch (error) {
      toast.error("Error fetching user data");
      console.error("Error:", error);
      return false;
    }
  };

  const fetchAccountData = async (): Promise<boolean> => {
    try {
      // get account
      const response = await api.get("api/me/account");
      const data: AccountType = response.data;
      setAccount(data);

      return true;
    } catch (error) {
      
      toast.error("Error fetching account data");
      console.error("Error:", error);
      return false;
    }
  };



  const logoutUser = () => {
    Cookies.remove("accesstoken");
    // delete api.defaults.headers.Authorization

    // Clear user data and set authenticated to false
    //   dispatch(clearUser());
    //   dispatch(clearUseraccount());
    setUser(authContextDefaultValues.user);
    setAccount(authContextDefaultValues.account);
    toast.success("Successfully Logout");
    return router.refresh();
  };






  const fetchData = async () => {
    setLoading(true);
    const userDataSuccess = await fetchUserData();
    const accountDataSuccess = await fetchAccountData();

    if (userDataSuccess && accountDataSuccess) {
      toast.success("Successfully fetched user data and account data");
      setLoading(false);
      return router.refresh()
    } else {
      toast.error("Error fetching user data / account data");
      // Check if the access token cookie exists before attempting to remove it
      const accessToken = Cookies.get("accesstoken");
      if (accessToken) {
        Cookies.remove("accesstoken");
        setLoading(false); // Move setLoading(false) before the return statement
        return router.push("/auth/login");
      } else {
        setLoading(false); // Set loading to false if there's no access token to remove
      }
    }
    
  };


  const handleLoginSuccess = async (data: any) => {
    if (data.token) {
      Cookies.set("accesstoken", data.token, { expires: 60 });
      // api.defaults.headers.Authorization = `Bearer ${data.token}`
    }

    await fetchData();
  };

  const value = {
    handleLoginSuccess,
    logoutUser,
    user,
    account,
    fetchData,
  };

  useEffect(() => {
    console.log(user);
    console.log(account);
    fetchData();
  }, []);







  return (
    <>
      <AuthContext.Provider value={value}>
        <div className="relative">
          {loading ? (
            <div className="absolute flex items-center justify-center w-full ">
              {/* Your CarLoader component */}
              <CircleLoader />
            </div>
          ) : children}

        </div>
      </AuthContext.Provider>
    </>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

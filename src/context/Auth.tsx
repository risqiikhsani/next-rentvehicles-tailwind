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
import { AccountType, UserType } from "@/types/types";



export interface IAuthContext {
  handleLoginSuccess: (data: any) => void;
  logoutUser: () => void;
  user: UserType;
  account: AccountType;
}

const authContextDefaultValues: IAuthContext = {
  handleLoginSuccess: (data: any) => {},
  logoutUser: () => {},
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
  },
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
  };

  useEffect(() => {
    console.log(user);
    console.log(account);
    fetchData();
  }, []);

  // this below code runs twice per fetch , so 4 fetch ?

  // const fetchData = async () => {
  //     setLoading(true); // Set loading to true when component mounts or updates
  //     try {
  //         const [userDataSuccess, accountDataSuccess] = await Promise.all([
  //             fetchUserData(),
  //             fetchAccountData(),
  //         ]);

  //         if (userDataSuccess && accountDataSuccess) {
  //             toast.success('Successfully fetching user data and user account data');
  //             // set user data
  //             // set user in context/redux
  //             return router.refresh()
  //         }
  //     } catch (error) {
  //         // Handle any errors that occurred during fetch
  //         toast.error('Error fetching user data or account data');
  //         console.error('Error fetching data:', error);
  //     } finally {
  //         setLoading(false); // Set loading to false regardless of success or error
  //     }
  // };

  // In your code, the fetchData function is called inside the handleLoginSuccess function. Also, you've initialized a call to fetchData inside the useEffect hook without any dependencies array, which means it runs once on the initial render.

  // The fetchData function, in turn, invokes both fetchUserData and fetchAccountData, leading to two fetch calls. Since both of these functions are asynchronous, they will not necessarily complete simultaneously. Therefore, the possibility of running twice might stem from these asynchronous calls.

  // One way to ensure that the fetching only happens once is to refactor the code to fetch user and account data in a sequence rather than concurrently. You can fetch account data only after the user data has been successfully fetched and set.

  const fetchData = async () => {
    setLoading(true);
    try {
      const userDataSuccess = await fetchUserData();
      const accountDataSuccess = await fetchAccountData();

      if (userDataSuccess && accountDataSuccess) {
        toast.success("Successfully fetched user data and account data");
        return router.refresh();
      }
    } catch (error) {
      toast.error("Error fetching user data or account data");
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  // const fetchData = async () => {
  //   setLoading(true);

  //   try {
  //     const userDataSuccess = await fetchUserData();

  //     if (userDataSuccess) {
  //       const accountDataSuccess = await fetchAccountData();
  //       if (accountDataSuccess) {
  //         toast.success("Successfully fetched user data and account data");
  //         // set user data
  //         // set user in context/redux
  //         return router.refresh();
  //       }
  //     }
  //   } catch (error) {
  //     toast.error("Error fetching user data or account data");
  //     console.error("Error fetching data:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };



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

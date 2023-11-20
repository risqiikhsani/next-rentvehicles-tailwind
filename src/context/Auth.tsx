"use client"
import api from "@/lib/axios";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie'


import {
    ReactNode,
    createContext,
    useContext,
    useEffect
} from "react";
import { toast } from "sonner";

export interface IAuthContext {
    handleLoginSuccess: (data:any) => void;
    logoutUser: () => void;
}

const authContextDefaultValues: IAuthContext = {
    handleLoginSuccess: (data:any) => { },
    logoutUser: () => { },
};

export const AuthContext = createContext<IAuthContext>(authContextDefaultValues);

export function useAuth() {
    return useContext(AuthContext);
}

interface Props {
    children: ReactNode;
}



export function AuthHandler({ children }: Props) {
    // const dispatch = useAppDispatch();  
    const router = useRouter()
    const fetchUserData = async (): Promise<boolean> => {
        try {
            // get user
            // const response = await my.get_user();
            // const data = response.data;

            // Set user data

            return true;
        } catch (error) {
            toast.error('Error fetching user data');
            console.error('Error:', error);
            return false;
        }
    };

    const fetchUserProfileData = async (): Promise<boolean> => {
        try {
            // get user
            // const response = await my.get_profile();
            // const data = response.data;

            // Set user data

            return true;
        } catch (error) {
            toast.error('Error fetching user profile data');
            console.error('Error:', error);
            return false;
        }
    };

    const logoutUser = () => {
        Cookies.remove('accesstoken')
        delete api.defaults.headers.Authorization

        // Clear user data and set authenticated to false
        //   dispatch(clearUser());
        //   dispatch(clearUserProfile());

        return router.refresh()

    };

 
    const handleLoginSuccess = async (data: any) => {
        if (data.token) {
            Cookies.set('accesstoken', data.token, { expires: 60 })
            api.defaults.headers.Authorization = `Bearer ${data.token}`
        }

        // Set cookies or perform any other login logic
        // ...

        try {
            // Fetch user data and user profile data simultaneously using Promise.all
            const [userDataSuccess, userProfileDataSuccess] = await Promise.all([
                fetchUserData(),
                fetchUserProfileData(),
            ]);

            // If both fetches are successful
            if (userDataSuccess && userProfileDataSuccess) {
                // set user in context/redux
                return router.refresh()
            } else {
                // Handle the case when either or both fetches failed
                // (e.g., show an error message or perform some other actions)
                toast.error('Error fetching user data or profile data');
                console.error('Error fetching user data or profile data');
            }
        } catch (error) {
            // Handle any errors that occurred during login or fetches
            toast.error('Error fetching user data or profile data');
            console.error('Error during login:', error);
            // You can also set an error state here to display an error message to the user
        }
    };

    const value = {
        handleLoginSuccess,
        logoutUser,
    };

    useEffect(() => {
        // Fetch user data and user profile data simultaneously using Promise.all
        Promise.all([fetchUserData(), fetchUserProfileData()])
            .then(([userDataSuccess, userProfileDataSuccess]) => {
                if (userDataSuccess && userProfileDataSuccess) {
                    toast.success('Successfully fetching user data and user profile data');
                    // set user data
                }
            })
            .catch((error) => {
                // Handle any errors that occurred during fetch
                toast.error('Error fetching user data or profile data');
                console.error('Error fetching data:', error);
            });
    }, []);



    return (
        <>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </>
    );
}
"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
    CardContent,
    CardFooter
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

import Loader from "@/components/spinner/Loader";
import { useAuth } from "@/context/Auth";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface LoginInput {
    username: string;
    password: string;
}

export default function LoginForm() {


    const { handleLoginSuccess } = useAuth();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors,isSubmitting },
        reset,
    } = useForm<LoginInput>();

    const [error, setError] = React.useState("");

    const onSubmit: SubmitHandler<LoginInput> = async (data) => {
        console.log("Submitted data:", data);
        // You can handle login logic here
        setError("");
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const responseData = await response.json();

            if (!response.ok) {
                toast.error("Error, please try again");
                setError(responseData.error);
                return;
            }

            handleLoginSuccess(responseData);
            toast.success("Successfully Login");

            reset();
        } catch (error) {
            toast.error("Error occurred while processing");
            console.error("Error:", error);
        } 
    };

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <CardContent>
                {error && (
                    <Alert variant="destructive" className="my-2">
                        <ExclamationCircleIcon className="h-6 w-6" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>
                            {error}
                        </AlertDescription>
                    </Alert>
                )}
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="username">Username</Label>
                        <Input
                            {...register("username", {
                                required: "Username is required",
                            })}
                            id="username"
                            placeholder="username"
                        />
                        {errors.username && (
                            <p className="text-red-600">{errors.username.message}</p>
                        )}
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            type="password"
                            {...register("password", {
                                required: "Password is required",
                            })}
                            id="password"
                        />
                        {errors.password && (
                            <p className="text-red-600">{errors.password.message}</p>
                        )}
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex">
                <div className="flex-grow" />
                <Button
                    type="submit"
                    className="transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
                >
                    {isSubmitting && (
                        <Loader />
                    )}
                    Login
                </Button>
            </CardFooter>
        </form>

    );
}

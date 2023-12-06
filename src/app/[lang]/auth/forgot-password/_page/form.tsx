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

interface ForgotPasswordInput {
    email: string
}

export default function ForgotPasswordForm() {



    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
    } = useForm<ForgotPasswordInput>();

    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState("");

    const onSubmit: SubmitHandler<ForgotPasswordInput> = async (data) => {
        console.log("Submitted data:", data);
        // You can handle login logic here
        setLoading(true);
        setError("");
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/forgot-password`, {
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
                setLoading(false);
                return;
            }

            toast.success("Link has been sent to email");

            reset();
        } catch (error) {
            toast.error("Error occurred while processing");
            console.error("Error:", error);
        } finally {
            setLoading(false); // Set loading to false when the request is done (success or error)
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
                        <Label htmlFor="email">Email</Label>
                        <Input
                            {...register("email", {
                                required: "Email can't empty",
                            })}
                            id="email"
                            placeholder="email"
                            type="email"
                        />
                        {errors.email && (
                            <p className="text-red-600">{errors.email.message}</p>
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
                    {loading && (
                        <Loader />
                    )}
                    Forgot password
                </Button>
            </CardFooter>
        </form>

    );
}

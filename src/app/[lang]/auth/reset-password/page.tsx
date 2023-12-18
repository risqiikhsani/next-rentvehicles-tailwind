"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

import Loader from "@/components/spinner/Loader";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useRouter, useSearchParams } from 'next/navigation';


interface ForgotPasswordInput {
    password: string
    password2: string
}

export default function ForgotPasswordForm() {
    const router = useRouter()
    const searchParams = useSearchParams()

    const token = searchParams.get('token')

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ForgotPasswordInput>();


    const [error, setError] = React.useState("");

    const onSubmit: SubmitHandler<ForgotPasswordInput> = async (data) => {
        console.log("Submitted data:", data);
        // You can handle login logic here

        setError("");
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/reset-password?token=${token}`, {
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

            toast.success("Password has been updated successfully");

            reset();

            router.push('/homepage')
        } catch (error) {
            toast.error("Error occurred while processing");
            console.error("Error:", error);
        }
    };

    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Reset password</CardTitle>
                <CardDescription>Create new password.</CardDescription>
            </CardHeader>


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
                            <Label htmlFor="email">New password</Label>
                            <Input
                                {...register("password", {
                                    required: "password can't empty",
                                })}
                                id="password"
                                placeholder="password"
                                type="password"
                            />
                            {errors.password && (
                                <p className="text-red-600">{errors.password.message}</p>
                            )}
                            <Label htmlFor="email">Confirm new password</Label>
                            <Input
                                {...register("password2", {
                                    required: "password2 can't empty",
                                })}
                                id="password2"
                                placeholder="password2"
                                type="password"
                            />
                            {errors.password2 && (
                                <p className="text-red-600">{errors.password2.message}</p>
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
                        {isSubmitting && <Loader />}
                        Reset password
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
}

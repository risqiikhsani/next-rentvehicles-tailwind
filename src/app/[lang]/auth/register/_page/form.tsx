"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
    CardContent
} from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";


import Loader from "@/components/spinner/Loader";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
    username: z.string()
        .regex(/^[a-zA-Z0-9]+$/, "Username can only contain letters and numbers.")
        .min(6, "Username must be at least 6 characters."),
    email: z.string().email({ message: "Invalid email format." }),
    password: z.string().min(6, "Password must be at least 6 characters."),
    password2: z.string(),
}).refine((data) => {
    return data.password === data.password2;
}, {
    message: "Passwords do not match.",
    path: ["password2"]
});

export default function RegisterForm() {

    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState("");

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
            password2: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
        setLoading(true);
        setError("");
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/register`, {
                method: "POST",
                body: JSON.stringify(values),
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

            toast.success("Successfully created an account.");
            form.reset();
        } catch (error) {
            toast.error("Error occurred while processing");
            console.error("Error:", error);
        } finally {
            setLoading(false); // Set loading to false when the request is done (success or error)
        }
    }




    return (

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
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="username" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="user@gmail.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input {...field} type="password" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password2"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input {...field} type="password" />
                                </FormControl>
                                <FormDescription>
                                    Confirm your password.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                        type="submit"
                        className="transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
                    >
                        {loading && (
                            <Loader />
                        )}
                        Register
                    </Button>
                </form>
            </Form>
        </CardContent>

    );
}

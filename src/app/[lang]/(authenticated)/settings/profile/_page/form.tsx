"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
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
import Title from "@/components/typography/Title";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import api from "@/lib/axios";
import { UserType } from "@/types/types";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { userGender } from "@/constants";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
    publicUsername: z.string().regex(/^[a-zA-Z0-9_]{4,16}$/, {
        message: "Username must contain only alphabets, numbers, and underscores (4-16 characters).",
    }),
    name: z.string().min(4).max(16),
    about: z.string(),
    gender: z.string(),
});

export default function UpdateProfile({ defaultValue }: { defaultValue: UserType }) {
    const router = useRouter();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        mode: 'onChange',
        defaultValues: {
            publicUsername: defaultValue.publicUsername,
            name: defaultValue.name,
            about: defaultValue.about,
            gender: defaultValue.gender
        },
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log("onsubmit", data)
        try {
            const response = api.put("/api/me/user",JSON.stringify(data))
            console.log("response",response)
            toast.success("Successfully updated profile user")
            router.push("/")
        } catch (error) {
            console.log("error",error)
            toast.error("Error updating profile user")
        }
    }

    const { isDirty } = form.formState;
    const onReset = () => {
        form.reset(); // Reset the form to its default values
    };
    return (
        <>


            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-full md:w-2/3 space-y-6 md:my-4"
                >
                    <FormField
                        control={form.control}
                        name="publicUsername"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Public Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="shadcn" {...field} defaultValue={field.value} />
                                </FormControl>
                                <FormDescription>Username for public</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="name" {...field} defaultValue={field.value} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="about"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>About</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="about me" {...field} defaultValue={field.value} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="gender"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Gender</FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    value={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="gender" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="overflow-y-auto max-h-[30rem]">
                                        {userGender.map((a, index) => (
                                            <SelectItem key={index} value={a}>
                                                {a}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {isDirty && (
                        <div className="flex gap-2">
                            <Button onClick={onReset}>Reset</Button>
                            <Button type="submit">Save</Button>
                        </div>
                    )}

                </form>
            </Form>

        </>
    );
}

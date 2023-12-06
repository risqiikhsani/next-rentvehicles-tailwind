"use client"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { UserType } from "@/types/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"
import { useRouter } from "next/navigation";
import api from "@/lib/axios"
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { userGender } from "@/constants"
import { useAuth } from "@/context/Auth"

const formSchema = z.object({
    publicUsername: z.string().min(2).max(50),
    name: z.string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
    }),
    about: z.string(),
    gender: z.string()
})


export default function SetupUser({ defaultValue }: { defaultValue: UserType }) {
    const router = useRouter();
    const {fetchData} = useAuth()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            publicUsername: defaultValue.publicUsername,
            name: defaultValue.name,
            about: defaultValue.about,
            gender: defaultValue.gender
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log("onsubmit", values)
        try {
            const response = await api.put("/api/me/user", JSON.stringify(values))
            if(response.data){
                console.log("response", response)
                toast.success("Successfully updated profile user")
                fetchData() // this is for renew the user data in useAuth, it also only refresh (not redirecting), it means the page stays at setup-user
                router.push("/")    // this will push to home
            }
        } catch (error) {
            console.log("error", error)
            toast.error("Error updating profile user")
        }
    }

    return (
        <Form {...form}>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="name" {...field} defaultValue={field.value} required/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
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
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}
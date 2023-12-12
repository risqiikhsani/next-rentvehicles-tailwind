"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
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
import Title from "@/components/typography/Title"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import api from "@/lib/axios"


const formSchema = z.object({
    name: z.string().min(2).max(50).refine((data) => data.length >= 2 && data.length <= 50, {
        message: "Name must be between 2 and 50 characters long."
    }),
    description: z.string().min(2).max(50).refine((data) => data.length >= 2 && data.length <= 50, {
        message: "Description must be between 2 and 50 characters long."
    }),
    street_name: z.string().min(2).max(50).refine((data) => data.length >= 2 && data.length <= 50, {
        message: "Street name must be between 2 and 50 characters long."
    }),
    address: z.string().min(2).max(50).refine((data) => data.length >= 2 && data.length <= 50, {
        message: "Address must be between 2 and 50 characters long."
    }),
    post_code: z.string().min(2).max(50).refine((data) => data.length >= 2 && data.length <= 50, {
        message: "post_code must be between 2 and 50 characters long."
    }),
    city: z.string().min(2).max(50).refine((data) => data.length >= 2 && data.length <= 50, {
        message: "City must be between 2 and 50 characters long."
    })
});


export default function Page() {
    const router = useRouter()
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            description: "",
            street_name: "",
            address: "",
            post_code: "",
            city: "",

        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
        try {
            const response = await api.post("/api/locations", JSON.stringify(values))
            // Handle successful submission
            console.log('Response:', response.data);
            toast.success('Data submitted successfully!');

            // redirect('/my-posts')  // https://stackoverflow.com/questions/76191324/next-13-4-error-next-redirect-in-api-routes
            router.push("/locations")
        } catch (error) {
            console.error('Error:', error);
            toast.error("Error creating post. Check some inputs !")
        }
    }

    return (
        <>
            <Title title="Create Location" text="Create location where the cars available." />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>name</FormLabel>
                                <FormControl>
                                    <Input placeholder="" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Enter the location name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>description</FormLabel>
                                <FormControl>
                                    <Input placeholder="" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Enter the location description.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="street_name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>street_name</FormLabel>
                                <FormControl>
                                    <Input placeholder="" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Enter the location street_name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>address</FormLabel>
                                <FormControl>
                                    <Input placeholder="" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Enter the location address.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="post_code"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>post_code</FormLabel>
                                <FormControl>
                                    <Input placeholder="" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Enter the location post_code.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>city</FormLabel>
                                <FormControl>
                                    <Input placeholder="" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Enter the location city.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </>
    )
}


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

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import Title from "@/components/typography/Title"
import Link from "next/link"


const formSchema = z.object({
    brand: z.string().min(2, {
        message: "brand must be at least 2 characters.",
    }),
    model: z.string().min(2, {
        message: "model must be at least 2 characters.",
    }),
    email: z.string({
        required_error: "Please select an email to display.",
    }).email(),
    year: z.string().min(4, {
        message: "year must be at least 4 characters.",
    }),
    unit: z.number().min(1, {
        message: "unit must be at least 1.",
    }),
    transmission: z.string().min(1, {
        message: "transmission can't be empty.",
    }),
    fuel_type: z.string().min(1, {
        message: "fuel type can't be empty.",
    }),
    price_per_day: z.number().min(1, {
        message: "price per day must be at least 1.",
    }),
    price_per_week: z.number().min(1, {
        message: "price per week must be at least 1.",
    }),
    price_per_month: z.number().min(1, {
        message: "price per month must be at least 1.",
    }),
})


export default function Page() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            brand: "",
            model: "",
            year: "",
            unit: 1,
            transmission: "",
            fuel_type: "",
            price_per_day: 0,
            price_per_week: 0,
            price_per_month: 0,
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <><Title title="Create Post" text="Create any post to rent!" />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="brand"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Brand</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select brand" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="BMW">BMW</SelectItem>
                                        <SelectItem value="Toyota">Toyota</SelectItem>
                                        <SelectItem value="Porsche">Porsche</SelectItem>
                                        <SelectItem value="Lamborghini">Lamborghini</SelectItem>
                                        <SelectItem value="Mitsubishi">Mitsubishi</SelectItem>
                                        <SelectItem value="Nissan">Nissan</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormDescription>
                                    Set the brand.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="model"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Model</FormLabel>
                                <FormControl>
                                    <Input placeholder="model" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your public display name.
                                </FormDescription>
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
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="email@gmail.com" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="m@example.com">m@example.com</SelectItem>
                                        <SelectItem value="m@google.com">m@google.com</SelectItem>
                                        <SelectItem value="m@support.com">m@support.com</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormDescription>
                                    You can manage email addresses in your{" "}
                                    <Link href="/examples/forms">email settings</Link>.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="year"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Year</FormLabel>
                                <FormControl>
                                    <Input placeholder="2003" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is the year creation of the vehicle.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="unit"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Unit</FormLabel>
                                <FormControl>
                                    <Input placeholder="1" {...field} />
                                </FormControl>
                                <FormDescription>
                                    number of vehicle.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="transmission"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Transmission</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="transmission" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="automatic">automatic</SelectItem>
                                        <SelectItem value="manual">manual</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormDescription>
                                    Vehicle's transmission type
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="fuel_type"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Fuel Type</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="fuel type" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="gasoline">gasoline</SelectItem>
                                        <SelectItem value="diesel">diesel</SelectItem>
                                        <SelectItem value="electric">electric</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormDescription>
                                    Vehicle's fuel type.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                                        <FormField
                        control={form.control}
                        name="price_per_day"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Price (per day)</FormLabel>
                                <FormControl>
                                    <Input placeholder="20" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Price per day.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                                        <FormField
                        control={form.control}
                        name="price_per_week"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Price (per week)</FormLabel>
                                <FormControl>
                                    <Input placeholder="100" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Price per week.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                                        <FormField
                        control={form.control}
                        name="price_per_month"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Price (per month)</FormLabel>
                                <FormControl>
                                    <Input placeholder="450" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Price per month.
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

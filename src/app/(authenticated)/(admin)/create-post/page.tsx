

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
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { useDropzone, FileWithPath } from 'react-dropzone';
import Image from "next/image"
import { useCallback } from "react"

const formSchema = z.object({
    brand: z.string().min(2, {
        message: "brand must be at least 2 characters.",
    }),
    model: z.string().min(2, {
        message: "model must be at least 2 characters.",
    }),
    type: z.string().min(2, {
        message: "type must be at least 2 characters.",
    }),
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
    discount: z.number().min(1, {
        message: "discount must be at least 1.",
    }),
    available: z.boolean(),
    // image: z
    // .custom<File>((v) => v instanceof File, {
    //   message: 'Image is required',
    // })
})


export default function Page() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            brand: "",
            model: "",
            year: "",
            type: "",
            unit: undefined,
            transmission: "manual",
            fuel_type: "gasoline",
            price_per_day: undefined,
            price_per_week: undefined,
            price_per_month: undefined,
            discount: undefined,
            available: true,
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    const { acceptedFiles, fileRejections, getRootProps, getInputProps } = useDropzone({
        onDrop: files => console.log(files),
        accept: {
            'image/png': ['.png',],
            'text/html': ['.html', '.htm'],
        },
        maxFiles: 1
    });



    const files = acceptedFiles.map((file: FileWithPath, index) => (
        <div key={file.path} className="relative">
            {/* <Image src={URL.createObjectURL(file)} width={300} height={300} alt="pic" /> */}
            <p>{file.name} - {file.size / 1000} kb</p>
        </div>
    ));



    return (
        <><Title title="Create Post" text="Create any post to rent!" />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" encType="multipart/form-data">
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

                    <FormItem>
                        <FormLabel>Image</FormLabel>
                        <FormControl>
                            <div {...getRootProps({ className: 'dropzone' })} className="hover:cursor-pointer border-solid border-2 p-6 rounded-xl border-slate-200 hover:border-slate-500">
                                <input {...getInputProps()} />
                                <p>Drag and drop some files here, or click to select files</p>
                            </div>
                        </FormControl>
                        <FormDescription>
                            Select main image (only .png file)
                        </FormDescription>
                        {files}

                    </FormItem>





                    <FormField
                        control={form.control}
                        name="type"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Type</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="type" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="Sedan">Sedan</SelectItem>
                                        <SelectItem value="Sport">Sport</SelectItem>
                                        <SelectItem value="Jeep">Jeep</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormDescription>
                                    The vehicle's type.
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

                    <Separator className="my-4" />

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
                    <Separator className="my-4" />
                    <FormField
                        control={form.control}
                        name="discount"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Discount (%)</FormLabel>
                                <FormControl>
                                    <Input placeholder="10" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Discount applied to all prices.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="available"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                                <div className="space-y-0.5">
                                    <FormLabel>Available</FormLabel>
                                    <FormDescription>
                                        Disable if the item is not ready to rent.
                                    </FormDescription>
                                </div>
                                <FormControl>
                                    <Switch
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />



                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </>

    )
}

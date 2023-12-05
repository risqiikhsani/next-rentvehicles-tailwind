"use client"

import { CalendarIcon } from "@radix-ui/react-icons"
import { addDays, format } from "date-fns"
import * as React from "react"
import { DateRange } from "react-day-picker"

import Title from "@/components/typography/Title"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

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
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import api from "@/lib/axios"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { convertToISOString } from "@/lib/helpers"
import { useEffect, useState } from "react"
import { EstimatedPriceType } from "@/types/types"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PaymentMethod } from "@/constants"
import { Locale } from "@/i18n.config"
import localeCurrency from "@/lib/currency"

const FormSchema = z.object({
    payment_method: z.string(),
    startDate: z.date({
        required_error: "Start date is required.",
    }),
    endDate: z.date({
        required_error: "End date is required.",
    }),
}).refine(data => {
    const { startDate, endDate } = data;

    // Check if the end date is later than the start date, not equal to it
    if (startDate && endDate) {
        return startDate < endDate;
    }

    return true; // If either date is not provided, it's considered valid
}, {
    message: "End date should be later than the start date.",
    path: ["endDate"],
});

export default function FormRentCar({ slug, lang }: { slug: string, lang: Locale, }) {
    const router = useRouter()
    const [estimatePrice, setEstimatePrice] = useState<EstimatedPriceType>({} as EstimatedPriceType)

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log("onsubmit", data)
        const formattedData = {
            post_id: parseInt(slug), // Assuming slug is a string representation of post_id
            start_date: convertToISOString(data.startDate),
            end_date: convertToISOString(data.endDate),
        };

        // Now you have the formatted data to send to your backend
        console.log("Formatted data", formattedData);

        api.post("/api/rents", formattedData)
            .then((response) => {
                // Handle the successful response here
                console.log("API Response:", response.data);
                toast.success("Rent created successfully");
                form.reset()
                router.push("/rents")
                // Do something with the response if needed
            })
            .catch((error) => {
                // Handle any errors that occur during the API call
                console.error("API Error:", error);
                toast.error("Failed to create rent");
                form.reset()

                // Optionally, you can handle specific error cases here
            });
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { startDate, endDate } = form.getValues(); // Get the start and end date from the form

                if (startDate && endDate) {
                    const rentDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)); // Calculate total days
                    const response = await api.get(`/api/rents/estimateprice?post_id=${slug}&rent_days=${rentDays}`);

                    const data: EstimatedPriceType = response.data;
                    setEstimatePrice(data)
                    console.log("Estimated Rent Price:", data); // Log the estimated rent price received from the API
                }
            } catch (error) {
                console.error("Error fetching estimated rent price:", error);
            }
        };

        fetchData(); // Call the fetchData function

    }, [form.watch('endDate')]);

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="payment_method"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Payment method</FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    value={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Paylater" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="overflow-y-auto max-h-[30rem]">
                                        {PaymentMethod.map((a, index) => (
                                            <SelectItem key={index} value={a}>
                                                {a}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormDescription>Set the payment method.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="startDate"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel>Start Date</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "pl-3 text-left font-normal",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                {field.value ? (
                                                    format(field.value, "PPP")
                                                ) : (
                                                    <span>Pick a date</span>
                                                )}
                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            disabled={(date) =>
                                                date < new Date()
                                            }
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                                <FormDescription>
                                    the starting date to rent and pick up the vehicle/item.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="endDate"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel>End Date</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "pl-3 text-left font-normal",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                {field.value ? (
                                                    format(field.value, "PPP")
                                                ) : (
                                                    <span>Pick a date</span>
                                                )}
                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            disabled={(date) =>
                                                date < new Date()
                                            }
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                                <FormDescription>
                                    the end date of rent the vehicle/item.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Table>
                        <TableCaption>estimate_price</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[200px]">name</TableHead>
                                <TableHead>data</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">total_days</TableCell>
                                <TableCell>{estimatePrice.rent_days}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">normal_price</TableCell>
                                <TableCell>{localeCurrency(estimatePrice.estimated_normal_price, lang)}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">saved_price</TableCell>
                                <TableCell>{localeCurrency(estimatePrice.estimated_saved_price, lang)}</TableCell>
                            </TableRow>
                            <TableRow className="bg-green-500">
                                <TableCell className="font-medium">final_price</TableCell>
                                <TableCell>{localeCurrency(estimatePrice.estimated_final_price, lang)}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </>


    )
}

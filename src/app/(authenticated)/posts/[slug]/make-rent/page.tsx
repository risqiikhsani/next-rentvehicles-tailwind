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
import moment from "moment"
import api from "@/lib/axios"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

const FormSchema = z.object({
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

export default function Page({ params }: { params: { slug: string } }) {
    const router = useRouter()
    const { slug } = params

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log("onsubmit",data)
        const formattedData = {
            post_id: parseInt(slug), // Assuming slug is a string representation of post_id
            start_date: moment(data.startDate).toISOString(),
            end_date: moment(data.endDate).toISOString(),
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

    return (
        <>
            <Title title="Rent" text="Rent your favorite items, get a great deal." />

            <p>post id is {slug}</p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                                                    "w-[240px] pl-3 text-left font-normal",
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
                                                    "w-[240px] pl-3 text-left font-normal",
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
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </>

    )
}

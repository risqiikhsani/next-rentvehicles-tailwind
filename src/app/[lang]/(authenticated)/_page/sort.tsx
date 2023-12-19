"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback, useEffect } from "react"

const FormSchema = z.object({
  sort: z.string()
})

export default function Sort() {
  const {replace} = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

 
  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair

  
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })
  const selectedSort = form.watch('sort');

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const [field, order] = data.sort.split(';'); // Split the value at ';'
    const updatedSearchParams = new URLSearchParams(searchParams.toString()); // Create a copy of searchParams
  
    // Set both 'sort' and 'order' in the URLSearchParams
    updatedSearchParams.set('sort', field);
    updatedSearchParams.set('order', order);
  
    console.log('Field:', field);
    console.log('Order:', order);
  
    replace(`${pathname}?${updatedSearchParams.toString()}`); // Replace URL with updated query parameters
  }


  useEffect(() => {
    form.handleSubmit(onSubmit)()
  },[selectedSort])

  return (
    <Form {...form}>
      <form>
        <FormField
          control={form.control}
          name="sort"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="created_at;asc">old</SelectItem>
                  <SelectItem value="created_at;desc">new</SelectItem>
                  <SelectItem value="price_per_day;desc">highest price</SelectItem>
                  <SelectItem value="price_per_day;asc">lowest price</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <Button type="submit" className="hidden">Submit</Button>
      </form>
    </Form>
  )
}

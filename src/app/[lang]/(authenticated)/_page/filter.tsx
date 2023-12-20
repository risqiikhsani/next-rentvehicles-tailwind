"use client";

import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  carFuelTypes,
  carTransmission,
  carTypes,
  manufacturers,
} from "@/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { DialogClose } from "@radix-ui/react-dialog";

const FormSchema = z.object({
  brand: z.string(),
  vehicle_type: z.string(),
  fuel_type: z.string(),
  transmission: z.string(),
});

export default function Filter() {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      brand: "all",
      vehicle_type: "all",
      transmission: "all",
      fuel_type: "all",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const updatedSearchParams = new URLSearchParams(searchParams.toString()); // Create a copy of searchParams
    data.brand != "all" && updatedSearchParams.set("filter_brand", data.brand);
    data.vehicle_type != "all" &&
      updatedSearchParams.set("filter_vehicle_type", data.vehicle_type);
    data.transmission != "all" &&
      updatedSearchParams.set("filter_transmission", data.transmission);
    data.fuel_type != "all" &&
      updatedSearchParams.set("filter_fuel_type", data.fuel_type);
    replace(`${pathname}?${updatedSearchParams.toString()}`); // Replace URL with updated query parameters
  }

  return (
    <>
      <Dialog>
        <DialogTrigger className="px-2 py-1 border-solid border-2 flex rounded-md border-slate-200">
          <AdjustmentsHorizontalIcon className="m-auto h-4 w-4 mr-2" />
          Filter
        </DialogTrigger>
        <DialogContent className="overflow-y-scroll max-h-screen">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-2/3 space-y-6"
            >
              <FormField
                control={form.control}
                name="brand"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>brand</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a brand" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="overflow-y-auto max-h-[30rem]">
                        <SelectItem key="all" value="all">
                          all
                        </SelectItem>
                        {manufacturers.map((a, index) => (
                          <SelectItem key={index} value={a}>
                            {a}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="vehicle_type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>vehicle type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a vehicle type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="overflow-y-auto max-h-[30rem]">
                        <SelectItem key="all" value="all">
                          all
                        </SelectItem>
                        {carTypes.map((a, index) => (
                          <SelectItem key={index} value={a}>
                            {a}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="fuel_type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>fuel type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a fuel type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="overflow-y-auto max-h-[30rem]">
                        <SelectItem key="all" value="all">
                          all
                        </SelectItem>
                        {carFuelTypes.map((a, index) => (
                          <SelectItem key={index} value={a}>
                            {a}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="transmission"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>transmission</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a transmission" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="overflow-y-auto max-h-[30rem]">
                        <SelectItem key="all" value="all">
                          all
                        </SelectItem>
                        {carTransmission.map((a, index) => (
                          <SelectItem key={index} value={a}>
                            {a}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <DialogClose asChild>
                <Button type="submit">Filter</Button>
              </DialogClose>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}

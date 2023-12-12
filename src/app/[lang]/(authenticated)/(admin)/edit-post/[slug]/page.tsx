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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import Title from "@/components/typography/Title";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { useDropzone, FileWithPath } from "react-dropzone";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import {
  carFuelTypes,
  carTransmission,
  carTypes,
  manufacturers,
} from "@/constants";
import { LocationType, PostType } from "@/types/types";
import { toast } from "sonner";
import api from "@/lib/axios";
import axios from "axios";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

// import { updateUser } from "./actions";

const formSchema = z.object({
  brand: z.string().min(2, {
    message: "brand must be at least 2 characters.",
  }),
  brand_model: z.string().min(2, {
    message: "model must be at least 2 characters.",
  }),
  vehicle_type: z.string().min(2, {
    message: "type must be at least 2 characters.",
  }),
  year: z.coerce.number().min(4, {
    message: "year must be at least 4 characters.",
  }),
  transmission: z.string().min(1, {
    message: "transmission can't be empty.",
  }),
  fuel_type: z.string().min(1, {
    message: "fuel type can't be empty.",
  }),
  price_per_day: z.coerce.number().min(1, {
    message: "price per day must be at least 1.",
  }),
  price_per_week: z.coerce.number().min(1, {
    message: "price per week must be at least 1.",
  }),
  price_per_month: z.coerce.number().min(1, {
    message: "price per month must be at least 1.",
  }),
  discount_percentage: z.coerce.number(),
  available: z.boolean(),
  bookable: z.boolean(),
  license_plate: z.string().min(1, {
    message: "license plate can't be empty.",
  }),
  location_id: z.string().min(1, {
    message: "location can't be empty.",
  }),
  body_color: z.string(),
  // image: z
  // .custom<File>((v) => v instanceof File, {
  //   message: 'Image is required',
  // })
});

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const router = useRouter();
  const [locations, setLocations] = useState<LocationType[]>([]);

  // this is for reamount whole form so that the default value of location shows up
  const [locationsFetched, setLocationsFetched] = useState(false);

  const fetchPost = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/posts/${slug}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data: PostType = await response.json();
      console.log("post", data);
      form.reset({
        brand: data.brand,
        brand_model: data.brand_model,
        year: data.year,
        vehicle_type: data.vehicle_type,
        transmission: data.transmission,
        fuel_type: data.fuel_type,
        price_per_day: data.price_per_day,
        price_per_week: data.price_per_week,
        price_per_month: data.price_per_month,
        discount_percentage: data.discount_percentage,
        available: data.available,
        bookable: data.bookable,
        license_plate: data.license_plate,
        location_id: data.location_id.toString(),
        body_color: data.body_color,
      });
      // form.setValue("brand", data.brand);
      // form.setValue("brand_model", data.brand_model);
      // form.setValue("year", data.year);
      // form.setValue("vehicle_type", data.vehicle_type);
      // form.setValue("transmission", data.transmission);
      // form.setValue("fuel_type", data.fuel_type);
      // form.setValue("price_per_day", data.price_per_day);
      // form.setValue("price_per_week", data.price_per_week);
      // form.setValue("price_per_month", data.price_per_month);
      // form.setValue("discount_percentage", data.discount_percentage);
      // form.setValue("available", data.available);
      // form.setValue("bookable", data.bookable);
      // form.setValue("license_plate", data.license_plate);
      // form.setValue("location_id", `${data.location_id}`);
      // form.setValue("body_color", data.body_color);
      console.log("location id", data.location_id);
    } catch (error) {
      // Handle error here, you might want to log it or set an error state
      console.log("error", error);
      toast.error("Error fetching post");
    }
  };

  const fetchLocations = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/locations`, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      console.log("locations", data);
      setLocations(data);
      if (!locationsFetched) {
        setLocationsFetched(true);
      }
    } catch (error) {
      // Handle error here, you might want to log it or set an error state
      console.log("error", error);
      toast.error("Error fetching locations");
    }
  };

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      brand: "",
      brand_model: "",
      year: undefined,
      vehicle_type: "",
      transmission: "",
      fuel_type: "",
      price_per_day: undefined,
      price_per_week: undefined,
      price_per_month: undefined,
      discount_percentage: 0,
      available: true,
      bookable: true,
      license_plate: "",
      location_id: "",
      body_color: "",
    },
    // values:post,
    // defaultValues: async () =>
    //   fetch(`http://localhost:8080/api/posts/${slug}`, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }),
  });

  useEffect(() => {
    fetchLocations();
    fetchPost();
  }, [locationsFetched]);

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    console.log("onsubmit", values);
    const formData = new FormData();

    formData.append("brand", values.brand);
    formData.append("brand_model", values.brand_model);
    formData.append("vehicle_type", values.vehicle_type);
    formData.append("year", values.year.toString());
    formData.append("transmission", values.transmission);
    formData.append("fuel_type", values.fuel_type);
    formData.append("price_per_day", values.price_per_day.toString());
    formData.append("price_per_week", values.price_per_week.toString());
    formData.append("price_per_month", values.price_per_month.toString());
    formData.append("body_color", values.body_color);
    formData.append("location_id", values.location_id);
    formData.append("discount_percentage", values.discount_percentage.toString());
    formData.append("license_plate", values.license_plate);
    formData.append("bookable", values.bookable ? "true" : "false");
    formData.append("available", values.available ? "true" : "false");

    if (acceptedMainImage !== null) {
      acceptedMainImage.forEach((element) => {
        formData.append("main_image", element);
      });
    }

    if (acceptedImages !== null) {
      acceptedImages.forEach((element) => {
        formData.append("images", element);
      });
    }
    
    try {
      const response = await api.put(`/api/posts/${slug}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // const response = updateUser.bind(formData,slug)
      // Handle successful submission
      console.log("Response:", response);
      toast.success("Data submitted successfully!");

      //redirect('/my-posts')  // https://stackoverflow.com/questions/76191324/next-13-4-error-next-redirect-in-api-routes
      router.push("/my-posts");
    } catch (error: unknown) {
      console.error("Error:", error);
      toast.error("Error creating post. Check some inputs !");
    }
  }

  const {
    acceptedFiles: acceptedMainImage,
    getRootProps: getRootPropsMainImage,
    getInputProps: getInputPropsMainImage,
  } = useDropzone({
    onDrop: (files) => console.log(files),
    accept: {
      "image/png": [".png"],
    },
    maxFiles: 1,
  });

  const files = acceptedMainImage.map((file: FileWithPath, index) => (
    <div key={file.path} className="relative">
      {/* <Image src={URL.createObjectURL(file)} width={300} height={300} alt="pic" /> */}
      <p>
        {file.name} - {file.size / 1000} kb
      </p>
    </div>
  ));

  const {
    acceptedFiles: acceptedImages,
    getRootProps: getRootPropsImages,
    getInputProps: getInputPropsImages,
  } = useDropzone({
    onDrop: (files) => console.log(files),
    accept: {
      "image/png": [".png", ".jpg", ".jpeg"],
    },
    maxFiles: 3,
  });

  const files2 = acceptedImages.map((file: FileWithPath, index) => (
    <div key={file.path} className="relative">
      {/* <Image src={URL.createObjectURL(file)} width={300} height={300} alt="pic" /> */}
      <p>
        {file.name} - {file.size / 1000} kb
      </p>
    </div>
  ));

  return (
    <>
      <Title title="Edit Post" text="edit post" />
      <div className="space-y-8 max-w-lg">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8"
            encType="multipart/form-data"
          >
            <FormField
              control={form.control}
              name="brand"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Brand</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select brand" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="overflow-y-auto max-h-[30rem]">
                      {manufacturers.map((a, index) => (
                        <SelectItem key={index} value={a}>
                          {a}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>Set the brand.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="brand_model"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Model</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="model"
                      {...field}
                      defaultValue={field.value}
                    />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormItem>
              <FormLabel>Main Image (maximum is 1 file)</FormLabel>
              <FormControl>
                <div
                  {...getRootPropsMainImage({ className: "dropzone" })}
                  className="dark:bg-slate-300 hover:cursor-pointer border-solid border-2 p-6 rounded-xl border-slate-200 hover:border-slate-500 bg-slate-50 text-center"
                >
                  <input {...getInputPropsMainImage()} />
                  <p className="dark:text-gray-700">
                    Drag and drop some files here, or click to select files
                  </p>
                </div>
              </FormControl>
              <FormDescription>
                Select main image (only .png file)
              </FormDescription>
              {files}
            </FormItem>

            <FormItem>
              <FormLabel>Other Images (maximum is 3 files)</FormLabel>
              <FormControl>
                <div
                  {...getRootPropsImages({ className: "dropzone" })}
                  className="dark:bg-slate-300 hover:cursor-pointer border-solid border-2 p-6 rounded-xl border-slate-200 hover:border-slate-500 bg-slate-50 text-center"
                >
                  <input {...getInputPropsImages()} />
                  <p className="dark:text-gray-700">
                    Drag and drop some files here, or click to select files
                  </p>
                </div>
              </FormControl>
              <FormDescription>
                Select other images (only .png/.jpg/.jpeg file)
              </FormDescription>
              {files2}
            </FormItem>

            <FormField
              control={form.control}
              name="vehicle_type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {carTypes.map((a, index) => (
                        <SelectItem key={index} value={a}>
                          {a}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>The vehicle's type.</FormDescription>
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
                    <Input placeholder="2004" type="number" {...field} />
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
              name="transmission"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Transmission</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="transmission" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {carTransmission.map((a, index) => (
                        <SelectItem key={index} value={a}>
                          {a}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>Vehicle's transmission type</FormDescription>
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
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="fuel type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {carFuelTypes.map((a, index) => (
                        <SelectItem key={index} value={a}>
                          {a}
                        </SelectItem>
                      ))}
                      {/* <SelectItem value="gasoline">
                        gasoline
                      </SelectItem>
                      <SelectItem value="diesel">
                        diesel
                      </SelectItem>
                      <SelectItem value="electric">
                        electric
                      </SelectItem> */}
                    </SelectContent>
                  </Select>
                  <FormDescription>Vehicle's fuel type.</FormDescription>
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
                    <Input placeholder="100" type="number" {...field} />
                  </FormControl>
                  <FormDescription>Price per day.</FormDescription>
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
                    <Input placeholder="300" type="number" {...field} />
                  </FormControl>
                  <FormDescription>Price per week.</FormDescription>
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
                    <Input placeholder="500" type="number" {...field} />
                  </FormControl>
                  <FormDescription>Price per month.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Separator className="my-4" />
            <FormField
              control={form.control}
              name="discount_percentage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Discount (%)</FormLabel>
                  <FormControl>
                    <Input placeholder="10" type="number" {...field} />
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
            <FormField
              control={form.control}
              name="bookable"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <div className="space-y-0.5">
                    <FormLabel>Bookable</FormLabel>
                    <FormDescription>
                      Disable if the item is not bookable.
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

            <FormField
              control={form.control}
              name="license_plate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>License Plate</FormLabel>
                  <FormControl>
                    <Input placeholder="ABC-123" {...field} />
                  </FormControl>
                  <FormDescription>
                    License plate specifically for this vehicle.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="body_color"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Body Color</FormLabel>
                  <FormControl>
                    <Input placeholder="black" {...field} />
                  </FormControl>
                  <FormDescription>Body color is optional.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>

                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Location" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {locations.map((a: LocationType) => (
                        <SelectItem key={a.ID} value={a.ID.toString()}>
                          {a.name}
                        </SelectItem>
                      ))}
                      {/* <SelectItem value={locations[0].ID.toString()}>
                        a
                      </SelectItem>
                      <SelectItem value={locations[1].ID.toString()}>
                        b
                      </SelectItem>
                      <SelectItem value={locations[2].ID.toString()}>
                        c
                      </SelectItem> */}
                    </SelectContent>
                  </Select>

                  <FormDescription>Set where the item located.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </>
  );
}

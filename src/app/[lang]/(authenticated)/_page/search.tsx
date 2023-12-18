"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import Loader from "@/components/spinner/Loader";
import { useState } from "react";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
interface SearchInput {
  text: string;
}

export default function Search() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors,isSubmitting },
    reset,
  } = useForm<SearchInput>();
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()!
 
  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )




  const onSubmit: SubmitHandler<SearchInput> = async (data) => {
    console.log("Submitted data:", );
    router.push(pathname + '?' + createQueryString('search', data.text))
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-2">
          <Input {...register("text")} id="text" placeholder="search for car" />
          <Button
            type="submit"
            className="transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
          >
            {isSubmitting && <Loader />}
            Search
          </Button>
        </div>
      </form>
    </>
  );
}

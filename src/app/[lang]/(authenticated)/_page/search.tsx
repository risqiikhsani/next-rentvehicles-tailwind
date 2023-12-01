"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";

import Loader from "@/components/spinner/Loader";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import {
  carFuelTypes,
  carTransmission,
  carTypes,
  manufacturers,
} from "@/constants";
import Filter from "./filter";
import Sort from "./sort";

interface SearchInput {
  text: string;
}

export default function Search() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<SearchInput>();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit: SubmitHandler<SearchInput> = async (data) => {
    console.log("Submitted data:", data);
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
            {loading && <Loader />}
            Search
          </Button>
        </div>
      </form>
    </>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    DropdownMenuItem,
    DropdownMenuShortcut
} from "@/components/ui/dropdown-menu";
import { RentType } from "@/types/types";

import { Input } from "@/components/ui/input";
import api from "@/lib/axios";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import Loader from "@/components/spinner/Loader";

type Inputs = {
    status: string;
};

export default function Accept({text,data}:{text:string,data:RentType}) {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors,isSubmitting },
  } = useForm<Inputs>();


  const onSubmit: SubmitHandler<Inputs> = async (values) => {
    const formData = new FormData();

    formData.append("status", values.status);
  
    try {
      const response = await api.put(`/api/rent-details/${data.RentDetail.ID}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("response", response);
      toast.success("Successfully updated rent detail.");
      router.refresh();
    } catch (error) {
      console.log("error", error);
      toast.error("Error updating rent detail.");
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
            {text}
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Accept</DialogTitle>
            <DialogDescription>
                Accept rent order.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input type="hidden" {...register("status")} defaultValue="Accept"/>
          <DialogFooter>
            <DialogClose asChild className="sm:justify-start">
              <Button type="submit">
                {isSubmitting && <Loader/>}
                Confirm</Button>
            </DialogClose>
          </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

"use client";

import { RentType } from "@/types/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { useForm, SubmitHandler } from "react-hook-form";
import api from "@/lib/axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";

type Inputs = {
    status: string;
};

export default function ReadyToPickup({data}:{data:RentType}) {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
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
            Ready to pickup
          </DropdownMenuItem>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Ready to pickup.</DialogTitle>
            <DialogDescription>
                Please make sure the car is ready to be used so that the user can pick it up before the rent starts.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input type="hidden" {...register("status")} defaultValue="ReadyToPickup"/>
          <DialogFooter>
            <DialogClose asChild className="sm:justify-start">
              <Button type="submit">Confirm</Button>
            </DialogClose>
          </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

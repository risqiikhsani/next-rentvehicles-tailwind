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
import Loader from "@/components/spinner/Loader";

type Inputs = {
  text: string;
};

export default function Cancel({data}:{data:RentType}) {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors,isSubmitting },
  } = useForm<Inputs>();


  const onSubmit: SubmitHandler<Inputs> = async (values) => {
    const json = {
        cancel_reason: values.text,
        is_cancelled: true
    }
  
    try {
      const response = await api.put(`/api/rents/${data.ID}`, JSON.stringify(json));
      console.log("response", response);
      toast.success("Successfully updated rent.");
      router.refresh();
    } catch (error) {
      console.log("error", error);
      toast.error("Error updating rent.");
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
            Cancel Order
          </DropdownMenuItem>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. Are you sure you want to cancel the rent order?
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="message-2">Your notes</Label>
              <Textarea placeholder="Type your message here." id="message-2" {...register("text")}/>
              <p className="text-sm text-muted-foreground">
                Your message will be copied to the support team.
              </p>
            </div>
          </div>
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

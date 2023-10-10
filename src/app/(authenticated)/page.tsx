import { CarCard } from "@/components/CarCard";
import LeftNavBar from "@/components/left-navbar";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Review from "@/components/review";



export default function Home() {
  return (
    <>
      <div className="flex justify-around items-center my-5">
        <div className="flex gap-4">
          <Input id="search" type="text" placeholder="search" />
          <Button>Search</Button>
        </div>



        <Dialog>
          <DialogTrigger className="px-2 py-1 border-solid border-2 flex rounded-md border-slate-200">
            {/* <Button id="filter" className="rounded-3xl">
              <AdjustmentsHorizontalIcon className="mr-2 h-4 w-4" />
              Filter
            </Button> */}
            <AdjustmentsHorizontalIcon className="m-auto h-4 w-4 mr-2" />
            Filter
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Filter</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        <Select>
          <SelectTrigger className="w-[100px]" id="sort">
            <SelectValue placeholder="Sort" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Separator className="my-6" />

      <div className="flex flex-wrap gap-4 justify-center">
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
      </div>
    </>
  );
}

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
import Title from "@/components/typography/Title";
import { PostType } from "@/types/types";

async function getData() {
  // const res = await fetch('http://localhost:8080/api/posts',{ next: { tags: ['posts'] } })
  const res = await fetch('http://localhost:8080/api/posts', { cache: 'no-store' })

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  const data: PostType[] = await getData()

  return (
    <>
      <Title title="Home" text="Find anything to rent!" />
      <div className="flex justify-between items-center my-5">

        <div className="flex gap-4">
          <Input id="search" type="text" placeholder="search" />
          <Button>Search</Button>
        </div>



        <Dialog>
          <DialogTrigger className="px-2 py-1 border-solid border-2 flex rounded-md border-slate-200">
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

      <div className="flex flex-wrap gap-4 ">
        {data && data.map((a: PostType,index: number) => (
          <CarCard data={a} key={index}/>
        ))}
      </div>
    </>
  );
}

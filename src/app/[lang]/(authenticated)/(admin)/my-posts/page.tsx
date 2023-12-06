
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { PlusIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Title from "@/components/typography/Title";
import { PostType } from "@/types/types";
import { cookies } from 'next/headers'
import { CarCardAdmin } from "./_page/CarCardAdmin";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";


async function getData() {
  // const res = await fetch('http://localhost:8080/api/posts',{ next: { tags: ['posts'] } })
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/posts/created`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${cookies().get("accesstoken")?.value}`,
    },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  
  return res.json();
}

export default async function Home({params}:{params:{lang:Locale}}) {
  const data: PostType[] = await getData();
  const dict = await getDictionary(params.lang)

  return (
    <>
      <Title title={dict.my_post.title} text={dict.my_post.description} />
      <div className="flex justify-between items-center my-5">
        <Button variant="outline" asChild>
          <Link href="/create-post">
            <PlusIcon className="h-4 w-4 mr-2" />
            Create Post{" "}
          </Link>
        </Button>
      </div>

      {/* <div className="flex justify-between items-center my-5">
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
      </div> */}

      <Separator className="my-6" />

      <div className="flex flex-wrap gap-4">
        {data &&
          data.map((a: PostType, index: number) => (
            <CarCardAdmin data={a} key={index} lang={params.lang}/>
          ))}
      </div>
    </>
  );
}

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
import { Suspense } from "react";
import PostSkeleton from "@/components/spinner/post-skeleton";
import Search from "./search";
import Filter from "./filter";
import Sort from "./sort";

async function getData() {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  await delay(2000); // Introduce a delay of 2 seconds before fetching data
  // const res = await fetch('http://localhost:8080/api/posts',{ next: { tags: ['posts'] } })
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/posts`, {
    cache: "no-store",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function PostList() {
  const data: PostType[] = await getData();

  return (
    <>
      <Title title="Home" text="Find anything to rent!" />

      <div className="flex flex-col md:flex-row items-center my-5 md:justify-between gap-2">
        <Search />
        <div className="gap-2 flex w-full md:w-fit justify-between md:justify-normal">
          <Filter />
          <Sort />
        </div>
      </div>

      <Separator className="my-6" />
      <div className="flex flex-wrap gap-4 ">
        <Suspense
          fallback={
            <>
              <PostSkeleton />
              <PostSkeleton />
              <PostSkeleton />
              <PostSkeleton />
              <PostSkeleton />
              <PostSkeleton />
            </>
          }
        >
          {data &&
            data.map((a: PostType, index: number) => (
              <CarCard data={a} key={index} />
            ))}
        </Suspense>
      </div>
    </>
  );
}

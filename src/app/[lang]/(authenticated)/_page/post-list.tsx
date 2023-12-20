import { CarCard } from "@/components/CarCard";
import PostSkeleton from "@/components/spinner/post-skeleton";
import Title from "@/components/typography/Title";
import { Separator } from "@/components/ui/separator";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { PostType } from "@/types/types";
import { Suspense } from "react";
import Filter from "./filter";
import Search from "./search";
import Sort from "./sort";
import Reset from "./reset";

// async function getData(searchParams?:{[key: string]: string | string[] | undefined}) {
//   if(searchParams){

//   }
//   const delay = (ms: number) =>
//     new Promise((resolve) => setTimeout(resolve, ms));

//   await delay(2000); // Introduce a delay of 2 seconds before fetching data
//   // const res = await fetch('http://localhost:8080/api/posts',{ next: { tags: ['posts'] } })
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/posts`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

async function getData(searchParams?: {
  [key: string]: string | string[] | undefined;
}) {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  await delay(2000); // Introduce a delay of 2 seconds before fetching data

  const url = new URL(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/posts`);

  if (searchParams) {
    for (const [key, value] of Object.entries(searchParams)) {
      if (value) {
        url.searchParams.append(
          key,
          Array.isArray(value) ? value.join(",") : value
        );
      }
    }
  }

  const res = await fetch(url.toString(), {
    cache: "no-store",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function PostList({
  lang,
  searchParams,
}: {
  lang: Locale;
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const data: PostType[] = await getData(searchParams);

  return (
    <>
      <div className="grid md:grid-cols-3 gap-4 justify-items-center">
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
              <CarCard data={a} key={index} lang={lang} />
            ))}
        </Suspense>
      </div>
    </>
  );
}

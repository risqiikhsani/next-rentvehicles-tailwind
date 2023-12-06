

import { CarCard } from "@/components/CarCard";
import PostSkeleton from "@/components/spinner/post-skeleton";
import Title from "@/components/typography/Title";
import { Separator } from "@/components/ui/separator";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { FavoriteType, PostType } from "@/types/types";
import { cookies } from 'next/headers';
import { Suspense } from "react";


async function getData() {
  // const res = await fetch('http://localhost:8080/api/posts',{ next: { tags: ['posts'] } })
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/favorites/posts`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${cookies().get("accesstoken")?.value}`,
    },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch rent history data");
  }

  return res.json();
}

export default async function Page({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang)
  const data: PostType[] = await getData();
  return (
    <>
      <Title title={dict.favorite.title} text={dict.favorite.description} />
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
            data.map((a, index: number) => (
              <CarCard data={a} key={index} lang={params.lang} />
            ))}
        </Suspense>
      </div>
    </>
  );
}

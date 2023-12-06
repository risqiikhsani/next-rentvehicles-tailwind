

import Title from "@/components/typography/Title";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { FavoriteType } from "@/types/types";
import { cookies } from 'next/headers';


async function getData() {
  // const res = await fetch('http://localhost:8080/api/posts',{ next: { tags: ['posts'] } })
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/favorites`, {
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

export default async function Page({params}:{params:{lang:Locale}}) {
  const dict = await getDictionary(params.lang)
  const data: FavoriteType[] = await getData();
  return (
    <>
    <Title title={dict.favorite.title} text={dict.favorite.description}/>
      {data.map((a) => (
        <p>{a.PostID} , {a.UserID}</p>
      ))}
    </>
  );
}

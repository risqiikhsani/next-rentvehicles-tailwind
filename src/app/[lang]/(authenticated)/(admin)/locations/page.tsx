import Title from "@/components/typography/Title";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { LocationType } from "@/types/types";
import { cookies } from "next/headers";
import CardLocation from "./_page/card-location";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

async function getData() {
  // const res = await fetch('http://localhost:8080/api/posts',{ next: { tags: ['posts'] } })
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/locations`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies().get("accesstoken")?.value}`,
    },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page({params}:{params:{lang:Locale}}) {
  const data: LocationType[] = await getData();
  const dict = await getDictionary(params.lang)



  return (
    <>
      <Title title={dict.locations.title} text={dict.locations.description} />
      <div className="flex justify-between items-center my-5">
        <Button variant="outline" asChild>
          <Link href="/create-location">
            <PlusIcon className="h-4 w-4 mr-2" />
            Create Location{" "}
          </Link>
        </Button>
      </div>
      
      <div className="grid md:grid-cols-2 gap-2 justify-items-center">
      {data && data.map((a, index) => 
        <CardLocation key={index} data={a}/>
      )}
      </div>

    </>
  );
}

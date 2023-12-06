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

  const location = (data: LocationType) => {
    return (
      <Card className="m-10 hover:border hover:border-blue-400" key={data.ID}>
        <CardHeader>
          <CardTitle>{data.Name}</CardTitle>
          <CardDescription>{data.Description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>address = {data.Address}</p>
          <p>city = {data.City}</p>
          <p>street name = {data.StreetName}</p>
          <p>post code = {data.PostCode}</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    );
  };

  return (
    <>
      <Title title={dict.locations.title} text={dict.locations.description} />
      {data && data.map((a, index) => location(a))}
    </>
  );
}
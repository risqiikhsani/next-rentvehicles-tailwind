import Title from "@/components/typography/Title";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { UserType } from "@/types/types";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cookies } from "next/headers";

async function getData(userId: string) {
  // const res = await fetch('http://localhost:8080/api/posts',{ next: { tags: ['posts'] } })
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/${userId}`,
    {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies().get("accesstoken")?.value}`,
      },
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function Page({
  params,
}: {
  params: { slug: string; lang: Locale };
}) {
  const data: UserType = await getData(params.slug);
  const dictionary = await getDictionary(params.lang);

  return (
    <>
      <Title title="User Detail" />
      <div className="flex flex-col items-center justify-center gap-2">
        <Avatar className="h-32 w-32">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Badge variant="outline">{data.role}</Badge>
        <h1 className="my-4 text-2xl">{data.name}</h1>
        <h2>public username : {data.publicUsername}</h2>
        

        <Table>
          <TableCaption>User detail</TableCaption>

          <TableBody>
            <TableRow>
              <TableCell className="font-medium">About</TableCell>
              <TableCell>{data.about}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Gender</TableCell>
              <TableCell>{data.gender}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">user active</TableCell>
              <TableCell>{data.is_active ? "true" : "false"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Last update</TableCell>
              <TableCell>{data.UpdatedAt}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}

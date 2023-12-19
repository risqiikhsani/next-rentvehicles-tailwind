import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { formatTimestamp } from "@/lib/helpers";
import { PostType, UserType } from "@/types/types";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { cookies } from "next/headers";
import Link from "next/link";

async function getData(postId: string) {
  const cookieStore = cookies();
  const token = cookieStore.get("accesstoken")?.value;

  // const res = await fetch('http://localhost:8080/api/posts',{ next: { tags: ['posts'] } })
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/${postId}`,
    {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function HoverCardUser({ id }: { id: string }) {
  const data: UserType = await getData(id);

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" asChild>
          <Link href={`/users/${id}`}>{id}</Link>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        {data ? (
          <div className="flex justify-between space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/vercel.png" />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>

            <div className="space-y-1">
              <h4 className="text-sm font-semibold">{data.name}</h4>
              <p className="text-sm">{data.publicUsername}</p>
              <div className="flex items-center pt-2">
                <CalendarDaysIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                <span className="text-xs text-muted-foreground">
                  {formatTimestamp(data.CreatedAt)}
                </span>
              </div>
            </div>
          </div>
        ) : (
          "Cant load data"
        )}
      </HoverCardContent>
    </HoverCard>
  );
}

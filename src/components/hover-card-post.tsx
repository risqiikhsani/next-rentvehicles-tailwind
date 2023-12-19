import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { formatTimestamp } from "@/lib/helpers";
import { PostType } from "@/types/types";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

async function getData(postId: string) {
  // const res = await fetch('http://localhost:8080/api/posts',{ next: { tags: ['posts'] } })
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/posts/${postId}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function HoverCardPost({ id }: { id: string }) {
  const data: PostType = await getData(id);

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">
          <Link href={`/posts/${id}`}>{id}</Link>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        {data ? (
          <div className="flex justify-between space-x-4">
            <div>
              <Image
                src={data.MainImage.url}
                height="500"
                width="500"
                className="rounded-xl w-fit h-fit"
                alt="car"
              />
            </div>

            <div className="space-y-1">
              <h4 className="text-sm font-semibold">{data.brand}</h4>
              <p className="text-sm">{data.brand_model}</p>
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

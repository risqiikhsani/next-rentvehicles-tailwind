"use client"

import CarCardFavoriteButton from "@/components/CarCardFavoriteButton";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/Auth";
import { PostType } from "@/types/types";
import { KeyIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Buttons({ data }: { data: PostType }) {
    const { user } = useAuth()
    return (
        <div className="flex gap-2 items-center">
            <CarCardFavoriteButton data={data} />

            {user.role == "Basic" && data.available &&
                <Button className="rounded-xl w-full" asChild>
                    <Link href={`/posts/${data.ID}/make-rent`}><KeyIcon className="w-4 h-4 mr-2" />Rent</Link>
                </Button>
            }


            {user.role == "Admin" &&
                <div className="flex gap-4 my-10">
                    <Button className="rounded-xl w-full" asChild>
                        <Link href={`/edit-post/${data.ID}`}><KeyIcon className="w-4 h-4 mr-2" />Edit</Link>
                    </Button>
                </div>
            }
        </div>
    )
}
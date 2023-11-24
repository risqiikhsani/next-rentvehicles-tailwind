"use client"

import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/Auth";
import { PostType } from "@/types/types";
import { HeartIcon, KeyIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Buttons({ data }: { data: PostType }) {
    const { user } = useAuth()
    return (
        <>
            {user.role == "Basic" &&
                (
                    <>
                        <div className="flex gap-4 my-10">
                            <Button variant="outline" className="rounded-xl w-full">
                                <HeartIcon className="w-4 h-4 mr-2" />
                                Favorite
                            </Button>

                            <Button variant="outline" className="rounded-xl w-full" asChild>
                                <Link href={`/posts/${data.ID}/make-book`}><LockClosedIcon className="w-4 h-4 mr-2" />Book</Link>
                            </Button>
                        </div>
                        <Button className="rounded-xl w-full" asChild>
                            <Link href={`/posts/${data.ID}/make-rent`}><KeyIcon className="w-4 h-4 mr-2" />Rent</Link>
                        </Button>
                    </>
                )}

            {user.role == "Admin" &&
                <div className="flex gap-4 my-10">
                <Button className="rounded-xl w-full" asChild>
                    <Link href={`/edit-post/${data.ID}`}><KeyIcon className="w-4 h-4 mr-2" />Edit</Link>
                </Button>
                </div>
            }
        </>
    )
}
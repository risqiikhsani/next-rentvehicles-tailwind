"use client"

import { ArrowRightIcon, HeartIcon } from "@heroicons/react/24/solid";
import { Button } from "./ui/button";
import Link from "next/link";
import { PostType } from "@/types/types";
import { useAuth } from "@/context/Auth";
import { UserType } from '../types/types';

export default function CarCardButtons({ data }: { data: PostType }) {

    const { user } = useAuth()

    return (
        <>
            {user.ID == 0 && (
                <Button asChild>
                    <Link href={`posts/${data.ID}`}>
                        See Detail
                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            )}

            {user.ID != 0 && user.role != "Admin" && (
                <>
                    <Button variant="outline">
                        <HeartIcon className="mr-2 h-4 w-4" />
                        Favorite
                    </Button>

                    <Button asChild>
                        <Link href={`posts/${data.ID}`}>
                            See Detail
                            <ArrowRightIcon className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </>
            )}

            {user.ID != 0 && user.role == "Admin" && (
                <>
                    <Button asChild>
                        <Link href={`posts/${data.ID}`}>
                            See Detail
                            <ArrowRightIcon className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <Button asChild>
                        <Link href={`posts/${data.ID}`}>
                            Edit
                            <ArrowRightIcon className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <Button asChild>
                        <Link href={`posts/${data.ID}`}>
                            Delete
                            <ArrowRightIcon className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </>
            )}

        </>
    )
}
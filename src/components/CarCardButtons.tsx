"use client"

import { ArrowRightIcon, HeartIcon } from "@heroicons/react/24/solid";
import {PencilIcon} from "@heroicons/react/24/solid";
import {TrashIcon} from "@heroicons/react/24/solid";
import { Button } from "./ui/button";
import Link from "next/link";
import { PostType } from "@/types/types";
import { useAuth } from "@/context/Auth";
import { UserType } from '../types/types';

export default function CarCardButtons({ data }: { data: PostType }) {

    const { user } = useAuth()

    return (
        <div className="flex gap-2 flex-wrap">
            {user.role == "Basic" && (
                <Button variant="outline" asChild className="grow"> 
                    <HeartIcon className="mr-2 h-4 w-4" />
                    Favorite
                </Button>
            )}

            <Button asChild className="grow">
                <Link href={`posts/${data.ID}`}>
                    See Detail
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
            </Button>

            <Button asChild className="grow">
                <Link href={`posts/${data.ID}`}>
                    Edit
                    <PencilIcon className="ml-2 h-4 w-4" />
                </Link>
            </Button>

            <Button asChild className="grow bg-red-400 hover:bg-red-300">
                <Link href={`posts/${data.ID}`}>
                    Delete
                    <TrashIcon className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>
    )
}
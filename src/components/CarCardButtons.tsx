"use client";

import { ArrowRightIcon, HeartIcon } from "@heroicons/react/24/solid";
import { PencilIcon } from "@heroicons/react/24/solid";
import { TrashIcon } from "@heroicons/react/24/solid";
import { Button } from "./ui/button";
import Link from "next/link";
import { PostType } from "@/types/types";
import { useAuth } from "@/context/Auth";
import { UserType } from "../types/types";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function CarCardButtons({ data }: { data: PostType }) {
  const { user } = useAuth();

  return (
    <div className="flex gap-2 flex-wrap">
      {user.role == "Basic" && (
        <Button variant="outline" className="grow">
          <>
            Favorite
            <HeartIcon className="mr-2 h-4 w-4" />
          </>
        </Button>
      )}

      <Button asChild className="grow">
        <Link href={`posts/${data.ID}`}>
          See Detail
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Link>
      </Button>

      <Button asChild className="grow">
        <Link href={`edit-post/${data.ID}`}>
          Edit
          <PencilIcon className="ml-2 h-4 w-4" />
        </Link>
      </Button>

      {/* <Button className="grow bg-red-400 hover:bg-red-300">
        
          Delete
          <TrashIcon className="ml-2 h-4 w-4" />
        
      </Button> */}

      <AlertDialog>
        <AlertDialogTrigger className="grow">
          <Button className="w-full bg-red-400 hover:bg-red-300">
            Delete
            <TrashIcon className="ml-2 h-4 w-4" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you absolutely sure to delete this post?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              post and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
